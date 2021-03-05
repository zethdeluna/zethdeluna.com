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

    useEffect(() => {
        // scrolls up Project page intro
        gsap.timeline({
            scrollTrigger: {
            trigger: PMCRef.current,
            start: "-5% bottom",
            end: "15% top",
            scrub: true,
            // markers: true
            }
        })
        .to(PIMRef.current, {y: "100vh"})
        .to(PIMRef.current, {y: "-150vh"})

        // slides right iphone
        gsap.timeline({
            scrollTrigger: {
                trigger: PMCRef.current,
                start: "30% bottom",
                end: "30% center",
                scrub: true
            }
        })
        .to(bbthImgRef.current, {x: "-50px"})

        // slide right project 1 description
        gsap.to(bbthMobProjRef.current, {
            scrollTrigger: {
                trigger: PMCRef.current,
                start: "33% bottom",
                end: "33% center",
                scrub: true
            },
            x: "17vw"
        })
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
                </span>
            </div>
        </div>
    )
}

export default ProjectsMobile