import { parseDate, parseValue } from '@/server/utils/parse'
import { ContractStatusT, ContractT, ContractTypeT } from '@/types/contract'
import { fastifyCors } from '@fastify/cors'
import { parse } from 'csv-parse/sync'
import { fastify } from 'fastify'
import { readFileSync } from 'node:fs'
import { z } from 'zod'

const csv = readFileSync('server/data/contracts.csv')

const [_header, ...rows]: Array<string[]> = parse(csv.toString(), {
  delimiter: ';',
})

const contracts: Array<ContractT> = rows.map(row => {
  return {
    id: row[0],
    name: row[1],
    client: row[2],
    startDate: parseDate(row[3]),
    expirationDate: parseDate(row[4]),
    status: row[5] as ContractStatusT,
    value: parseValue(row[6]),
    type: row[7] as ContractTypeT,
  }
})

const startServer = async () => {
  const server = fastify()
    .register(fastifyCors, { origin: '*' })
    .get('/contracts', (request, reply) => {
      const { count, page } = z
        .object({
          count: z.string().transform(count => parseInt(count)),
          page: z.string().transform(page => parseInt(page)),
          status: z
            .enum([
              'Ativo',
              'Expirado',
              'Pendente de Renovação',
              'Próximo ao Vencimento',
            ])
            .optional(),
          type: z
            .enum(['Serviço', 'Fornecimento', 'Consultoria', 'TI'])
            .optional(),
        })
        .parse({
          count: contracts.length.toString(),
          page: '1',
          ...(request.query || {}),
        })

      const total = contracts.length
      const offset = page - 1
      const params = {
        total,
        amountByStatus: contracts.reduce(
          (amounts, contract) => {
            const status = amounts.find(
              amount => amount.status === contract.status,
            )

            if (status) amounts[amounts.indexOf(status)].amount += 1
            else amounts.push({ status: contract.status, amount: 1 })

            return amounts
          },
          [] as { status: ContractStatusT; amount: number }[],
        ),
        amountByType: contracts.reduce(
          (amounts, contract) => {
            const type = amounts.find(amount => amount.type === contract.type)

            if (type) amounts[amounts.indexOf(type)].amount += 1
            else amounts.push({ type: contract.type, amount: 1 })

            return amounts
          },
          [] as { type: ContractTypeT; amount: number }[],
        ),
      }

      if (count < total) {
        if (count * offset + count > total)
          reply.send({
            contracts: contracts.slice(count * offset, total),
            ...params,
          })
        else
          reply.send({
            contracts: contracts.slice(count * offset, count * offset + count),
            ...params,
          })
      } else reply.send({ contracts, ...params })
    })

  await server.listen({
    port: 4000,
    host: '0.0.0.0',
  })

  console.log('Server ready to receive requests')
}

startServer()
