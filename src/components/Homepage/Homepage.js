import React, { useRef, useEffect } from 'react';
import './Homepage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
    const homepageRef = useRef();
    const openingRef = useRef();
    const descrRef = useRef();
    const picRef = useRef();

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: homepageRef.current,
                start: "top bottom",
                end: "bottom center",
                scrub: true,
                // markers: true
            }
        })
        .to([openingRef.current, descrRef.current, picRef.current], {opacity: 0.5})
        .to([openingRef.current, descrRef.current, picRef.current], {opacity: 1})
        .to([openingRef.current, descrRef.current, picRef.current], {opacity: 0})
    })

    return (
        <div ref={homepageRef} id="homepage">
            {/* header text */}
            <div id="myOpening">
                <h2 ref={openingRef}>
                    My name is <span>Zeth</span>,
                    <br/>
                    born and raised in <span>Los Angeles</span>.
                </h2>
            </div>
            <div ref={picRef} id="homeDescription">
                <div id="me"/>
                <h2 ref={descrRef}>
                    I am a <span>creative</span>
                    <br/>
                    aspiring <span>front-end developer</span>
                    <br/>
                    and <span>designer</span>.
                </h2>
            </div>
        </div>
    )
}

export default Homepage