import { parseDate, parseValue } from '@/server/utils/parse'
import { ContractT } from '@/types/contract'
import { fastifyCors } from '@fastify/cors'
import { parse } from 'csv-parse/sync'
import { fastify } from 'fastify'
import { readFileSync } from 'node:fs'

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
    .get('/contracts', (_request, reply) => reply.send(dataObject))

  const address = await server.listen({
    port: 4000,
    host: '0.0.0.0',
  })

  console.log(`\nServer ready and running on ${address}`)
}

startServer()
