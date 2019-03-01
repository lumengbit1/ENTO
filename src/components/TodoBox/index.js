import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {observer, inject} from 'mobx-react';


@inject('todoboxStore')
@observer
class TodoBox extends Component  {
  render() {
    // console.log('render');
    return (
      <div>
        <ul>
          {this.props.todoboxStore.todos.map(
            (todo,index) => <li key={index}>{todo.title}</li>
          )}
        </ul>
        <ul>
          {this.props.todoboxStore.unfinishedTodos.map(
            (todo,index) => <li key={index}>{todo.title}</li>
          )}
        </ul>

        <div>
          <input type="button" onClick={() => {
            this.props.todoboxStore.changeTodoTitle({index:0,title:"修改后的todo标题"});
          }} value="点我"/>
        </div>
      </div>
    )
  }
}
export default TodoBox;