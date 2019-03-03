import React from 'react';
import Enzyme,{ configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import {Provider} from 'mobx-react';
import FormContent from './../components/FormContent';
import sinon from 'sinon';


Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe("Render Test", function() {

    it('case: expect rendering correct',()=>{
      const wrapper = render(
        <Provider  rootStore={rootStore}>
          <FormContent />
        </Provider>
      )
      expect(wrapper).toMatchSnapshot();
    })
})

describe('Operation Test',()=>{
  const wrapper = mount(
    <Provider  rootStore={rootStore}>
      <FormContent />
    </Provider>
  )

  it('case: Input Change Test',()=>{
    const value = 'test';
    const time = '12:12'
    wrapper.find('.name').at(0).simulate('change', {target: {value}});
    wrapper.find('.type').at(0).simulate('change', {target: {value}});
    wrapper.find('.shift').at(0).simulate('change', {target: {value}});
      wrapper.find('.starttime').at(0).instance().props.onChange(time);
    wrapper.find('.endtime').at(0).instance().props.onChange(time);
    wrapper.find('.critical').at(0).simulate('change', {target: {value}});
    wrapper.find('.low').at(0).simulate('change', {target: {value}});
    expect(rootStore.formStore.formvalue.name).toBe(value);
    expect(rootStore.formStore.formvalue.type).toBe(value);
    expect(rootStore.formStore.formvalue.shift).toBe(value);
    expect(rootStore.formStore.formvalue.starttime).toBe(time);
    expect(rootStore.formStore.formvalue.endtime).toBe(time);
    expect(rootStore.formStore.formvalue.critical).toBe(value);
    expect(rootStore.formStore.formvalue.low).toBe(value);
  })

  it('case: Button Click Test',()=>{
    const comfirm = sinon.stub(rootStore.formStore,'handleConfirm');
    const submit = sinon.stub(rootStore.formStore,'handleSubmit');
    wrapper.find('.comfirm').at(0).simulate('click');
    wrapper.find('.submit').at(0).simulate('click');
    expect(comfirm.called).toEqual(true);
    expect(submit.called).toEqual(true);
  })
  

})
