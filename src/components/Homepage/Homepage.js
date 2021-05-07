import React, { useRef, useEffect } from 'react';
import './Homepage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
    // vertical text scroller marquee
    // ******************************
    const homeTitleRef = useRef();

    const content = "<p>front-end developer</p>"
    useEffect(() => {
        for (let i = 0; i < 30; i++) {
            homeTitleRef.current.innerHTML += content;
        }
    });
    // ******************************

    // name effect on load
    // ******************************
    const homeRef = useRef();
    const lineTopRef = useRef();
    const lineBotRef = useRef();

    useEffect(() => {
        const home = homeRef.current;
        const lineTop = lineTopRef.current;
        const lineBot = lineBotRef.current;

        // name.classList.add("name-enter");
        setTimeout(() => {
            home.classList.add("home-enter");
        }, 500);

        setTimeout(() => {
            lineTop.classList.add("line-top-enter");
            lineBot.classList.add("line-bot-enter")
        }, 1500);
    })
    // ******************************

    // scroll effects
    // ------------------------------
    useEffect(() => {
        const home = homeRef.current;
        const lineTop = lineTopRef.current;
        const lineBot = lineBotRef.current;

        const centerLineTL = gsap.timeline({
            scrollTrigger: {
                trigger: home,
                start: "bottom bottom",
                end: "bottom 37%",
                scrub: true
            }
        });

        // centerLineTL.to(lineTop, {x: "200px"});
        // centerLineTimeline.to(lineBot, {x: "-200px"}, 0);
        centerLineTL.to(lineTop, { scaleY: 0 })
        centerLineTL.to(lineBot, { y: "80vh", scaleY: 0 }, 0);

    })
    // ------------------------------

    return (
        <div ref={homeRef} className="homepage-container">
            <div className="home-background">
                <div className="line"></div>
            </div>
            <div className="my-name">
                <p>
                    <span>Z</span><span>et</span><span>h</span><span> De</span><span> Lu</span><span>na</span>
                </p>
            </div>
            <div ref={lineTopRef} className="center-line1"></div>
            <div ref={lineBotRef} className="center-line2"></div>
            <div className="home-marquee">
                <div className="home-marquee--content">
                    <span ref={homeTitleRef}>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Homepage;