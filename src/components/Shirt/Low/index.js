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
                {`1 CRITICAL ALERT`}
            </div>
            <div>
                {`1 LOW ALERT`}
            </div>
        </div>
    )
  }
}
export default Low;