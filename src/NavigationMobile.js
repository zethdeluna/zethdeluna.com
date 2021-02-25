import React, { Component } from 'react';

class NavigationMobile extends Component {
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
            <div id="navbarMobile" className={this.state.animate ? "slide-top" : ""}>
                <h1 id="myName"><a href="https://zethdeluna.com/">Zeth De Luna</a></h1>
                <ul>
                    <li><a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer"><i class="fab fa-github-alt"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        )
    }
}

export default NavigationMobile