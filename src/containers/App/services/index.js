import axios from 'axios';

export async function getMessage() {
    let result = {};
    try {
        result = await axios.get('http://www.mocky.io/v2/5bd999282f00003e0006d202')
    } catch (e) {
        console.log(e)
    }
    return result;
}

export async function getAnotherMessage() {
    let result = {};
    try {
        result = await axios.get('http://www.mocky.io/v2/5bdaf0c33200008a163ad3f6')
    } catch (e) {
        console.log(e)
    }
    return result;
}

export async function getBranchesPCP() {
    let result = {};
    try {
        const header = {
            headers: {
                'Content-Type': 'application/json',
                authorization: 'token'
            }
        }
        result = await axios.get('http://localhost:9001/v1/pcp/bf/branches', header)
    } catch (e) {
        console.log(e)
    }
    return result;
}