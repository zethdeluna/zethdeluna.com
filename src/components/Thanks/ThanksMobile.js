import React, { useRef, useEffect } from 'react';
import './ThanksMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ThanksMobile() {
    // vertical text scroller
    // ----------------------------------
    const titleRef = useRef();

    useEffect(() => {
        const content = "<p>Thank you</p>";
        const title = titleRef.current;

        for (let i = 0; i < 70; i++) {
            title.innerHTML += content;
        }
    });
    // ----------------------------------

    // scroll effects
    // ----------------------------------
    const containerRef = useRef();
    const contentRef = useRef();
    const statementRef = useRef();
    const headerRef = useRef();
    const contactLineRef = useRef();
    const lineDownRef = useRef();
    const linksLineRef = useRef();
    const linksRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        const statement = statementRef.current;
        const header = headerRef.current;
        const contactLine = contactLineRef.current;
        const lineDown = lineDownRef.current;
        const linksLine = linksLineRef.current;
        const links = linksRef.current;

        const targets = [
            content,
            statement,
            header,
            contactLine,
            lineDown,
            linksLine,
            links
        ];

        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom -2000%",
                toggleClass: {targets: targets, className: "open"}
            }
        });
    })
    // ----------------------------------

    // copy email on click
    // ----------------------------------
    const emailAlertRef = useRef();

    const copyEmail = () => {
        const email = "zeth.anthony.deluna@gmail.com";

        navigator.clipboard.writeText(email);

        const emailAlert = emailAlertRef.current;
        emailAlert.style.opacity = "1";
        setTimeout(() => {
            emailAlert.style.opacity = "0";
        }, 1000)
    }
    // ----------------------------------

    return (
        <div ref={containerRef} className="thanks-container-mobile">
            <div className="thanks-background-mobile">
                <div className="line"></div>
                <div className="title-marquee">
                    <div className="title-content">
                        <span ref={titleRef} className="title"></span>
                    </div>
                </div>
            </div>

            <div ref={contentRef} className="thanks-content-mobile">
                <p ref={statementRef} className="thanks-statement">Thanks for visiting</p>
                <h2 ref={headerRef} className="contact">Contact</h2>
                <div ref={contactLineRef} className="contact-line-mobile"></div>
                <div ref={lineDownRef} className="line-down"></div>
                <div ref={linksLineRef} className="links-line"></div>
                <div ref={linksRef} className="links-container-mobile">
                    <ul>
                        <li>
                            <span onClick={copyEmail}>Email</span>
                        </li>
                        <li>
                            <a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div ref={emailAlertRef} className="email-copy-alert">
                    <p>You copied my email</p>
                </div>
            </div>
        </div>
    )
}

export default ThanksMobile;