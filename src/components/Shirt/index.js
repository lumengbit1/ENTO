import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';
import Critical from './Critical';
import Low from './Low';


@inject('rootStore')
@observer
class Shirt extends Component  {
  render() {
    return (
      <div className='shift'>
        <div>
            <div className='shiftblock'>
                <p>{this.props.data.starttime}</p>
                <p>-</p>
                <p>{this.props.data.endtime}</p>
            </div>
            <div className='shiftblock'>
                <p>{this.props.data.name}</p>
            </div>
        </div>
        <Low/>
      </div>
    )
  }
}
export default Shirt;