import request from '../../../../request'
import AppStore from '../../store'

module.exports = (nock, container) => {
    describe(`GET / ${container}`, () => {
        it('return 200 HTTP status code', async (done) => {

            let mockRequest = nock.nockRequest()

            const result = await request('http://www.mocky.io/v2/5bd999282f00003e0006d202')

            expect(mockRequest.isDone()).toEqual(true)
            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'deu certo hein..')

            done()
        })
        
        it('return 200 HTTP status code with action Mobx', async (done) => {

            let mockRequest = nock.nockRequest()

            const store = AppStore
            const result = await store.getAxios()

            expect(mockRequest.isDone()).toEqual(true)

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'deu certo hein..')

            done()
        })
    })
}