import React from 'react';
import './../../css/style.css';

function Note(props) {
    const { data } = props;
    return (
        <>
            <span className="SDicon">SD</span>
            <span>{data.name ? data.name : 'name'}</span>
        </>
    );
}
export default Note;
