import React, { useRef, useEffect } from 'react';
import './Opener.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Opener() {
    // scroll effects
    // -----------------------------
    const openerContainerRef = useRef();
    const topHeaderRef = useRef();
    const bottomHeaderRef = useRef();
    const step1Ref = useRef();
    const step2Ref = useRef();
    const step3Ref = useRef();
    const step4Ref = useRef();

    useEffect(() => {
        const openerContainer = openerContainerRef.current;
        const topHeader = topHeaderRef.current;
        const bottomHeader = bottomHeaderRef.current;
        const step1 = step1Ref.current;
        const step2 = step2Ref.current;
        const step3 = step3Ref.current;
        const step4 = step4Ref.current;

        const targetsOpen = [
            topHeader,
            bottomHeader,
            step1,
            step2,
            step3,
            step4
        ];

        gsap.timeline({
            scrollTrigger: {
                trigger: openerContainer,
                start: "top 50%",
                end: "bottom -2000%",
                scrub: true,
                // markers: true,
                toggleClass: {targets: targetsOpen, className: "open"}
            }
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: openerContainer,
                start: "bottom 50%",
                end: "bottom -2000%",
                scrub: true,
                toggleClass: {targets: targetsOpen, className: "close"}
            }
        });
    })
    // -----------------------------

    return (
        <div ref={openerContainerRef} className="opener-container">
            <h2 ref={topHeaderRef} className="top-header">Trust the process</h2>
            <div className="process">
                <div className="steps">
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
            <h2 ref={bottomHeaderRef} className="bottom-header">Trust the process</h2>
        </div>
    )
}

export default Opener;