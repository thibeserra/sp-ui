import {action, observable} from 'mobx';

class AppStore {

    @observable message = 'hey';

    @action showMessage() {
        return this.message;
    };
}

export default new AppStore();