import React from 'react';
import Enzyme,{ configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import {Provider} from 'mobx-react';
import FormContent from './../components/FormContent';
import {reactLocalStorage} from 'reactjs-localstorage';



Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe("Render Test", function() {
    const wrapper = mount(
        <Provider  rootStore={rootStore}>
          <FormContent />
        </Provider>
      )
    it('case: handleConfirm action test',()=>{
      rootStore.formStore.formName('name');
      rootStore.formStore.handleConfirm();
      expect(rootStore.formStore.localStorageValue[0].name).toEqual('name');
    })

})

