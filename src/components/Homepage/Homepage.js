import React from 'react';
import './Homepage.scss';

function Homepage() {
    return (
        <div id="homepage">
            {/* header text */}
            <div id="myOpening" className="slide-top">
                <h2>
                    My name is <span>Zeth</span>,
                    <br/>
                    born and raised in <span>Los Angeles</span>.
                </h2>
            </div>
            <div id="homeDescription" className="slide-left">
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

export default Homepage