import React from 'react';
import './NavigationMobile.scss';

function NavigationMobile() {
    return (
        <div id="navbarMobile" className="slide-top">
            <h1 id="myName"><a href="https://zethdeluna.com/">Zeth De Luna</a></h1>
            <ul>
                <li><a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer"><i class="fab fa-github-alt"></i></a></li>
                <li><a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
        </div>
    )
}

export default NavigationMobile