import dataJson from './data.json'
import fastify, { FastifyInstance, FastifyReply } from 'fastify'

interface BuildOpts {
  logger: boolean
}

const build = (opts?: BuildOpts) => {
  const app: FastifyInstance = fastify(opts)

  app.get('/', async (_request, reply: FastifyReply) => {
    reply.send(dataJson)
  })

  return app
}

export default build