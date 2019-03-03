import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';


@inject('rootStore')
@observer
class Note extends Component  {
  render() {
    return (
      <div className='note'>
        {/* If Name input be filled, display name, otherwise display "name" as default */}
        <p>{this.props.data.name?this.props.data.name:'name'}</p>
      </div>
    )
  }
}
export default Note;