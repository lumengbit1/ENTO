import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';


@inject('rootStore')
@observer
class Shirt extends Component  {
  render() {
    return (
      <div className='shirt'>
        test
      </div>
    )
  }
}
export default Shirt;