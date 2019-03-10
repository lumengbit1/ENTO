import React from 'react';
import TimePicker from 'react-time-picker';
import './../../css/style.css';

const Form = props => {
    const { updateProperty, handleConfirm, handleStartTimeChange, handleEndTimeChange, handleSubmit } = props;
    return (
        <>
            <form>
                <div className="block">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="name" onChange={updateProperty} />
                </div>
                <div className="block">
                    <label htmlFor="type">Type:</label>
                    <select name="type" className="type" onChange={updateProperty}>
                        <option selected style={{ display: 'none' }} />
                        <option value="Cleaner">Cleaner</option>
                    </select>
                </div>
                <div className="block">
                    <label htmlFor="shift">Shift/Note:</label>
                    <input type="radio" name="shift" className="shiftinput" value="Shift" onChange={updateProperty} />
                    Shift
                    <input type="radio" name="shift" value="Note" className="shiftinput" onChange={updateProperty} />
                    Note
                </div>
                <div className="block">
                    <label htmlFor="critical">CriticalAlert:</label>
                    <input type="number" name="critical" className="critical" onChange={updateProperty} min={0} />
                    <br />
                    <label htmlFor="low">LowAlert:</label>
                    <input type="number" name="low" className="low" onChange={updateProperty} min={0} />
                </div>
                <div className="block">
                    <label htmlFor="starttime">Start Time:</label>
                    <TimePicker
                        name="starttime"
                        className="starttime"
                        clockIcon={null}
                        disableClock={true}
                        onChange={handleStartTimeChange}
                    />
                    <br />
                    <label htmlFor="endtime">End Time:</label>
                    <TimePicker
                        name="endtime"
                        className="endtime"
                        clockIcon={null}
                        disableClock={true}
                        onChange={handleEndTimeChange}
                    />
                </div>

                <div className="block center">
                    <input type="button" value="confirm" className="confirm" onClick={handleConfirm} />
                    <input type="reset" className="reset" value="Reset" />
                </div>
            </form>
            <button className=" submit center" onClick={handleSubmit}>
                Submit
            </button>
        </>
    );
};
export default Form;
