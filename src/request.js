import axios from 'axios';

export default async function request(url) {
    let result = {};
    try {
        result = await axios.get('http://www.mocky.io/v2/5bd999282f00003e0006d202')
    } catch (e) {
        console.log(e)
    }

    return result;
}

