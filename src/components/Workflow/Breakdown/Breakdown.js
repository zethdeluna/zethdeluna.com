import React, { useRef, useEffect } from 'react';
import './Breakdown.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TheBreakdown() {
    // scroll effects
    // ----------------------------------
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
                scrub: true,
                toggleClass: {targets: targets, className: "open"},
                // markers: true
            }
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "bottom top",
                end: "bottom -2000%",
                scrub: true,
                toggleClass: {targets: targets, className: "close"},
                // markers: true
            }
        })
    })
    // ----------------------------------

    return (
        <div ref={containerRef} className="breakdown-container">
            <div ref={contentRef} className="breakdown-content">
                <div ref={titleRef}a className="breakdown-title">
                    <h2 className="number">01.</h2>
                    <div className="underline"></div>
                    <h3 className="name">Breakdown</h3>
                </div>
                <div className="breakdown-description">
                    <div ref={section1Ref} className="b-section1">
                        <div className="b1-header">
                            <h3><span>Understand</span><br/> Design</h3>
                            <h4>the</h4>
                        </div>
                        <ul>
                            <li>content</li>
                            <li>pages</li>
                            <li>purpose</li>
                            <li>interatctions</li>
                            <li>elements</li>
                            <li>components</li>
                        </ul>
                    </div>
                    <div ref={section2Ref} className="b-section2">
                        <div className="box">
                            <h3 className="b2-header">Identify</h3>
                            <div className="line"></div>
                            <ul>
                                <li>layout</li>
                                <li>functionality</li>
                            </ul>
                        </div>
                    </div>
                    <div ref={section3Ref} className="b-section3">
                        <h3 className="b3-header">Think</h3>
                        <p className="b3-content">
                            Mobile <br/>
                            <span>vs</span> <br/>
                            Desktop
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheBreakdown;