import React, { Component } from 'react';
import './App.css';
import TodoBox from './components/TodoBox';
import TodoboxStore from './stores/TodoboxStore';
import {Provider } from 'mobx-react';

const todoboxStore = new TodoboxStore();

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider  todoboxStore={todoboxStore}>
        <TodoBox />
      </Provider>

      </div>
    );
  }
}

export default App;
