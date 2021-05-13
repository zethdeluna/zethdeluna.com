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
    const nameRef = useRef();

    useEffect(() => {
        const home = homeRef.current;
        const lineTop = lineTopRef.current;
        const lineBot = lineBotRef.current;
        const name = nameRef.current;

        const centerLineTL = gsap.timeline({
            scrollTrigger: {
                trigger: home,
                start: "bottom bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        centerLineTL.to(lineTop, { translateY: "-40vh" });
        centerLineTL.to(lineBot, { translateY: "40vh" }, 0);

        gsap.timeline({
            scrollTrigger: {
                trigger: home,
                start: "bottom top",
                end: "bottom -2000%",
                toggleClass: { targets: name, className: "close"}
            }
        });
    })
    // ------------------------------

    return (
        <>
        <div ref={homeRef} className="homepage-container">
            <div className="home-background">
                <div className="line"></div>
            </div>
            <div className="homepage-content">
                <div ref={nameRef} className="my-name">
                    <p>
                        <span>Z</span><span>et</span><span>h</span><span> De</span><span> Lu</span><span>na</span>
                    </p>
                </div>
                <div ref={lineTopRef} className="center-line1"></div>
                <div ref={lineBotRef} className="center-line2"></div>
            </div>
            <div className="home-marquee">
                <div className="home-marquee--content">
                    <span ref={homeTitleRef}>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Homepage;