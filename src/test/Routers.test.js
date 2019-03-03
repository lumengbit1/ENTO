import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter,Route  } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Root from './../router/Routers';
import RootStore from '../stores/RootStore';
import Enzyme, { configure, mount } from 'enzyme';
import {Provider } from 'mobx-react';

import Home from './../components/Home';

Enzyme.configure({ adapter: new Adapter() });
const rootStore = new RootStore();

describe('Route Test', () => {
    it('Route Test', () => {
        const component = renderer
        .create(
            <Provider  rootStore={rootStore}>
              <MemoryRouter>
                  <Root />
              </MemoryRouter>
            </Provider>
        )
        .toJSON();
        
  
      expect(component).toMatchSnapshot();
    });
  });
