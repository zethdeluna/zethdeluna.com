import React, { Component } from 'react';
import background_ink from './images/background_ink.mp4';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // animate property for deciding how tot animate an element
            animate: true,
            clickActive: false
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
                <video id="bkgdVideo" autoPlay playsInline loop muted>
                    <source src={background_ink} type="video/mp4" />
                </video>
                {/* header text */}
                <div id="myOpening" className={this.state.animate ? "slide-top": ""}>
                    <h2>
                        Hi,
                        <br/>
                        my name is <span>Zeth</span>,
                        <br/>
                        born and raised in <span>Los Angeles</span>.
                    </h2>
                </div>
                <div id="homeDescription" className={this.state.animate ? "slide-left" : ""}>
                    <h2>
                        I am a <span>creative</span>
                        <br/>
                        aspiring <span>front-end developer</span>
                        <br/>
                        and <span>designer</span>.
                    </h2>
                </div>
                {/* <div id="skills" className={this.state.animate ? "slide-left": ""}>
                    <h3>
                        &#60;div&#62;<br/>
                        &#160;&#160; html <br/>
                        &#160;&#160; css <br/> 
                        &#160;&#160; javascript <br/>
                        &#160;&#160; react <br/>
                        &#60;/div&#62;
                    </h3>
                </div> */}
            </div>
        )
    }
}

export default Homepage