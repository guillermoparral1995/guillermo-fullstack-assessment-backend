import dataJson from './data.json'
import fastify from 'fastify'

interface BuildOpts {
  logger: boolean
}

function build(opts?: BuildOpts) {
  const app = fastify(opts)

  app.get('/', async function (_request, reply) {
    reply.send(dataJson)
  })

  return app
}

export default build