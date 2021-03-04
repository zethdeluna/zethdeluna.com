import React from 'react';
import './HomepageMobile.scss';

function HomepageMobile() {
    return (
        <div id="homepage-mobile">
            <div id="mobileOpening" className="slide-top">
                <h2>
                    My name is <span>Zeth</span>,
                    <br/>
                    born and raised
                    <br/>
                    in <span>Los Angeles</span>.
                </h2>
            </div>
            <div id="mobileHomeDescription" className="slide-top">
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

export default HomepageMobile