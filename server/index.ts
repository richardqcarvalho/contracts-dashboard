import { parseDate, parseValue } from '@/server/utils/parse'
import { ContractT, GetContractsParamsT } from '@/types/contract'
import { fastifyCors } from '@fastify/cors'
import { parse } from 'csv-parse/sync'
import { fastify } from 'fastify'
import { readFileSync } from 'node:fs'
import { z } from 'zod'

const csv = readFileSync('server/data/contracts.csv')

const [_header, ...rows]: Array<string[]> = parse(csv.toString(), {
  delimiter: ';',
})

const dataObject: Array<ContractT> = rows.map(row => {
  return {
    id: row[0],
    name: row[1],
    client: row[2],
    startDate: parseDate(row[3]),
    expirationDate: parseDate(row[4]),
    status: row[5],
    value: parseValue(row[6]),
    type: row[7],
  }
})

const startServer = async () => {
  const server = fastify()
    .register(fastifyCors, { origin: '*' })
    .get('/contracts', (request, reply) => {
      const { count, page }: GetContractsParamsT = z
        .object({
          count: z.string().transform(count => parseInt(count)),
          page: z.string().transform(page => parseInt(page)),
        })
        .parse({
          count: 10,
          page: 1,
          ...(request.query || {}),
        })

      const total = dataObject.length
      const offset = page - 1
      const returnInfo = { count, page, total }

      if (count < total) {
        if (count * offset + count > total)
          reply.send({
            data: dataObject.slice(count * offset, total),
            ...returnInfo,
          })
        else
          reply.send({
            data: dataObject.slice(count * offset, count * offset + count),
            ...returnInfo,
          })
      } else reply.send({ data: dataObject, ...returnInfo })
    })

  await server.listen({
    port: 4000,
    host: '0.0.0.0',
  })

  console.log('Server ready to receive request')
}

startServer()
