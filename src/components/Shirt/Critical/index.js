import React from 'react';
import './../../../css/style.css';

function Critical(props) {
    const { critical } = props;
    return (
        <>
            <p>{`${critical} CRITICAL ALERT`}</p>
        </>
    );
}
export default Critical;
