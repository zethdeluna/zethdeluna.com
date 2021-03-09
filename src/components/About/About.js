import React, { useRef, useEffect } from 'react';
import './About.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const aboutRef = useRef();
    const titleRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top bottom",
                end: "35% top",
                scrub: true,
                // markers: true
            }
        })
        .to(titleRef.current, {
            y: "0vh"
        })
        .to(titleRef.current, {
            y: "-80vh"
        })
        .to(titleRef.current, {
            rotate: "-90deg",
            x: "-40vw",
            y: "-65vh"
        })

        var interests = gsap.utils.toArray('.interest');

        interests.forEach((interest) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: interest,
                    start: "top 85%",
                    end: "bottom 10%",
                    scrub: true,
                    // markers: true,
                    toggleActions: "play reverse play reverse"
                }
            })
            .to(interest, {autoAlpha: 1, duration: 0.5})
            .to(interest, {autoAlpha: 0, duration: 0.5}, 1)
        })
    })

    return (
        <div ref={aboutRef} id="aboutContainer">
            <div id="aboutTitle">
                <h1 ref={titleRef}>Things I Love</h1>
            </div>
            <div ref={textRef} id="aboutText">
                <h2 className="interest">Web Design / Dev.</h2>
                <h2 className="interest">UX / UI</h2>
                <h2 className="interest">Physics</h2>
                <h2 className="interest">Movies</h2>
                <h2 className="interest">Los Angeles Lakers</h2>
                <h2 className="interest">Food</h2>
                <h2 className="interest">The Ocean</h2>
                <h2 className="interest">Dwayne Johnson</h2>
                <h2 className="interest">&nbsp;</h2>
                <h2 className="interest"><i className="fas fa-long-arrow-alt-down"></i></h2>
            </div>
        </div>
    )
}

export default About