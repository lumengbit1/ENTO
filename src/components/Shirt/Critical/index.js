import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../../css/style.css';


@inject('rootStore')
@observer
class Critical extends Component  {
  render() {
    return (
        <div className='criticalnotice'>
            {/* Should get alert number from server */}
            <p>{`${this.props.critical} CRITICAL ALERT`}</p>
        </div>
    )
  }
}
export default Critical;