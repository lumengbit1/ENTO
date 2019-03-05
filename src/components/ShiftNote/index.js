import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';
import Shift from './../Shirt';
import Note from './../Note';


@inject('rootStore')
@observer
class ShiftNote extends Component  {
  render() {
    const shiftnote= this.props.data.shift==='Shift';
    return (
      <div>
        {/* If Shift radio be selected, render <Shift> component, otherwise <Note>  */}
        {shiftnote? <Shift data={this.props.data}/> : <Note data={this.props.data}/>}
      </div>
    )
  }
}
export default ShiftNote;