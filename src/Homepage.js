import React, { Component } from 'react';
import background_ink from './background_ink.mp4';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: true
        }
    }
    DidMount() {
        // check for token (if page has loaded or not)
        // if the page has not loaded, set state animate to true
        if (window.sessionStorage.getItem("firstLoadDone") === null) {
            this.setState({
                animate: true
            });
            // set the token to be found the following times
            window.sessionStorage.setItem("firstLoadDone", 1);
        } else {
            this.setState({
                animate: false
            });
        }
    }
    render() {
        return (
            <div id="homepage">
                {/* background video */}
                <video id="bkgdVideo" autoPlay loop muted>
                    <source src={background_ink} type="video/mp4" />
                </video>
                <div id="navbar">
                    <h1 id="myName" className={this.state.animate ? "fade-in" : ""}>Zeth De Luna</h1>
                </div>
                <div id="myOpening" className={this.state.animate ? "slide-top": ""}>
                    <h2>Hi,<br/> my name is <span>Zeth</span>,<br/>an aspiring <span>web developer</span>.</h2>
                </div>
            </div>
        )
    }
}

export default Homepage