import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './../../css/style.css';
import Critical from './Critical';
import Low from './Low';

@inject('rootStore')
@observer
class Shirt extends Component {
    render() {
        const critical = !(this.props.data.critical === 0 || this.props.data.critical === '0');
        const low = !(this.props.data.low === 0 || this.props.data.low === '0');
        const display = critical || low;
        return (
            <div className="shift">
                <div>
                    <div id="time" className="shiftblock">
                        <p>{this.props.data.starttime}</p>
                        <p>-</p>
                        <p>{this.props.data.endtime}</p>
                    </div>
                    <div id="name" className="shiftblock">
                        <p>{this.props.data.name ? this.props.data.name : 'name'}</p>
                    </div>
                </div>
                {display ? (
                    low ? (
                        <Low low={this.props.data.low} critical={this.props.data.critical} />
                    ) : (
                        <Critical critical={this.props.data.critical} />
                    )
                ) : (
                    ''
                )}
            </div>
        );
    }
}
export default Shirt;
