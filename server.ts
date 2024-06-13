import app from './app'

const server = app({
    logger: true
  })
  
  server.listen({ port: 3000 }, (err: Error) => {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
  })