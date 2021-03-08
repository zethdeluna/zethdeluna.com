import React, { useRef, useEffect } from 'react';
import './ProjectsMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectsMobile() {
    const PMCRef = useRef();
    const PIMRef = useRef();
    const bbthImgRef = useRef();
    const bbthMobProjRef = useRef();
    const portfolioImgRef = useRef();
    const portfolioMobRef = useRef();

    useEffect(() => {
        // scrolls up Project page intro
        gsap.timeline({
            scrollTrigger: {
            trigger: PMCRef.current,
            start: "20% bottom",
            end: "70% center",
            scrub: true,
            // markers: true
            }
        })
        .to(PIMRef.current, {y: "-200vh"})

        // slides bbth iphone into view
        gsap.timeline({
            scrollTrigger: {
                trigger: PMCRef.current,
                start: "35% bottom",
                end: "40% center",
                scrub: true
            }
        })
        .to(bbthImgRef.current, {x: "0"})

        // slide right project 1 description
        gsap.to(bbthMobProjRef.current, {
            scrollTrigger: {
                trigger: PMCRef.current,
                start: "40% bottom",
                end: "40% center",
                scrub: true
            },
            x: "0"
        })

        // slide bbth iphone out of view
        gsap.timeline({
            scrollTrigger: {
                trigger: PMCRef.current,
                start: "65% bottom",
                end: "75% center",
                scrub: true
            }
        })
        .to(bbthImgRef.current, {x: "-550px"})

        // slide bbth project description out of view
        gsap.timeline({
            scrollTrigger: {
                trigger: PMCRef.current,
                start: "65% bottom",
                end: "65% 30%",
                scrub: true
            }
        })
        .to(bbthMobProjRef.current, {x: "-700px"})

        // slide portfolio macbook in
        gsap.timeline({
            scrollTrigger: {
                trigger: PMCRef.current,
                start: "65% bottom",
                end: "65% 30%",
                scrub: true
            }
        })
        .to(portfolioImgRef.current, {x: "0"})

        // slide portfolio description in
        gsap.timeline({
            scrollTrigger: {
                trigger: PMCRef.current,
                start: "70% bottom",
                end: "70% 30%",
                scrub: true
            }
        })
        .to(portfolioMobRef.current, {x: "0"})
    })

    return (
        <div ref={PMCRef} id="projectsMobileContainer">
            <div ref={PIMRef} id="projectsIntroMobile">
                <h2>
                    Projects
                    <br/><hr/>
                </h2>
                <span>
                    I'm a self-taught web developer who is eager to learn.
                    <br/>
                    Here are some projects that I worked on to help me
                    dive deeper into the world of web development & design.
                </span>
            </div>
            <div id="proj1Mobile">
                <div ref={bbthImgRef} id="bbth-iphoneMobile"/>
                <span ref={bbthMobProjRef}>
                    <h3>
                        Bon Bon Tea House
                    </h3>
                    <p>
                        Over the past <em>5-ish</em> years, I've spent my time at this
                        local tea shop both as a college student & as a barista. They
                        don't have an official website yet, but here's what I think 
                        would be a great start to their internet presence.
                    </p>
                    <a href="https://zethdeluna.github.io/bbth/"
                    target="_blank"
                    rel="noreferrer">
                        Check out the website
                    </a>
                    <br/><br/>
                    <a href="https://github.com/zethdeluna/bbth"
                    target="_blank"
                    rel="noreferrer">
                        Check out the code
                    </a>
                </span>
            </div>
            <div id="proj2Mobile">
                <div ref={portfolioImgRef} id="portfolioMobileIMG"/>
                <span ref={portfolioMobRef}>
                    <h3>
                        zethdeluna.com
                    </h3>
                    <p>
                        The webpage you're currently scrolling through was built
                        by me and my good friend, Google Search. For a 
                        behind the scenes look, feel free to take a stroll
                        through my Github.
                    </p>
                    <a href="https://github.com/zethdeluna/zethdeluna.com"
                    target="_blank"
                    rel="noreferrer">
                        Check out the code
                    </a>
                </span>
            </div>
        </div>
    )
}

export default ProjectsMobile