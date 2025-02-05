import { fastifyCors } from '@fastify/cors'
import { parse } from 'csv-parse/sync'
import { fastify } from 'fastify'
import { readFileSync } from 'node:fs'

const csv = readFileSync('server/data/contracts.csv')

const [_header, ...rows]: Array<string[]> = parse(csv.toString(), {
  delimiter: ';',
})

const dataObject = rows.map(row => ({
  identifier: row[0],
  contractName: row[1],
  client: row[2],
  startDate: row[3],
  expirationDate: row[4],
  status: row[5],
  contractValue: row[6],
  contractType: row[7],
}))

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
