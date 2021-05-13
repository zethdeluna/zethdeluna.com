import React, { useRef, useEffect } from 'react';
import './Thanks.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Thanks() {
    // vertical text scroller
    // ---------------------------
    const titleRef = useRef();

    useEffect(() => {
        const content = "<p>Thank you</p>";
        const thanksMarqueeText = titleRef.current;

        for (let i = 0; i < 70; i++) {
            thanksMarqueeText.innerHTML += content;
        }
    });
    // ---------------------------

    // scroll effects
    // ---------------------------
    const containerRef = useRef();
    const statementRef = useRef();
    const headerRef = useRef();
    const lineRef = useRef();
    const sideLineRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const statement = statementRef.current;
        const header = headerRef.current;
        const line = lineRef.current;
        const sideLine = sideLineRef.current;

        const targets = [
            statement,
            header,
            line,
            sideLine
        ];

        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom -2000%",
                toggleClass: {targets: targets, className: "open"}
            }
        })
    })
    // ---------------------------

    return (
        <div ref={containerRef} className="thanks-container">
            <div className="thanks-background">
                <div className="line"></div>
                <div className="title-marquee">
                    <div className="title-content">
                        <span ref={titleRef} className="title"></span>
                    </div>
                </div>
            </div>

            <div className="thanks-content">
                <p ref={statementRef} className="thanks-statement">Thanks for visiting</p>
                <h2 ref={headerRef} className="contact">Contact</h2>
                <div ref={lineRef} className="contact-line"></div>
                <div ref={sideLineRef} className="side-line"></div>
            </div>
        </div>
    )
}

export default Thanks;