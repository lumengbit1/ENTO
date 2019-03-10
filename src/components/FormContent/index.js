import React from 'react';
import './../../css/style.css';
import Form from './Form';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

function FormContent({ rootStore }) {
    const updateProperty = e => {
        rootStore.formStore.updateProperty(e.target.name, e.target.value);
    };
    const handleStartTimeChange = time => {
        rootStore.formStore.formStarttime(time);
    };
    const handleEndTimeChange = time => {
        rootStore.formStore.formEndtime(time);
    };
    const handleConfirm = () => {
        rootStore.formStore.handleConfirm();
    };
    const handleSubmit = () => {
        rootStore.formStore.handleSubmit();
    };

    return (
        <div className="form">
            <Form
                updateProperty={updateProperty}
                handleConfirm={handleConfirm}
                handleStartTimeChange={handleStartTimeChange}
                handleEndTimeChange={handleEndTimeChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}
export default inject('rootStore')(observer(FormContent));
