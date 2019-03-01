import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';
import FormContent from './../FormContent'


@inject('rootStore')
@observer
class Home extends Component  {
  render() {
    return (
      <div className='homepage'>
        <div className='formcontent'>
        <FormContent  />
        </div>
        <div className='landingarea'>
        landingarea
        </div>
      </div>
    )
  }
}
export default Home;