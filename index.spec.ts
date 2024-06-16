import fastify from 'fastify'
import app from './app'
import dataJson from './data.json'

const mockErrorApp = fastify().get('/', async (_request, reply) => {
    throw new Error('test error')
})

describe('GET /', () => {
    it('should return 200 OK with JSON data', async () => {
        const testApp = app()
        const response = await testApp.inject({
            method: 'GET',
            url: '/'
        })

        expect(response.statusCode).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
        expect(response.json()).toEqual(dataJson)
    })

    it('should log error if request throws', async () => {
        const response = await mockErrorApp.inject({
            method: 'GET',
            url: '/'
        })

        // default Fastify uncaught error handling
        expect(response.json()).toEqual({
            statusCode: 500,
            error: 'Internal Server Error',
            message: 'test error'
        })
    })
})