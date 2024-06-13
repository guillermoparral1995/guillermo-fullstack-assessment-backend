import app from './app'
import dataJson from './data.json'

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
})