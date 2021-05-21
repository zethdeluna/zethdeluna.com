import React, { useRef, useEffect } from 'react';
import './DetailMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function DetailMobile() {
    // scroll effects 
    // ------------------------------
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
    });
    // ------------------------------


    return (
        <div ref={containerRef} className="detail-container-mobile">
            <div ref={contentRef} className="detail-content-mobile">
                <div ref={titleRef} className="detail-title-mobile">
                    <h2 className="number">04.</h2>
                    <div className="underline"></div>
                    <h3 className="name">detail</h3>
                </div>
                <div ref={section1Ref} className="d-section1">
                    <div className="d1-header">
                        <h3><span>test</span><br/>tweak</h3>
                        <h4>and</h4>
                    </div>
                    <ul>
                        <li>usability</li>
                        <li>accessibility</li>
                        <li>responsiveness</li>
                        <li>functionality</li>
                        <li>compatibility</li>
                    </ul>
                </div>
                <div ref={section2Ref} className="d-section2">
                    <div className="box"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                    <div className="box"></div>
                </div>
                <div ref={section3Ref} className="d-section3">
                    <p className="d3-content">
                        Almost ready to launch!<br/><br/>
                        I just have to make sure that everything works smoothly and properly. After this, we'll have the final product!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailMobile;