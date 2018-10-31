import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import AppStore from '../store'
import request from '../../../request'
import nock from 'nock'
import { OK } from 'http-status'

configure({ adapter: new Adapter() })

describe('Testa classe store do container', () => {

    beforeEach(() => {
        nock.disableNetConnect()
    })

    afterEach(() => {
        nock.cleanAll()
        nock.enableNetConnect()
    })

    describe('observables', () => {
        it('message', () => {
            const store = AppStore
            expect(store.message).toEqual('hey')
        })
    })

    describe('actions', () => {
        it('showMessage()', () => {
            const store = AppStore
            const response = store.showMessage()

            expect(response).not.toBeNull()
            expect(response).toEqual('hey')
        })
    })

    describe('GET with promises', () => {
        it('return 200 HTTP status code', async (done) => {

            let mockRequest = nock('http://www.mocky.io/v2')
                .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
                .get('/5bd999282f00003e0006d202')
                .reply(OK, { message: 'deu certo hein..' })

            const result = await request('http://www.mocky.io/v2/5bd999282f00003e0006d202')

            expect(mockRequest.isDone()).toEqual(true)

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'deu certo hein..')

            done();
        })

        it('return 200 HTTP status code with action Mobx', async (done) => {

            let mockRequest = nock('http://www.mocky.io/v2')
                .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
                .get('/5bd999282f00003e0006d202')
                .reply(OK, { message: 'deu certo hein..' })

            const store = AppStore
            const result = await store.getAxios()

            expect(mockRequest.isDone()).toEqual(true)

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'deu certo hein..')

            done();
        })
    })
})

