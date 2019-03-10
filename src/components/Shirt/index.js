import React from 'react';
import './../../css/style.css';
import Critical from './Critical';
import classNames from 'classnames';

function Shirt(props) {
    const { data } = props;
    const critical = !(data.critical === 0 || data.critical === '0');
    const low = !(data.low === 0 || data.low === '0');
    const criticalClass = classNames({
        criticalnotice: critical && !low,
        lowtest: low && !critical
    });

    function statusChoose() {
        if (critical && !low) {
            return (
                <div className={criticalClass}>
                    <Critical critical={data.critical} />
                </div>
            );
        }
 else if (low && !critical) {
            return (
                <div className={criticalClass}>
                    <Critical critical={data.low} />
                </div>
            );
        }
 else if (critical && low) {
            return (
                <>
                    <div className="notice-half">
                        <span className="critical-color">
                            <Critical critical={data.critical} />
                        </span>
                        <span className="low-color">
                            <Critical critical={data.low} />
                        </span>
                    </div>
                </>
            );
        }
    }

    return (
        <>
            <div>
                <div id="time" className="shiftblock">
                    <p>{data.starttime}</p>
                    <p>-</p>
                    <p>{data.endtime}</p>
                </div>
                <div id="name" className="shiftblock">
                    <p>{data.name ? data.name : 'name'}</p>
                </div>
            </div>
            {statusChoose()}
        </>
    );
}
export default Shirt;
