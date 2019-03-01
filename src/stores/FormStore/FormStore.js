import {observable, action, configure, computed} from 'mobx';

configure({ enforceActions: 'always' })

class FormStore {
    @observable 
    todos = [{
      title: "todo标题",
      done: false,
    },{
      title: "已经完成 todo 的标题",
      done: true,
    }];

    @action 
    changeTodoTitle({index,title}){
      this.todos[index].title = title
    }

    @computed get unfinishedTodos  () {
      return  this.todos.filter((todo) => todo.done)
    }
  }

  export default FormStore;