import React, { useRef, useEffect } from 'react';
import './BreakdownMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BreakdownMobile() {
    // scroll effects
    // ----------------------------------------
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
    // ----------------------------------------

    return (
        <div ref={containerRef} className="breakdown-container-mobile">
            <div ref={contentRef} className="breakdown-content-mobile">
                <div ref={titleRef} className="breakdown-title-mobile">
                    <h2 className="number">01.</h2>
                    <div className="underline"></div>
                    <h3 className="name">breakdown</h3>
                </div>
                <div ref={section1Ref} className="b-section1">
                    <div className="b1-header">
                        <h3><span>Understand</span><br/>Design</h3>
                        <h4>the</h4>
                    </div>
                    <ul>
                        <li>content</li>
                        <li>pages</li>
                        <li>purpose</li>
                    </ul>
                    <ul>
                        <li>interactions</li>
                        <li>elements</li>
                        <li>components</li>
                    </ul>
                </div>
                <div ref={section2Ref} className="b-section2">
                    <h3 className="b2-header">Identify</h3>
                    <div className="line"></div>
                    <ul>
                        <li>layout</li>
                        <li>functionality</li>
                    </ul>
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
    )
}

export default BreakdownMobile;