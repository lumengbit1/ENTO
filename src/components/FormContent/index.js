import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import './../../css/style.css';


@inject('rootStore')
@observer
class FormContent extends Component  {
  render() {
    return (
      <div className='form'>
        <form>
            <div className='block'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' vlaue='Name'/>
            </div>
            <div className='block'>
                <label htmlFor='type'>Type:</label>
                <select name='type'>
                    <option value='Cleaner'>Cleaner</option>
                </select>
            </div>
            <div className='block'>
                <label htmlFor='shift'>Shift/Note:</label>
                <input type="radio" name="shift" value="Shift"/>Shift
                <input type="radio" name="shift" value="Note"/>Note
            </div>
            <div className='block'>
                <label htmlFor='starttime'>Start Time:</label>
                <input type="time" name="starttime" value="Start Time"/>
                <br/>
                <label htmlFor='endtime'>End Time:</label>
                <input type="time" name="endtime" value="End Time"/>
            </div>
            <div className='block center'>
                <input type='button' value='Comfirm'/>
                <input type='reset' value='Reset'/>
            </div>

        </form>
        <button className=' submit center'>Submit</button>
      </div>
    )
  }
}
export default FormContent;