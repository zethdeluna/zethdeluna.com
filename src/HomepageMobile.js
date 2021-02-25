import React, { Component } from 'react';
import background_ink_LOW from './images/background_ink_LOW.mp4';

class HomepageMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: true, // used so that homepage fades in only on load
        };
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
            <div id="homepage-mobile">
                <video id="bkgd-mobile" autoPlay playsInline loop muted>
                    <source src={background_ink_LOW} type="video/mp4" />
                </video>
                <div id="mobileOpening" 
                className={this.state.animate ? "slide-top" : ""}>
                    <h2>
                        Hi,
                        <br/>
                        my name is <span>Zeth</span>,
                        <br/>
                        born and raised
                        <br/>
                        in <span>Los Angeles</span>.
                    </h2>
                </div>
                <div id="mobileHomeDescription"
                className={this.state.animate ? "slide-top" : ""}>
                    <h2>
                        I am a <span>creative</span>
                        <br/>
                        aspiring <span>front-end developer</span>
                        <br/>
                        and <span>designer</span>.
                    </h2>
                </div>
            </div>
        )
    }
}

export default HomepageMobile