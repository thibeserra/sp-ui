import { action, observable } from 'mobx';
import { OK } from 'http-status';
import * as service from './services'
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
        let result = {}
        try {
            result = await service.request()
        } catch(e) {
            console.log(e)
        }
        return result
    }
}

export default new AppStore();