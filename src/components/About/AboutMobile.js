import React, { useRef, useEffect } from 'react';
import './AboutMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutMobile() {
    // vertical text scroller
    // -------------------------------
    const titleRef = useRef();

    useEffect(() => {
        const content = "<p>about</p>";
        const aboutTitle = titleRef.current;

        for (let i = 0; i < 70; i++) {
            aboutTitle.innerHTML += content;
        }
    })
    // -------------------------------

    // scroll effects
    // -------------------------------
    const aboutContainerRef = useRef();
    const desContainerRef = useRef();
    const desRef = useRef();
    const titleTopRef = useRef();
    const titleBotRef = useRef();

    useEffect(() => {
        const aboutContainer = aboutContainerRef.current;
        const desContainer = desContainerRef.current;
        const description = desRef.current;
        const titleTop = titleTopRef.current;
        const titleBot = titleBotRef.current;

        const targets = [
            desContainer,
            description,
            titleTop,
            titleBot
        ];

        gsap.timeline({
            scrollTrigger: {
                trigger: aboutContainer,
                start: "top top",
                end: "bottom top",
                toggleClass: {targets: targets, className: "open"}
            }
        });
    })
    // -------------------------------

    return (
        <div ref={aboutContainerRef} id="about-container-mobile">
            <div className="about-background-mobile">
                <div className="line"></div>
                <div className="title-marquee">
                    <div className="title-content">
                        <span ref={titleRef} className="title"></span>
                    </div>
                </div>
            </div>
            <div className="about-content-mobile">
                <div ref={titleTopRef} className="title-top-container">
                    <h2 className="title-top">A little about myself</h2>
                </div>

                <div ref={desContainerRef} className="about-description-mobile">
                    <p ref={desRef}>
                        I'm Zeth &mdash; freelance front-end <br/>
                        developer with a background in <br/>
                        physics. I love bringing pleasing UI/UX <br/>
                        designs to life & love everything <br/>
                        about clean, beautiful typography. <br/>
                        With my self-starter mentality & my <br/>
                        keen attention to detail, I'm capable <br/>
                        of turning website designs into <br/>
                        functional & responsive websites.
                    </p>
                </div>

                <div ref={titleBotRef} className="title-bot-container">
                    <h2 className="title-bot">A little about myself</h2>
                </div>
            </div>
        </div>
    )
}

export default AboutMobile;