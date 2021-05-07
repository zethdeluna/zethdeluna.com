import React, { useRef, useEffect } from 'react';
import './Foundation.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TheFoundation() {
    // scroll effects
    // ----------------------------------
    const containerRef = useRef();
    const titleRef = useRef();
    const section1Ref = useRef();
    const section2Ref = useRef();
    const section3Ref = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const title = titleRef.current;
        const section1 = section1Ref.current;
        const section2 = section2Ref.current;
        const section3 = section3Ref.current;

        const targets = [
            title,
            section1,
            section2,
            section3
        ];

        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 50%",
                end: "bottom -2000%",
                scrub: true,
                toggleClass: {targets: targets, className: "open"},
                // markers: true
            }
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "bottom 50%",
                end: "bottom -2000%",
                scrub: true,
                toggleClass: {targets: targets, className: "close"},
                // markers: true
            }
        })
    })
    // ----------------------------------

    return (
        <div ref={containerRef} className="foundation-container">  
            <div className="foundation-description">
                <div ref={section3Ref} className="f-section3">
                    <p className="f3-content">
                        By this point, I've already figured out how to break up the web design into pages & components. <br/><br/>
                        Here, I'll set up the HTML & JavaScript, as well as the styling &mdash; one component at a time.
                    </p>
                </div>
                <div ref={section2Ref} className="f-section2">
                    <div className="f2-box">
                        <h3 className="f2-header">My Favorites</h3>
                        <ul>
                            <li>SASS</li>
                            <li>React JS (Hooks)</li>
                            <li>VS Code</li>
                        </ul>
                        <div className="small-box"></div>
                    </div>
                </div>
                <div ref={section1Ref} className="f-section1">
                    <div className="f1-header">
                        <h3><span>Build</span><br/> Basics</h3>
                        <h4>the</h4>
                    </div>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>
            <div ref={titleRef} className="foundation-title">
                <h2 className="f-number">02.</h2>
                <div className="f-underline"></div>
                <div className="f-name">Foundation</div>
            </div>
        </div>
    )
}
export default TheFoundation;