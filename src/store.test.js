import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import AppStore from './store'
import request from './request'

configure({ adapter: new Adapter() })

describe('Testa classe store do container', () => {
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
            const result = await request('http://www.mocky.io/v2/5bd999282f00003e0006d202')

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'Hello world..')

            done();
        })

        it('return 200 HTTP status code 2', async (done) => {
            const store = AppStore
            const result = await store.getAxios()

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result).toHaveProperty('statusText', 'OK')
            expect(result.data).toHaveProperty('message', 'Hello world..')

            done();
        })
    })
})

