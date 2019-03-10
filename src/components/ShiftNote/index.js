import React from 'react';
import './../../css/style.css';
import Shift from './../Shirt';
import Note from './../Note';

function ShiftNote(props) {
    const { data } = props;
    const shiftNote = data.shift === 'Shift';
    return (
        <>
            {shiftNote ? (
                <div className="shift">
                    <Shift data={data} />
                </div>
            ) : (
                <div className="note">
                    <Note data={data} />
                </div>
            )}
        </>
    );
}
export default ShiftNote;
