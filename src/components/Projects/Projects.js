import React, { useRef, useEffect } from 'react';
import './Projects.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const projectsRef = useRef();
    const projectsTitleRef = useRef();
    const phoneRef = useRef();
    const bbthRef = useRef();

    useEffect(() => {
        // scrolls up Project Page Intro
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "-5% bottom",
                end: "15% top",
                scrub: true,
                // markers: true
            }
        })
        .to(projectsTitleRef.current, {y: "100vh"})
        .to(projectsTitleRef.current, {y: "-150vh"})

        // slides right iphone
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "27% bottom",
                end: "27% center",
                scrub: true,
                // markers: true,
            }
        })
        .to(phoneRef.current, {x: "0px"})

        // slide right project 1 description
        gsap.to(bbthRef.current, {
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "30% bottom",
                end: "30% center",
                scrub: true,
                // markers: true
            },
            x: "600px"
        })
    })

    return (
        <div ref={projectsRef} id="projectsContainer">
            <div ref={projectsTitleRef} id="projectsTitle">
                <h2>
                    Projects
                    <br/><hr/>
                </h2>
                <span>
                    I'm a self-taught web developer who is eager to learn.
                    <br/>
                    Here are some projects that I worked on to help me 
                    <br/> 
                    dive deeper into the world of web development & design.
                </span>
            </div>
            <div id="project1Container">
                <div ref={phoneRef} id="img"/>
                <span ref={bbthRef}>
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

export default Projects