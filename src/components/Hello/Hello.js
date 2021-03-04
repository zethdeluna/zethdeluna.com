import React from 'react';
import './Hello.scss'

function Hello() {
    return (
        <div id="hello">
            <div id="helloWord" className="slide-top">
                <h2>Hello!</h2>
            </div>
            <div id="helloScroll" className="slide-top">
                <span/>
            </div>
        </div>
    )
}

export default Hello