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
    @observable 
    index = 0;


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
    handleConfirm() {
        let data={
            name:'',
            type:'',
            shift:'',
            starttime:'',
            endtime:''
        };
        for(let i in data){
            data[i]=this.formvalue[i];
        }
        this.localStorageValue.push(data);
        reactLocalStorage.setObject('FormValue', this.localStorageValue);
        this.index++;
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