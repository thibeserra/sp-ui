import axios from 'axios';

export async function request() {
        console.log('servoce')
        let result = {};
        try {
            result = await axios.get('http://www.mocky.io/v2/5bd999282f00003e0006d202')
        } catch(e) {
            console.log(e)
        }

        return result;
}

export async function request2() {
    console.log('request2')
    let result = {};
    try {
        result = await axios.get('http://www.mocky.io/v2/5bdaf0c33200008a163ad3f6')
        console.log(result)
    } catch(e) {
        console.log(e)
    }

    return result;
}


