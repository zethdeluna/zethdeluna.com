import React from 'react';
import './Navigation.scss';

function Navigation() {
    return (
        <div>
            {/* navigation */}
            <div id="navbar">
                <h1 id="myName"><a href="https://zethdeluna.com/">Zeth De Luna</a></h1>
                {/* <button id="myName">Zeth De Luna</button> */}
                <ul>
                    <li><a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer"><i class="fab fa-github-alt"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation