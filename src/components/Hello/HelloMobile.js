import React from 'react';
import './HelloMobile.scss';

function HelloMobile() {
    return (
        <div id="helloMobile">
            <div id="mobileWord" className="slide-top">
                <h2>Hello!</h2>
            </div>
            <div id="mobileScroll" className="slide-top">
                <span/>
            </div>
        </div>
    )
}

export default HelloMobile