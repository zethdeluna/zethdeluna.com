import React, { useRef, useEffect } from 'react';
import './Hello.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hello() {
    const helloContainerRef = useRef();
    const helloRef = useRef();
    const scrollRef = useRef();
    const arrowRef = useRef();

    useEffect(() => {
        gsap.to(
            [helloRef.current, scrollRef.current, arrowRef.current], {
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
    })

    return (
        <div ref={helloContainerRef} id="helloContainer">
            <div id="hello" className="slide-top">
                <h2 ref={helloRef}>Hello!</h2>
            </div>
            <div id="helloScroll" className="slide-top">
                <span ref={scrollRef} id="scroll">Scroll</span>
                <span ref={arrowRef} id="arrow"/>
            </div>
        </div>
    )
}

export default Hello