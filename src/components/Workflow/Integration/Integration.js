import React, { useRef, useEffect } from 'react';
import './Integration.scss';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Integration() {
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
        <div ref={containerRef} className="integration-container">
            <div ref={titleRef} className="integration-title">
                <h2 className="i-number">03.</h2>
                <div className="i-underline"></div>
                <h3 className="i-name">Integration</h3>
            </div>
            <div className="integration-description">
                <div ref={section1Ref} className="i-section1">
                    <div className="i1-header">
                        <h3><span>Connect</span><br/> Components</h3>
                        <h4>the</h4>
                    </div>
                    <ul>
                        <li>Homepage</li>
                        <li>Navigation bar</li>
                        <li>Page content</li>
                        <li>Etc.</li>
                    </ul>
                </div>
                <div ref={section2Ref} className="i-section2">
                    <h4>Pieces</h4>
                    <div className="i-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.825 21.825"><path d="M16.791 13.254a1.112 1.112 0 011.587 0 1.14 1.14 0 010 1.587l-6.65 6.651a1.14 1.14 0 01-.809.333c-.317 0-.603-.127-.81-.333l-6.65-6.651c-.444-.444-.444-1.143 0-1.587s1.143-.444 1.587 0l4.746 4.762V1.111A1.116 1.116 0 0110.918 0c.619 0 1.111.492 1.111 1.111v16.904l4.762-4.761z" fill="#fffaef"/></svg>
                    </div>
                    <h4>Product</h4>
                </div>
                <div ref={section3Ref} className="i-section3">
                    <p className="i3-content">
                        Now, it's time to seamlessly stitch each piece of the website together. <br/><br/>

                        Here, we'll get the "first draft" of the final product.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Integration;