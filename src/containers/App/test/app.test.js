import nock from 'nock'
import * as mockRequest from './app-nock'

beforeEach(() => {
    nock.disableNetConnect()
})

afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
})

const container = 'apps'

describe(`Routes / ${container}`, () => {
    const methods = ['get']
    methods.forEach(method => {
        require(`./methods/app-${method}`)(mockRequest, container)
    })
})