import React, { Component } from 'react';
import background_ink from './background_ink.mp4';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // animate property for deciding how tot animate an element
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
                {/* navigation */}
                <div id="navbar" className={this.state.animate ? "fade-in" : ""}>
                    <h1 id="myName"><a href="#homepage">Zeth De Luna</a></h1>
                    <ul>
                        <li><a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer"><i class="fab fa-github-alt"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                {/* header text */}
                <div id="myOpening" className={this.state.animate ? "slide-top": ""}>
                    <h2>Hi,<br/> my name is <span>Zeth</span>,<br/>an aspiring <span>web developer</span>.</h2>
                </div>
                <div id="skills" className={this.state.animate ? "slide-left": ""}>
                    <h3>
                        &#60;div&#62;<br/>
                        &#160;&#160; html <br/>
                        &#160;&#160; css <br/> 
                        &#160;&#160; javascript <br/>
                        &#160;&#160; react <br/>
                        &#60;/div&#62;
                    </h3>
                </div>
            </div>
        )
    }
}

export default Homepage