import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import AppStore from './store'

configure({ adapter: new Adapter() })

describe('Testa classe store do container', () => {
    it('@observables', () => {
        const store = AppStore

        expect(store.message).toEqual('hey')
    })
})