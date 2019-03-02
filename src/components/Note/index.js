import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';


@inject('rootStore')
@observer
class Note extends Component  {
  render() {
    return (
      <div className='shiftnote'>
        Note
      </div>
    )
  }
}
export default Note;