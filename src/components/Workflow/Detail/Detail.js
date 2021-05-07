import React, { useRef, useEffect } from 'react';
import './Detail.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Detail() {
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
        <div ref={containerRef} className="detail-container">
            <div className="detail-description">
                <div ref={section3Ref} className="d-section3">
                    <p className="d3-content">
                        Almost ready to launch!<br/><br/>
                        I just have to make sure that everything works smoothly and properly.<br/><br/>
                        After this, we'll have the final product!
                    </p>
                </div>
                <div ref={section2Ref} className="d-section2">
                    <div className="d2-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        <div className="d2--small-box"></div>
                    </div>
                </div>
                <div ref={section1Ref} className="d-section1">
                    <div className="d1-header">
                        <h3><span>Test</span><br/> Tweak</h3>
                        <h4>and</h4>
                    </div>
                    <ul>
                        <li>Usability</li>
                        <li>Accessibility</li> 
                        <li>Responsiveness</li>
                        <li>Functionality</li>
                        <li>Compatibility</li>
                    </ul>
                </div>
            </div>
            <div ref={titleRef} className="detail-title">
                <h2 className="d-number">04.</h2>
                <div className="d-underline"></div>
                <div className="d-name">Detail</div>
            </div>
        </div>
    )
}

export default Detail;