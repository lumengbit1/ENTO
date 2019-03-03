import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import TimePicker from 'react-time-picker';

import './../../css/style.css';


@inject('rootStore')
@observer
class FormContent extends Component  {
/* Responding to <input> onChange Events */
    handleNameChange = (e) => {
        this.props.rootStore.formStore.formName(e.target.value);
    }

    handleShiftChange = (e) => {
        this.props.rootStore.formStore.formShift(e.target.value);
    }

    handleTypeChange = (e) => {
        this.props.rootStore.formStore.formType(e.target.value);
    }
    handleStartTimeChange = (time) => {
        this.props.rootStore.formStore.formStarttime(time);
    }
    handleEndTimeChange = (time) => {
        this.props.rootStore.formStore.formEndtime(time);
    }
    handleCriticalChange = (e) => {
        this.props.rootStore.formStore.formCritical(e.target.value);
    }
    handleLowChange = (e) => {
        this.props.rootStore.formStore.formLow(e.target.value);
    }


  render() {
    return (
      <div className='form'>
        <form>
            <div className='block'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='name' onChange={this.handleNameChange} />
            </div>
            <div className='block'>
                <label htmlFor='type'>Type:</label>
                <select name='type' className='type' onChange={this.handleTypeChange}>
                    <option selected style={{'display': 'none'}}></option>
                    <option value='Cleaner'>Cleaner</option>
                </select>
            </div>
            <div className='block'>
                <label htmlFor='shift'>Shift/Note:</label>
                <input type="radio" name="shift" className='shiftinput' value="Shift" onChange={this.handleShiftChange} />Shift
                <input type="radio" name="shift" value="Note" className='shiftinput' onChange={this.handleShiftChange} />Note
            </div>
            <div className='block'>
                <label htmlFor='critical'>CriticalAlert:</label>
                <input type='number' name='critical' className='critical' onChange={this.handleCriticalChange} min={0}/>
                <br></br>
                <label htmlFor='low'>LowAlert:</label>
                <input type='number' name='low' className='low' onChange={this.handleLowChange} min={0}/>
            </div>
            <div className='block'>
                <label htmlFor='starttime'>Start Time:</label>
                <TimePicker name='starttime' className='starttime' clockIcon={null} disableClock={true} onChange={this.handleStartTimeChange}/>
                <br/>
                <label htmlFor='endtime'>End Time:</label>
                <TimePicker name='endtime' className='endtime' clockIcon={null} disableClock={true} onChange={this.handleEndTimeChange}/>
            </div>
            <div className='block center'>
                <input type='button' value='Comfirm' className='comfirm' onClick={()=>this.props.rootStore.formStore.handleConfirm()}/>
                <input type='reset' value='Reset'/>
            </div>

        </form>
        <button className=' submit center' onClick={()=>this.props.rootStore.formStore.handleSubmit()}>Submit</button>
      </div>
    )
  }
}
export default FormContent;