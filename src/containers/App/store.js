import { action, observable } from 'mobx';
import { OK } from 'http-status';
import axios from 'axios';
const Mobx = require('mobx');

class AppStore {

    @observable message = 'hey';

    @observable status = OK;

    @observable getList = {};

    @action showMessage() {
        return this.message;
    };

    @action 
    async getAxios() {
        console.log('chamando getAxios..')
        let result = {}
        try {
            result = await axios.get('http://www.mocky.io/v2/5bd999282f00003e0006d202')
            console.log(Mobx.toJS(result.data))
        } catch(e) {
            console.log('erro no getAxios..')
            console.log(e)
        }
        return result
    }
}

export default new AppStore();