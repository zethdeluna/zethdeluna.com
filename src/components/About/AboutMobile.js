import React, { useRef, useEffect } from 'react';
import './AboutMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutMobile() {
    const ABCRef = useRef();
    const MATitleRef = useRef();
    const MATextRef = useRef();

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ABCRef.current,
                start: "top bottom",
                end: "42% top",
                scrub: true,
                // markers: true
            }
        })
        .to(MATitleRef.current, {y: "0vh"})
        .to(MATitleRef.current, {y: "-90vh"})
        .to(MATitleRef.current, {
            "scale": 0.3,
            x: "-36vw",
            y: "-105vh"
        })

        var mobileInterests = gsap.utils.toArray('.mobileInterest');

        mobileInterests.forEach((interest) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: interest,
                    start: "top 95%",
                    end: "bottom 5%",
                    scrub: true,
                    toggleActions: "play reverse play reverse"
                }
            })
            .to(interest, {autoAlpha: 1, duration: 0.5})
            .to(interest, {autoAlpha: 0, duration: 0.5}, 1)
        })
    })

    return (
        <div ref={ABCRef} id="aboutMobileContainer">
            <div id="mobAboutTitle">
                <h1 ref={MATitleRef}>Things I Love</h1>
            </div>
            <div ref={MATextRef} id="mobAboutText">
                <h2 className="mobileInterest">Web Design / Dev.</h2>
                <h2 className="mobileInterest">UX / UI</h2>
                <h2 className="mobileInterest">Physics</h2>
                <h2 className="mobileInterest">Movies</h2>
                <h2 className="mobileInterest">Los Angeles Lakers</h2>
                <h2 className="mobileInterest">Food</h2>
                <h2 className="mobileInterest">The Ocean</h2>
                <h2 className="mobileInterest">Dwayne Johnson</h2>
                <h2 className="mobileInterest">&nbsp;</h2>
                <h2 className="mobileInterest"><i className="fas fa-long-arrow-alt-down"></i></h2>
            </div>
        </div>
    )
}

export default AboutMobile