import {observable, action, configure} from 'mobx';
import {reactLocalStorage} from 'reactjs-localstorage';

configure({ enforceActions: 'always' });
class FormStore {
    /*Corresponding interface input elements  */
    @observable
    formvalue = {
        name: '',
        type: '',
        shift: '',
        starttime: '',
        endtime: '',
        critical: 0,
        low: 0
    }
    /* For save into localStorage and submit in bulk */
    @observable
    localStorageValue = [];

    /* For assigning params from page to mobx state params */
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

    /* Click Confirm button on the page to save params into localStorage and display in landing area */
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
        for (let i = 0; i < data.length; i++) {
            data[i] = this.formvalue[i];
        }
        this.localStorageValue.push(data);
        reactLocalStorage.setObject('FormValue', this.localStorageValue);
    }
    /* Should get params from localStorage and send to server */
    @action
    handleSubmit() {

        // console.log(reactLocalStorage.getObject('FormValue'));
    }



  }

export default FormStore;