import React from 'react';
import './NavigationMobile.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function NavigationMobile() {
    return (
        <div id="navbarMobile">
            <h1 id="myName"><AnchorLink className="anchorMobile" href="#helloMobileContainer">Zeth De Luna</AnchorLink></h1>
            <ul>
                <li>
                    <AnchorLink className="anchorMobile projects" href="#projectsMobileContainer">projects</AnchorLink>
                </li>
                <li><a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer"><i className="fab fa-github-alt"></i></a></li>
                <li><a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
        </div>
    )
}

export default NavigationMobile