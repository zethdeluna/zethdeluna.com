import React, { useRef, useEffect } from 'react';
import './FoundationMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FoundationMobile() {
    // scroll effects
    // -----------------------------------------
    const containerRef = useRef();
    const contentRef = useRef();
    const titleRef = useRef();
    const section1Ref = useRef();
    const section2Ref = useRef();
    const section3Ref = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        const title = titleRef.current;
        const section1 = section1Ref.current;
        const section2 = section2Ref.current;
        const section3 = section3Ref.current;

        const targets = [
            content,
            title,
            section1, 
            section2,
            section3
        ];

        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom -2000%",
                toggleClass: {targets: targets, className: "open"}
            }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "bottom top",
                end: "bottom -2000%",
                toggleClass: {targets: targets, className: "close"}
            }
        });
    })
    // -----------------------------------------


    return (
        <div ref={containerRef} className="foundation-container-mobile">
            <div ref={contentRef} className="foundation-content-mobile">
                <div ref={titleRef} className="foundation-title-mobile">
                    <h2 className="number">02.</h2>
                    <div className="underline"></div>
                    <h3 className="name">foundation</h3>
                </div>
                <div ref={section1Ref} className="f-section1">
                    <div className="f1-header">
                        <h3><span>Build</span><br/>Basics</h3>
                        <h4>the</h4>
                    </div>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div ref={section2Ref} className="f-section2">
                    <h3 className="f2-header">My Favorites</h3>
                    <ul>
                        <li>SASS</li>
                        <li>React JS  (Hooks)</li>
                        <li>VS Code</li>
                    </ul>
                    <div className="small-box-left"></div>
                    <div className="small-box-right"></div>
                </div>
                <div ref={section3Ref} className="f-section3">
                    <p className="f3-content">
                        By this point, I've already figured out how to break up the web design into pages and components.<br/><br/>
                        Here, I'll set up the HTML & JavaScript, as well as the styling &mdash; one component at a time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FoundationMobile;