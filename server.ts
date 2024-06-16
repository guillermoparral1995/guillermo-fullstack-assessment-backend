import app from './app'

const server = app({
    logger: true
  })

// Fly Proxy needs server to be exposed in 0.0.0.0:3000
const host = process.env.NODE_ENV === 'dev' ? '127.0.0.1' : '0.0.0.0'
  
server.listen({ port: 3000, host }, (err: Error) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})