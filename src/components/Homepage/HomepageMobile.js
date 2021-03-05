import React, { useRef, useEffect, memo } from 'react';
import './HomepageMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomepageMobile() {
    const homeMobileRef = useRef();
    const mobOpeningRef = useRef();
    const meMobileRef = useRef();
    const mobDescrRef = useRef();

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: homeMobileRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true
            }
        })
        .to([mobOpeningRef.current, meMobileRef.current, mobDescrRef.current], {opacity: 1})
        .to([mobOpeningRef.current, meMobileRef.current, mobDescrRef.current], {opacity: 0})
    })

    return (
        <div ref={homeMobileRef} id="homepageMobile">
            <div id="mobileOpening">
                <h2 ref={mobOpeningRef}>
                    My name is <span>Zeth</span>,
                    <br/>
                    born and raised
                    <br/>
                    in <span>Los Angeles</span>.
                </h2>
            </div>
            <div ref={meMobileRef} id="meMobile"/>
            <div id="mobileHomeDescription">
                <h2 ref={mobDescrRef}>
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

export default HomepageMobile