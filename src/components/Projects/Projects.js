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
    const macbookRef = useRef();
    const portfolioRef = useRef();

    useEffect(() => {
        // scrolls up Project Page Intro
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "20% bottom",
                end: "70% center",
                scrub: true,
                // markers: true
            }
        })
        .to(projectsTitleRef.current, {y: "-200vh"})

        // slide iphone into view
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "35% bottom",
                end: "35% center",
                scrub: true,
                // markers: true,
            }
        })
        .to(phoneRef.current, {x: "0px"})

        // slide into view project 1 description
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "39% bottom",
                end: "39% center",
                scrub: true,
                // markers: true
            }
        })
        .to(bbthRef.current, {x: "45vw"})

        // slide iphone out of view
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "60% bottom",
                end: "70% center",
                scrub: true
            }
        })
        .to(phoneRef.current, {x: "-450px"})

        // slide out of view project 1
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "60% bottom",
                end: "60% 30%",
                scrub: true,
                // markers: true
            }
        })
        .to(bbthRef.current, {x: "-500px"})

        // slide macbook into view
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "60% bottom",
                end: "60% 30%",
                scrub: true,
                // markers: true
            }
        })
        .to(macbookRef.current, {x: "0"})

        // slide portfolio project into view
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsRef.current,
                start: "65% bottom",
                end: "65% 30%",
                scrub: true,
                // markers: true
            }
        })
        .to(portfolioRef.current, {x: "0"})
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
                <div ref={phoneRef} id="bbthProjectIMG"/>
                <span ref={bbthRef}>
                    <h3 id="bbthProjectTitle">
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
            <div id="project2Container">
                <div ref={macbookRef} id="portfolioProjectIMG"/>
                <span ref={portfolioRef}>
                    <h3 id="portfolioProjectTitle">
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

export default Projects