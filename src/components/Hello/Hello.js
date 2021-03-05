import React, { useRef, useEffect } from 'react';
import './Hello.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hello() {
    const helloContainerRef = useRef();
    const helloRef = useRef();
    // const scrollRef = useRef();
    // const arrowRef = useRef();
    const circleRef = useRef();

    useEffect(() => {
        gsap.to(
            // scrollRef.current, arrowRef.current, -- took the scroll arrow out but keeping it here just in case
            [helloRef.current, circleRef.current], {
                scrollTrigger: {
                    trigger: helloContainerRef.current,
                    start: "center center",
                    end: "center top",
                    scrub: true,
                    // markers: true
                },
                opacity: 0,
            }
        )
        gsap.to(
            circleRef.current, {
                scrollTrigger: {
                    trigger: helloContainerRef.current,
                    start: "center center",
                    end: "center top",
                    scrub: true,
                },
                rotate: "235deg"
            }
        )
    })

    return (
        <div ref={helloContainerRef} id="helloContainer">
            <div ref={helloRef} id="hello"/>
            <svg ref={circleRef} xmlns="http://www.w3.org/2000/svg" width="800" height="800">
                <g id="sirko">
                <path id="curve" d="M115.018 400c0-157.534 127.591-285.24 284.982-285.24 157.391 0 284.982 127.706 284.982 285.24S557.391 685.24 400 685.24c-157.391 0-284.982-127.706-284.982-285.24z" fill="none"/>
                <text>
                    <textPath xlinkHref="#curve">
                        scroll down to learn more about me
                    </textPath>
                </text>
                </g>
            </svg>
            {/* <div id="helloScroll" className="slide-top">
                <span ref={scrollRef} id="scroll">Scroll</span>
                <span ref={arrowRef} id="arrow"/>
            </div> */}
        </div>
    )
}

export default Hello