import React from 'react';
import './../../css/style.css';
import FormContent from './../FormContent';
import LandingContent from './../LangingContent';

function Home() {
    return (
        <div className="homepage">
            <div className="formcontent">
                <FormContent />
            </div>
            <div className="landingarea">
                <LandingContent />
            </div>
        </div>
    );
}
export default Home;
