import nock from 'nock'
import mock from './app-mock'
import { OK } from 'http-status';

exports.getMessage = () => {
    return nock('http://www.mocky.io/v2')
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/5bd999282f00003e0006d202')
        .reply(OK, mock.getMessage)
}

exports.getAnotherMessage = () => {
    return nock(' http://www.mocky.io/v2')
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/5bdaf0c33200008a163ad3f6')
        .reply(OK, mock.getAnotherMessage)
}

exports.getBranchesPCP = () => {
    return nock('http://localhost:9001/v1/pcp/bf')
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/branches')
        .reply(OK, mock.getBranchesPCP)
}