import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../../css/style.css';


@inject('rootStore')
@observer
class Critical extends Component  {
  render() {
    return (
        <div className='criticalnotice'>
            <p>{`1 CRITICAL ALERT`}</p>
        </div>
    )
  }
}
export default Critical;