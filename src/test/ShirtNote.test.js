import React from 'react';
import Enzyme,{ configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import {Provider} from 'mobx-react';
import ShiftNote from './../components/ShirtNote';
import sinon from 'sinon';


Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe("Render Test", function() {

    it('case: expect rendering correct',()=>{

        const props = {
            data: {
                shift:'Shift'
            }

        };
        const wrapper = render(
            <Provider  rootStore={rootStore}>
            <ShiftNote {...props}/>
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    })

    it('case: expect <Note> beCalled',()=>{

        const props = {
            data: {
                shift:'Note'
            }

        };
        const wrapper = mount(
            <Provider  rootStore={rootStore}>
                <ShiftNote {...props}/>
            </Provider>
        )
        wrapper.setProps(props);
        expect(wrapper.find('Note').length).toBe(1);
    })
})

