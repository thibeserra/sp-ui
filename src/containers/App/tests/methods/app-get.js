import request from '../../../../request'
import AppStore from '../../store'

module.exports = (nock, container) => {
    describe(`GET / ${container}`, () => {
        it('return 200 HTTP status code', async (done) => {

            let mockRequest = nock.getMessage()

            const result = await request('http://www.mocky.io/v2/5bd999282f00003e0006d202')

            expect(mockRequest.isDone()).toEqual(true)
            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'deu certo hein..')

            done()
        })

        it('return 200 HTTP status code with action Mobx getMessage', async (done) => {

            let mockRequest = nock.getMessage()

            const store = AppStore
            const result = await store.getMessage()

            expect(mockRequest.isDone()).toEqual(true)

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'deu certo hein..')

            done()
        })

        it('return 200 HTTP status code with action Mobx getAnotherMessage', async (done) => {

            let mockRequest = nock.getAnotherMessage()

            const store = AppStore
            const result = await store.getAnotherMessage()

            expect(mockRequest.isDone()).toEqual(true)

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'get the request 2 http request')

            done()
        })
    })
}