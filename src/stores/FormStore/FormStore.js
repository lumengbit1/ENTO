import { observable, action, configure } from 'mobx';
import { reactLocalStorage } from 'reactjs-localstorage';

configure({ enforceActions: 'always' });
class FormStore {
    @observable
    formvalue = {
        name: '',
        type: '',
        shift: '',
        starttime: '',
        endtime: '',
        critical: 0,
        low: 0
    };
    @observable
    localStorageValue = [];

    @action
    formName(name) {
        this.formvalue.name = name;
    }
    @action
    formShift(shift) {
        this.formvalue.shift = shift;
    }
    @action
    formType(type) {
        this.formvalue.type = type;
    }
    @action
    formStarttime(starttime) {
        this.formvalue.starttime = starttime;
    }
    @action
    formEndtime(endtime) {
        this.formvalue.endtime = endtime;
    }
    @action
    formCritical(num) {
        this.formvalue.critical = num;
    }
    @action
    formLow(num) {
        this.formvalue.low = num;
    }

    @action
    handleConfirm() {
        let data = {
            name: '',
            type: '',
            shift: '',
            starttime: '',
            endtime: '',
            critical: 0,
            low: 0
        };
        for (let key of Object.keys(data)) {
            data[key] = this.formvalue[key];
        }
        this.localStorageValue.push(data);
        reactLocalStorage.setObject('FormValue', this.localStorageValue);
    }
    @action
    handleSubmit() {
        // console.log(reactLocalStorage.getObject('FormValue'));
    }
}

export default FormStore;
