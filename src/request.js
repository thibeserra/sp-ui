import axios from 'axios';

export default async function request(url) {
        let result = {};
        try {
            console.log('call request http..')
            result = await axios.get('http://www.mocky.io/v2/5bd999282f00003e0006d202')
           
            console.log(result.data)
        } catch(e) {
            console.log('erro no getAxios..')
            console.log(e)
        }

        return result;
}

