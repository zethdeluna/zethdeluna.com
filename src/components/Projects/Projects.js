import React, { useRef, useEffect } from 'react';
import './Projects.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const projectsRef = useRef();

    const projectsTitleRef = useRef();
    const projTitleTextRef = useRef();

    const proj1Ref = useRef();
    const phoneRef = useRef();
    const bbthRef = useRef();

    const proj2Ref = useRef();
    const macbookRef = useRef();
    const portfolioRef = useRef();

    useEffect(() => {
        // scrolls up Project Page Intro
        gsap.timeline({
            scrollTrigger: {
                trigger: projectsTitleRef.current,
                start: "top bottom",
                end: "bottom 25%",
                scrub: true,
                // markers: true
            }
        })
        .to(projTitleTextRef.current, {y: "-100vh"})

        // slide iphone into view
        gsap.timeline({
            scrollTrigger: {
                trigger: proj1Ref.current,
                start: "top bottom",
                end: "40% center",
                scrub: true,
                // markers: true
            }
        })
        .to(phoneRef.current, {x: "0px"})

        // slide into view project 1 description
        gsap.timeline({
            scrollTrigger: {
                trigger: proj1Ref.current,
                start: "25% bottom",
                end: "40% center",
                scrub: true,
                // markers: true
            }
        })
        .to(bbthRef.current, {x: "0"})

        // slide iphone out of view
        gsap.timeline({
            scrollTrigger: {
                trigger: proj1Ref.current,
                start: "60% center",
                end: "bottom top",
                scrub: true,
                // markers: true
            }
        })
        .to(phoneRef.current, {x: "-460px"})

        // slide out of view project 1
        gsap.timeline({
            scrollTrigger: {
                trigger: proj1Ref.current,
                start: "60% center",
                end: "bottom top",
                scrub: true,
                // markers: true
            }
        })
        .to(bbthRef.current, {x: "-100vw"})

        // slide macbook into view
        gsap.timeline({
            scrollTrigger: {
                trigger: proj2Ref.current,
                start: "top bottom",
                end: "center 60%",
                scrub: true,
                // markers: true 
            }
        })
        .to(macbookRef.current, {x: "0"})

        // slide portfolio project into view
        gsap.timeline({
            scrollTrigger: {
                trigger: proj2Ref.current,
                start: "25% bottom",
                end: "center 60%",
                scrub: true,
                // markers: true
            }
        })
        .to(portfolioRef.current, {x: "0"})
    })

    return (
        <div ref={projectsRef} id="projectsContainer">
            <div ref={projectsTitleRef} id="projectsTitle">
                <div ref={projTitleTextRef} id="projTitleText">
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
            </div>
            <div ref={proj1Ref} id="project1Container">
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
            <div ref={proj2Ref} id="project2Container">
                <div ref={macbookRef} id="portfolioProjectIMG"/>
                <span ref={portfolioRef}>
                    <h3 id="portfolioProjectTitle">
                        zethdeluna.com
                    </h3>
                    <p>
                        The webpage you're currently scrolling through was built
                        by me &mdash; using React JS, GSAP, SASS, and good ol' 
                        Stack Overflow. For a behind the scenes look, feel free
                        to take a stroll through my Github.
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