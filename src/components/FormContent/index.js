import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

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
    handleStartTimeChangle = (e) => {
        this.props.rootStore.formStore.formStarttime(e.target.value);
    }
    handleEndTimeChangle = (e) => {
        this.props.rootStore.formStore.formEndtime(e.target.value);
    }

  render() {
    return (
      <div className='form'>
        <form>
            <div className='block'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={this.handleNameChangle} />
            </div>
            <div className='block'>
                <label htmlFor='type'>Type:</label>
                <select name='type' onChange={this.handleTypeChangle}>
                    <option selected style={{'display': 'none'}}></option>
                    <option value='Cleaner'>Cleaner</option>
                </select>
            </div>
            <div className='block'>
                <label htmlFor='shift'>Shift/Note:</label>
                <input type="radio" name="shift" value="Shift" onChange={this.handleShiftChangle} />Shift
                <input type="radio" name="shift" value="Note" onChange={this.handleShiftChangle} />Note
            </div>
            <div className='block'>
                <label htmlFor='starttime'>Start Time:</label>
                <input type="time" name="starttime" value="Start Time" onChange={this.handleStartTimeChangle}/>
                <br/>
                <label htmlFor='endtime'>End Time:</label>
                <input type="time" name="endtime" value="End Time" onChange={this.handleEndTimeChangle}/>
            </div>
            <div className='block center'>
                <input type='button' value='Comfirm' onClick={()=>this.props.rootStore.formStore.handleConfirm()}/>
                <input type='reset' value='Reset'/>
            </div>

        </form>
        <button className=' submit center' onClick={()=>this.props.rootStore.formStore.handleSubmit()}>Submit</button>
      </div>
    )
  }
}
export default FormContent;