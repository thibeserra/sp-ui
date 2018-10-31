import nock from 'nock'
import mock from './app-mock'
import { OK } from 'http-status';

exports.nockRequest = () => {
    return nock('http://www.mocky.io/v2')
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/5bd999282f00003e0006d202')
        .reply(OK, mock.nockRequest)
}