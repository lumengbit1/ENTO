import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './../../css/style.css';
import FormContent from './../FormContent';
import ShiftNote from './../ShiftNote';

@inject('rootStore')
@observer
class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="formcontent">
                    <FormContent />
                </div>
                <div className="landingarea">
                    {this.props.rootStore.formStore.localStorageValue.map(item => (
                        <ShiftNote data={item} />
                    ))}
                </div>
            </div>
        );
    }
}
export default Home;
