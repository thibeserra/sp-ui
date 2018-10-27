import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import AppStore from './store'

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
})

