import {observable, action, configure, computed} from 'mobx';

configure({ enforceActions: 'always' })

class FormStore {
    @observable 
    formvalue = {
        
    }

    @action 
    handleSubmit(form) {
        console.log(form)
    }

    @computed get unfinishedTodos  () {
      return  this.todos.filter((todo) => todo.done)
    }
  }

  export default FormStore;