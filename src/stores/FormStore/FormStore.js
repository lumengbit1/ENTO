import {observable, action, configure, computed} from 'mobx';
import {reactLocalStorage} from 'reactjs-localstorage';

configure({ enforceActions: 'always' })
class FormStore {

    @observable 
    formvalue = {
        name:'',
        type:'',
        shift:'',
        starttime:'',
        endtime:''
    }
    @observable 
    localStorageValue = [];

    @action 
    handleConfirm() {
        this.localStorageValue.push(this.formvalue)
        reactLocalStorage.setObject('FormValue', this.localStorageValue);
    }
    @action 
    formName(name){
        this.formvalue.name=name;
    }
    @action 
    formShift(shift){
        this.formvalue.shift=shift;
    }
    @action 
    formType(type){
        this.formvalue.type=type;
    }
    @action 
    formStarttime(starttime){
        this.formvalue.starttime=starttime;
    }
    @action 
    formEndtime(endtime){
        this.formvalue.endtime=endtime;
    }
    @action 
    handleSubmit() {
      
        console.log(reactLocalStorage.getObject('FormValue'));
    }

    // @computed get unfinishedTodos  () {
    //   return  this.todos.filter((todo) => todo.done)
    // }
  }

export default FormStore;