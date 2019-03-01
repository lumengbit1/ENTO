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
                <select name='shift'>
                    <option value='Cleaner'>Cleaner</option>
                </select>
            </div>
            <div className='block center'>
                <input type='submit' value='Submit'/>
                <input type='reset' value='Reset'/>
            </div>
        </form>
      </div>
    )
  }
}
export default FormContent;