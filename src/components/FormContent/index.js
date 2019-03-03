import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import TimePicker from 'react-time-picker';

import './../../css/style.css';


@inject('rootStore')
@observer
class FormContent extends Component  {

    handleNameChangle = (e) => {
        this.props.rootStore.formStore.formName(e.target.value);
    }

    handleShiftChangle = (e) => {
        this.props.rootStore.formStore.formShift(e.target.value);
    }

    handleTypeChangle = (e) => {
        this.props.rootStore.formStore.formType(e.target.value);
    }
    handleStartTimeChangle = (time) => {
        this.props.rootStore.formStore.formStarttime(time);
    }
    handleEndTimeChangle = (time) => {
        this.props.rootStore.formStore.formEndtime(time);
    }
    handleCriticalChangle = (e) => {
        this.props.rootStore.formStore.formCritical(e.target.value);
    }
    handleLowChangle = (e) => {
        this.props.rootStore.formStore.formLow(e.target.value);
    }


  render() {
    return (
      <div className='form'>
        <form>
            <div className='block'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='name' onChange={this.handleNameChangle} />
            </div>
            <div className='block'>
                <label htmlFor='type'>Type:</label>
                <select name='type' className='type' onChange={this.handleTypeChangle}>
                    <option selected style={{'display': 'none'}}></option>
                    <option value='Cleaner'>Cleaner</option>
                </select>
            </div>
            <div className='block'>
                <label htmlFor='shift'>Shift/Note:</label>
                <input type="radio" name="shift" className='shift' value="Shift" onChange={this.handleShiftChangle} />Shift
                <input type="radio" name="shift" value="Note" className='shift' onChange={this.handleShiftChangle} />Note
            </div>
            <div className='block'>
                <label htmlFor='critical'>CriticalAlert:</label>
                <input type='number' name='critical' className='critical' onChange={this.handleCriticalChangle} min={0}/>
                <br></br>
                <label htmlFor='low'>LowAlert:</label>
                <input type='number' name='low' className='low' onChange={this.handleLowChangle} min={0}/>
            </div>
            <div className='block'>
                <label htmlFor='starttime'>Start Time:</label>
                <TimePicker name='starttime' className='starttime' clockIcon={null} disableClock={true} onChange={this.handleStartTimeChangle}/>
                <br/>
                <label htmlFor='endtime'>End Time:</label>
                <TimePicker name='endtime' className='endtime' clockIcon={null} disableClock={true} onChange={this.handleEndTimeChangle}/>
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