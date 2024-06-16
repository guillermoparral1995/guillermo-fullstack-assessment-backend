import dataJson from './data.json'
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

interface BuildOpts {
  logger: boolean
}

const build = (opts?: BuildOpts) => {
  const app: FastifyInstance = fastify(opts)

  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    request.log.info('Inbound request')
    reply.send(dataJson)
  })

  return app
}

export default build