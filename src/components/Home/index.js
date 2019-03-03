import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';
import FormContent from './../FormContent';
import ShiftNote from './../ShiftNote';


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
          {/* According to localStorageValue which will be store into localstore to rende Shift or Note in landing area*/}
          {this.props.rootStore.formStore.localStorageValue.map(item=>
          <ShiftNote data={item}/>
          )}
        </div>
      </div>
    )
  }
}
export default Home;