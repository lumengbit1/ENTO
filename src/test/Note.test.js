import React from 'react';
import Enzyme,{ configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import {Provider} from 'mobx-react';
import Note from './../components/Note';
import sinon from 'sinon';


Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe("Render Test", function() {

    it('case: expect rendering correct',()=>{
        const props = {
            data: {
                name:'name'
            }

        };
        const wrapper = render(
            <Provider  rootStore={rootStore}>
            <Note {...props}/>
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
        })
})

