import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';


@inject('rootStore')
@observer
class Note extends Component  {
  render() {
    return (
      <div className='note'>
        <p>{this.props.data.name?this.props.data.name:'name'}</p>
      </div>
    )
  }
}
export default Note;