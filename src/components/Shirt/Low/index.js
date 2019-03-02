import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../../css/style.css';


@inject('rootStore')
@observer
class Low extends Component  {
  render() {
    return (
        <div className='lownotice'>
            <div>
                {`${this.props.critical} CRITICAL ALERT`}
            </div>
            <div>
                {`${this.props.low} LOW ALERT`}
            </div>
        </div>
    )
  }
}
export default Low;