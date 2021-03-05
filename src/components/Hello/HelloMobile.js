import React, { useRef, useEffect } from 'react';
import './HelloMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HelloMobile() {
    const HMCRef = useRef();
    const helloMobileRef = useRef();
    const circleMobileRef = useRef();

    useEffect(() => {
        gsap.to(
            [helloMobileRef.current, circleMobileRef.current], {
                scrollTrigger: {
                    trigger: HMCRef.current,
                    start: "center center",
                    end: "center top",
                    scrub: true,
                    // markers: true
                },
                opacity: 0
            }
        )
        gsap.to(
            circleMobileRef.current, {
                scrollTrigger: {
                    trigger: HMCRef.current,
                    start: "center center",
                    end: "center top",
                    scrub: true
                },
                rotate: "235deg"
            }
        )
    })

    return (
        <div ref={HMCRef} id="helloMobileContainer">
            <div ref={helloMobileRef} id="helloMobile"/>
            <svg ref={circleMobileRef} xmlns="http://www.w3.org/2000/svg" width="800" height="800">
                <g id="sirkoMobile">
                <path id="curveMobile" d="M115.018 400c0-157.534 127.591-285.24 284.982-285.24 157.391 0 284.982 127.706 284.982 285.24S557.391 685.24 400 685.24c-157.391 0-284.982-127.706-284.982-285.24z" fill="none"/>
                <text>
                    <textPath xlinkHref="#curveMobile">
                        scroll down to learn more about me
                    </textPath>
                </text>
                </g>
            </svg>
        </div>
    )
}

export default HelloMobile