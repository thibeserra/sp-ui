import request from '../../../commons/utils/requests'

export async function getMessage() {
    let result = {};
    try {
        result = await request.get('http://www.mocky.io/v2/5bd999282f00003e0006d202', '', { objName: 'listagem app', operation: 'listar ' + 'listagens app' })
    } catch (e) {
        console.log(e)
    }
    return result;
}

export async function getAnotherMessage() {
    let result = {};
    try {
        result = await request.get('http://www.mocky.io/v2/5bdaf0c33200008a163ad3f6', '', { objName: 'listagem app', operation: 'listar ' + 'listagens app' })
    } catch (e) {
        console.log(e)
    }
    return result;
}

export async function getBranchesPCP() {
    let result = {};
    try {
        result = await request.get('http://localhost:9001/v1/pcp/bf/branches', '', { objName: 'filial', operation: 'listar ' + 'filiais' })
    } catch (e) {
        console.log(e)
    }
    return result;
}