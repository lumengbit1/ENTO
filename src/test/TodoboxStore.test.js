import React from 'react';
import Enzyme,{ configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoboxStore from './../stores/TodoboxStore';
import {Provider} from 'mobx-react';
import TodoBox from './../components/TodoBox';



Enzyme.configure({ adapter: new Adapter() });

describe("TodoList", function() {
  const todoboxStore = new TodoboxStore();
  it('button click test', function(){

    const wrapper = mount(
      <Provider  todoboxStore={todoboxStore}>
      <TodoBox />
    </Provider>
    )
    wrapper.find('input').simulate('click');
    // expect(todoboxStore.todos[0].title.text).toBe('text')
    expect(wrapper.find("li").at(0).text()).toBe("修改后的todo标题")
  })

  it('active test', function(){

    const wrapper = mount(
      <Provider  todoboxStore={todoboxStore}>
      <TodoBox />
    </Provider>
    )
    todoboxStore.changeTodoTitle({index:1,title:"test"});
    expect(wrapper.find("li").at(1).text()).toBe("test");
  })


})
