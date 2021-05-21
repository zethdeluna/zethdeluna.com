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
    const scrollMoreRef = useRef();

    useEffect(() => {
        const home = homeRef.current;
        const scrollMore = scrollMoreRef.current;

        setTimeout(() => {
            home.classList.add("home-enter");
        }, 500);

        setTimeout(() => {
            scrollMore.classList.add("open");
        }, 1500)
    })
    // ------------------------------
    
    // scroll effects
    // ------------------------------
    const nameRef = useRef();

    useEffect(() => {
        const home = homeRef.current;
        const name = nameRef.current;
        const scrollMore = scrollMoreRef.current;

        gsap.timeline({
            scrollTrigger: {
                trigger: home,
                start: "center top",
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