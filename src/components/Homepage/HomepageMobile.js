import React, { useRef, useEffect } from 'react';
import './HomepageMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomepageMobile() {
    // vertical text scroller
    // ------------------------------
    const homeTitleRef = useRef();

    const content = "<p>front-end developer</p>";
    useEffect(() => {
        for (let i = 0; i < 30; i++) {
            homeTitleRef.current.innerHTML += content;
        }
    });
    // ------------------------------

    // name effect on load
    // ------------------------------
    const homeRef = useRef();
    const lineTopRef = useRef();
    const lineBotRef = useRef();
    const scrollMoreRef = useRef();

    useEffect(() => {
        const home = homeRef.current;
        const lineTop = lineTopRef.current;
        const lineBot = lineBotRef.current;
        const scrollMore = scrollMoreRef.current;

        setTimeout(() => {
            home.classList.add("home-enter");
        }, 500);

        setTimeout(() => {
            lineTop.classList.add("line-top-enter");
            lineBot.classList.add("line-bot-enter");
        }, 1500);

        setTimeout(() => {
            scrollMore.classList.add("open");
        }, 2100)
    })
    // ------------------------------
    
    // scroll effects
    // ------------------------------
    const nameRef = useRef();

    useEffect(() => {
        const home = homeRef.current;
        const lineTop = lineTopRef.current;
        const lineBot = lineBotRef.current;
        const name = nameRef.current;
        const scrollMore = scrollMoreRef.current;

        const centerLineTL = gsap.timeline({
            scrollTrigger: {
                trigger: home,
                start: "bottom bottom",
                end: "bottom top",
                scrub: true
            }
        });

        centerLineTL.to(lineTop, { translateY: "-40.1vh" });
        centerLineTL.to(lineBot, { translateY: "40.1vh"}, 0);

        gsap.timeline({
            scrollTrigger: {
                trigger: home,
                start: "5% top",
                end: "bottom -2000%",
                toggleClass: {targets: scrollMore, className: "close"}
            }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: home,
                start: "bottom top",
                end: "bottom -2000%",
                toggleClass: {targets: name, className: "close"}
            }
        });
    })
    // ------------------------------

    return (
        <div ref={homeRef} className="homepage-container-mobile">
            <div className="home-background-mobile">
                <div className="line"></div>
            </div>
            <div className="homepage-content-mobile">
                <div ref={nameRef} className="my-name-mobile">
                    <p>
                        <span>Z</span><span>et</span><span>h</span><span> De</span><span> Lu</span><span>na</span>
                    </p>
                </div>
                <div ref={lineTopRef} className="center-line1"></div>
                <div ref={lineBotRef} className="center-line2"></div>
                <p ref={scrollMoreRef} className="scroll-more-mobile">Scroll down for more</p>
            </div>
            <div className="title-marquee">
                <div className="title-content">
                    <span ref={homeTitleRef} className="homepage-title"></span>
                </div>
            </div>
        </div>
    )
}

export default HomepageMobile;