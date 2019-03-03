import React from 'react';
import Enzyme,{ configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import {Provider} from 'mobx-react';
import Home from './../components/Home';
import sinon from 'sinon';


Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe("Render Test", function() {

    it('case: expect rendering correct',()=>{
      const wrapper = render(
        <Provider  rootStore={rootStore}>
          <Home />
        </Provider>
      )
      expect(wrapper).toMatchSnapshot();
    })

    it('case: expect rendering correct',()=>{
      const wrapper = mount(
        <Provider  rootStore={rootStore}>
          <Home />
        </Provider>
      )
      rootStore.formStore.formName('name');
      rootStore.formStore.handleConfirm();
      wrapper.update();
      expect(wrapper.find('ShirtNote').length).toBe(1);
    })
})
