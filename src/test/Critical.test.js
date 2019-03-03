import React from 'react';
import Enzyme,{ configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import {Provider} from 'mobx-react';
import Critical from './../components/Shirt/Critical';
import sinon from 'sinon';


Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe("Render Test", function() {

    it('case: expect rendering correct',()=>{
      const wrapper = render(
        <Provider  rootStore={rootStore}>
          <Critical />
        </Provider>
      )
      expect(wrapper).toMatchSnapshot();
    })
})

