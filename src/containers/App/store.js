import { action, observable } from 'mobx';
import { OK } from 'http-status';
import * as service from './services'
const Mobx = require('mobx');

class AppStore {

    @observable message = 'hey';

    @observable status = OK;

    @action showMessage() {
        return this.message;
    };

    @action
    async getMessage() {
        let result = {}
        try {
            result = await service.getMessage()
        } catch (e) {
            console.log(e)
        }
        return result
    }

    @action
    async getAnotherMessage() {
        let result = {}
        try {
            result = await service.getAnotherMessage()
        } catch (e) {
            console.log(e)
        }
        return result
    }
}

export default new AppStore();