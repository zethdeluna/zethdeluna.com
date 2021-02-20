import React, { Component } from 'react';
import background_ink from './background_ink.mp4';

class Homepage extends Component {
    render() {
        return (
            <div id="homepage">
                {/* background video */}
                <video id="bkgdVideo" autoPlay loop muted>
                    <source src={background_ink} type="video/mp4" />
                </video>
                <div id="navbar">
                    <h1 id="myName">Zeth De Luna</h1>
                </div>
            </div>
        )
    }
}

export default Homepage