import React, { useRef, useEffect } from 'react';
import './OpenerMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function OpenerMobile() {
    // scroll effects
    // --------------------------------
    const containerRef = useRef();
    const contentRef = useRef();
    const topHeaderRef = useRef();
    const botHeaderRef = useRef();
    const step1Ref = useRef();
    const step2Ref = useRef();
    const step3Ref = useRef();
    const step4Ref = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        const topHeader = topHeaderRef.current;
        const botHeader = botHeaderRef.current;
        const step1 = step1Ref.current;
        const step2 = step2Ref.current;
        const step3 = step3Ref.current;
        const step4 = step4Ref.current;

        const targets = [
            content,
            topHeader,
            botHeader,
            step1,
            step2,
            step3,
            step4
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
    // --------------------------------

    return (
        <div ref={containerRef} className="opener-container-mobile">
            <div ref={contentRef} className="opener-content-mobile">
                <h2 ref={topHeaderRef} className="top-header">trust the process</h2>
                <div className="process-mobile">
                    <div className="steps-mobile">
                        <div ref={step1Ref} className="step">
                            <h3>01.</h3>
                            <h2>breakdown</h2>
                        </div>
                        <div ref={step2Ref} className="step">
                            <h3>02.</h3>
                            <h2>foundation</h2>
                        </div>
                        <div ref={step3Ref} className="step">
                            <h3>03.</h3>
                            <h2>integration</h2>
                        </div>
                        <div ref={step4Ref} className="step">
                            <h3>04.</h3>
                            <h2>detail</h2>
                        </div>
                    </div>
                </div>
                <h2 ref={botHeaderRef} className="bottom-header">trust the process</h2>
            </div>
        </div>
    )
}

export default OpenerMobile;