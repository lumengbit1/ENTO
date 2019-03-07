import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootStore from '../stores/RootStore';
import { Provider } from 'mobx-react';
import Shirt from './../components/Shirt';

Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();
describe('Render Test', function () {
    it('case: expect rendering correct', () => {
        const props = {
            data: {
                critical: 0
            }
        };
        const wrapper = render(
            <Provider rootStore={rootStore}>
                <Shirt {...props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('case: expect <Low> be rendered', () => {
        const props = {
            data: {
                low: 1
            }
        };
        const wrapper = mount(
            <Provider rootStore={rootStore}>
                <Shirt {...props} />
            </Provider>
        );
        wrapper.setProps(props);
        expect(wrapper.find('Low').length).toBe(1);
    });

    it('case: expect <Critical> be rendered', () => {
        const props = {
            data: {
                low: 0
            }
        };
        const wrapper = mount(
            <Provider rootStore={rootStore}>
                <Shirt {...props} />
            </Provider>
        );
        wrapper.setProps(props);
        expect(wrapper.find('Critical').length).toBe(1);
    });

    it('case: expect <Critical> be rendered', () => {
        const props = {
            data: {
                name: 'test'
            }
        };
        const wrapper = mount(
            <Provider rootStore={rootStore}>
                <Shirt {...props} />
            </Provider>
        );
        wrapper.setProps(props);
        expect(wrapper.find('#name p').text()).toBe('test');
    });

    it('case: expect neither <Critical> nor <Low> be rendered', () => {
        const props = {
            data: {
                low: 0,
                critical: 0
            }
        };
        const wrapper = mount(
            <Provider rootStore={rootStore}>
                <Shirt {...props} />
            </Provider>
        );
        wrapper.setProps(props);
        expect(wrapper.find('Critical').length).toBe(0);
        expect(wrapper.find('Low').length).toBe(0);
    });
});
