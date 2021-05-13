import React, { useRef, useState, useEffect } from 'react';
import './Projects.scss';

import placeholder from '../../images/hero-placeholder.png';
import myWebsite from '../../images/hero-my-website.png';
import bonbon from '../../images/hero-bonbon.png';
import room from '../../images/hero-room.png';
import ipc from '../../images/hero-ipc.png';
import faqCard from '../../images/hero-faq-card.png';
import stopwatch from '../../images/hero-stopwatch.png';
import calculator from '../../images/hero-calculator.png';

import babyZeth from '../../images/baby-zeth.png';
import portfolioHomepage from '../../images/portfolio-homepage.png';
import portfolioVideo1 from '../../images/portfolio-video-1.mov';
import portfolioVideo2 from '../../images/portfolio-video-2.mov';

import bonbonDrink from '../../images/bon-bon-1.png';
import bonbonHomepage from '../../images/bonbon-homepage.png';
import bonbonVideo1 from '../../images/bonbon-video-1.mov';
import bonbonVideo2 from '../../images/bonbon-video-2.mov';

import roomImg1 from '../../images/room-img-1.png';
import roomHomepage from '../../images/room-homepage.png';
import roomVideo1 from '../../images/room-video-1.mov';
import roomVideo2 from '../../images/room-video-2.mov';

import ipcImg1 from '../../images/ipc-img-1.png';
import ipcHomepage from '../../images/ipc-homepage.png';
import ipcVideo1 from '../../images/ipc-video-1.mov';
import ipcVideo2 from '../../images/ipc-video-2.mov';

import faqImg1 from '../../images/faq-img-1.png';
import faqHomepage from '../../images/faq-homepage.png';
import faqVideo1 from '../../images/faq-video-1.mov';
import faqVideo2 from '../../images/faq-video-2.mov';

import stopwatchImg1 from '../../images/stopwatch-img-1.png';
import stopwatchHomepage from '../../images/stopwatch-homepage.png';
import stopwatchVideo1 from '../../images/stopwatch-video-1.mp4';
import stopwatchVideo2 from '../../images/stopwatch-video-2.mov';

import calculatorImg1 from '../../images/calculator-img-1.png';
import calculatorHomepage from '../../images/calculator-homepage.png';
import calculatorVideo1 from '../../images/calculator-video-1.mov';
import calculatorVideo2 from '../../images/calculator-video-2.mov';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Projects() {
    // vertical text scroller
    // ---------------------------
    const titleRef = useRef();

    useEffect(() => {
        const content = "<p>projects</p>";
        const projectsMarqueeText = titleRef.current;

        for (let i = 0; i < 70; i++) {
            projectsMarqueeText.innerHTML += content;
        }
    });
    // ---------------------------

    // project hover 
    // ---------------------------
    const heroBoxImgRef = useRef();
    const proj1BtnRef = useRef();
    const proj2BtnRef = useRef();
    const proj3BtnRef = useRef();
    const proj4BtnRef = useRef();
    const proj5BtnRef = useRef();
    const proj6BtnRef = useRef();
    const proj7BtnRef = useRef();

    const projectTitleRef = useRef();
    const projectDescRef = useRef();
    const codeLinkRef = useRef();
    const siteLinkRef = useRef();

    useEffect(() => {
        const heroBoxImg = heroBoxImgRef.current;
        const proj1 = proj1BtnRef.current;
        const proj2 = proj2BtnRef.current;
        const proj3 = proj3BtnRef.current;
        const proj4 = proj4BtnRef.current;
        const proj5 = proj5BtnRef.current;
        const proj6 = proj6BtnRef.current;
        const proj7 = proj7BtnRef.current;

        const projectTitle = projectTitleRef.current;
        const projectDesc = projectDescRef.current;
        const codeLink = codeLinkRef.current;
        const siteLink = siteLinkRef.current;

        const onProjectHover = (source, altText, title, description, cLink, sLink) => {
            heroBoxImg.src = source;
            heroBoxImg.alt = altText;
            projectTitle.innerHTML = title;
            projectDesc.innerHTML = description;
            [codeLink, siteLink].forEach((link) => {
                link.style.opacity = "1";
            });
            codeLink.href = cLink;
            siteLink.href = sLink;
        }

        const proj1Hover = () => {
            onProjectHover(
                myWebsite,
                "My Website Preview",
                "Zeth <br/> De Luna",
                "A clean, custom portfolio website that reflects my approach to design and web development.",
                "/",
                "/"
            );
        };
        const proj2Hover = () => {
            onProjectHover(
                bonbon,
                "Bon Bon Tea House Preview",
                "Bon Bon <br/> Tea House",
                "My take on a responsive, mobile-friendly website for a local small business.",
                "https://github.com/zethdeluna/bbth",
                "https://zethdeluna.github.io/bbth/"
            );
        };
        const proj3Hover = () => {
            onProjectHover(
                room,
                "Room Preview",
                "Room",
                "A simple interactive homepage template made alive with React Hooks.",
                "https://github.com/zethdeluna/room-homepage",
                "https://zethdeluna.github.io/room-homepage/"
            );
        };
        const proj4Hover = () => {
            onProjectHover(
                ipc,
                "Interactive Pricing Component Preview",
                "Interactive <br/> Pricing <br/> Component",
                "A scalable interactive slider that can be dropped into any React-based website.",
                "https://github.com/zethdeluna/interactive-pricing-component",
                "https://zethdeluna.github.io/interactive-pricing-component/"
            );
        };
        const proj5Hover = () => {
            onProjectHover(
                faqCard,
                "FAQ Card Preview",
                "FAQ <br/> Accordion <br/> Card",
                "An implementation of the accordion-style layout for a generic FAQ page.",
                "https://github.com/zethdeluna/faq-accordion-card",
                "https://zethdeluna.github.io/faq-accordion-card/"
            );
        };
        const proj6Hover = () => {
            onProjectHover(
                stopwatch,
                "Stopwatch Preview",
                "Stopwatch",
                "A JavaScript stopwatch with keyboard \"start / stop / reset\" functionality.",
                "https://github.com/zethdeluna/stopwatch",
                "https://zethdeluna.github.io/stopwatch/"
            );
        };
        const proj7Hover = () => {
            onProjectHover(
                calculator,
                "Calculator Preview",
                "Calculator",
                "A basic JavaScript calculator.",
                "https://github.com/zethdeluna/calculator-app",
                "https://zethdeluna.github.io/calculator-app/"
            );
        };

        proj1.addEventListener("mouseenter", proj1Hover);
        proj2.addEventListener("mouseenter", proj2Hover);
        proj3.addEventListener("mouseenter", proj3Hover);
        proj4.addEventListener("mouseenter", proj4Hover);
        proj5.addEventListener("mouseenter", proj5Hover);
        proj6.addEventListener("mouseenter", proj6Hover);
        proj7.addEventListener("mouseenter", proj7Hover);

        return () => {
            proj1.removeEventListener("mouseenter", proj1Hover);
            proj2.removeEventListener("mouseenter", proj2Hover);
            proj3.removeEventListener("mouseenter", proj3Hover);
            proj4.removeEventListener("mouseenter", proj4Hover);
            proj5.removeEventListener("mouseenter", proj5Hover);
            proj6.removeEventListener("mouseenter", proj6Hover);
            proj7.removeEventListener("mouseenter", proj7Hover);
        }
    })
    // ---------------------------

    // project click & scroll effects
    // ---------------------------
    const proj1Ref = useRef();
    const proj2Ref = useRef();
    const proj3Ref = useRef();
    const proj4Ref = useRef();
    const proj5Ref = useRef();
    const proj6Ref = useRef();
    const proj7Ref = useRef();

    const proj1BoxRef = useRef();
    const proj2BoxRef = useRef();
    const proj3BoxRef = useRef();
    const proj4BoxRef = useRef();
    const proj5BoxRef = useRef();
    const proj6BoxRef = useRef();
    const proj7BoxRef = useRef();

    const [projIsOpen, setProjIsOpen] = useState(null);
    const proj1Open = () => {
        setProjIsOpen("open-1");
    };
    const proj2Open = () => {
        setProjIsOpen("open-2");
    };
    const proj3Open = () => {
        setProjIsOpen("open-3");
    };
    const proj4Open = () => {
        setProjIsOpen("open-4");
    };
    const proj5Open = () => {
        setProjIsOpen("open-5");
    };
    const proj6Open = () => {
        setProjIsOpen("open-6");
    };
    const proj7Open = () => {
        setProjIsOpen("open-7");
    };
    const projClose = () => {
        setProjIsOpen("close-all");
    };

    const projectOpener = (project, projectBox) => {
        document.body.style.overflow = "hidden";

        project.style.top = "0";
        project.style.visibility = "visible";
        project.style.opacity = "1";

        const title = project.querySelector(".box-title");
        const titleLines = project.querySelectorAll(".title-line");
        const date = project.querySelector(".date");
        const description = project.querySelector(".box-description");
        const image1 = project.querySelector(".box-img");
        // const oneLiner = project.querySelector(".one-liner");

        setTimeout(() => {
            projectBox.style.width = "720px";
        }, 400);

        setTimeout(() => {
            titleLines.forEach((line) => {
                line.classList.add("open");
            })
        }, 800);

        setTimeout(() => {
            title.classList.add("open");
            date.classList.add("open");
            description.classList.add("open");
            image1.classList.add("open");
        }, 1600);
    };

    const projectScrollEffects = (projectBox) => {
        const oneLiner = projectBox.querySelector(".one-liner");
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: oneLiner,
                start: "top bottom",
                end: "bottom -2000%",
                toggleClass: {targets: oneLiner, className: "open"}
            }
        });

        const introHeader = projectBox.querySelector(".intro-header");
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: introHeader,
                start: "top bottom",
                end: "bottom -2000%",
                toggleClass: {targets: introHeader, className: "open"}
            }
        })

        const introContent = projectBox.querySelector(".intro-content");
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: introContent,
                start: "top bottom",
                end: "bottom -2000%",
                toggleClass: {targets: introContent, className: "open"}
            }
        });

        const challengesHeader = projectBox.querySelector(".challenges-header");
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: challengesHeader,
                start: "top bottom",
                end: "bottom -2000%",
                toggleClass: {targets: challengesHeader, className: "open"}
            }
        });

        const challengesContent = projectBox.querySelector(".challenges-content");
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: challengesContent,
                start: "top bottom",
                end: "bottom -2000%",
                toggleClass: {targets: challengesContent, className: "open"}
            }
        });

        const technology = projectBox.querySelector(".technology");
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: technology,
                start: "top bottom",
                end: "bottom -2000%",
                toggleClass: {targets: technology, className: "open"}
            }
        });

        const footer = projectBox.querySelector(".box-footer");
        const footerLines = projectBox.querySelectorAll(".footer-line");
        const footerContent = projectBox.querySelector(".footer-content");
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: footer,
                start: "center bottom",
                end: "bottom -2000%",
                toggleClass: {targets: [footerLines, footerContent], className: "open"}
            }
        });

        const boxVideos = projectBox.querySelectorAll(".box-video");
        const video1 = boxVideos[0];
        const video2 = boxVideos[1];
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: video1,
                start: "-1% bottom",
                end: "bottom -2000%",
                onToggle: self => self.isActive ? video1.play() : video1.pause()
            }
        });
        gsap.timeline({
            scrollTrigger: {
                scroller: projectBox,
                trigger: video2,
                start: "-1% bottom",
                end: "bottom -2000%",
                onToggle: self => self.isActive ? video2.play() : video2.pause()
            }
        })
    };

    useEffect(() => {
        const proj1 = proj1Ref.current;
        const proj2 = proj2Ref.current;
        const proj3 = proj3Ref.current;
        const proj4 = proj4Ref.current;
        const proj5 = proj5Ref.current;
        const proj6 = proj6Ref.current;
        const proj7 = proj7Ref.current;

        const proj1Box = proj1BoxRef.current;
        const proj2Box = proj2BoxRef.current;
        const proj3Box = proj3BoxRef.current;
        const proj4Box = proj4BoxRef.current;
        const proj5Box = proj5BoxRef.current;
        const proj6Box = proj6BoxRef.current;
        const proj7Box = proj7BoxRef.current;

        const projectList = [proj1, proj2, proj3, proj4, proj5, proj6, proj7];
        const projectBoxList = [proj1Box, proj2Box, proj3Box, proj4Box, proj5Box, proj6Box, proj7Box];


        if (projIsOpen === "open-1") {
            projectOpener(proj1, proj1Box);
            setTimeout(() => {
                projectScrollEffects(proj1Box);
            }, 1600)
        } else if (projIsOpen === "open-2") {
            projectOpener(proj2, proj2Box);
            setTimeout(() => {
                projectScrollEffects(proj2Box);
            }, 1600)
        } else if (projIsOpen === "open-3") {
            projectOpener(proj3, proj3Box);
            setTimeout(() => {
                projectScrollEffects(proj3Box);
            }, 1600)
        } else if (projIsOpen === "open-4") {
            projectOpener(proj4, proj4Box);
            setTimeout(() => {
                projectScrollEffects(proj4Box);
            }, 1600)
        } else if (projIsOpen === "open-5") {
            projectOpener(proj5, proj5Box);
            setTimeout(() => {
                projectScrollEffects(proj5Box);
            }, 1600)
        } else if (projIsOpen === "open-6") {
            projectOpener(proj6, proj6Box);
            setTimeout(() => {
                projectScrollEffects(proj6Box);
            }, 1600)
        } else if (projIsOpen === "open-7") {
            projectOpener(proj7, proj7Box);
            setTimeout(() => {
                projectScrollEffects(proj7Box);
            }, 1600)
        } else if (projIsOpen === "close-all") {
            document.body.style.overflow = "visible";

            setTimeout(() => {
                projectList.forEach((project) => {
                    project.style.top = "-100vh";
                    project.style.visibility = "hidden";
                });
            }, 800);

            projectList.forEach((project) => {
                const title = project.querySelector(".box-title");
                const titleLines = project.querySelectorAll(".title-line");
                const date = project.querySelector(".date");
                const description = project.querySelector(".box-description");
                const image1 = project.querySelector(".box-img");

                setTimeout(() => {
                    project.style.opacity = "0";
                    title.classList.remove("open");
                    titleLines.forEach((line) => {
                        line.classList.remove("open");
                    });
                    date.classList.remove("open");
                    description.classList.remove("open");
                    image1.classList.remove("open");
                }, 400);
            });

            projectBoxList.forEach((box) => {
                box.style.width = "0";
            });
        }
    });
    // ---------------------------

    // scroll effects
    // ---------------------------
    const containerRef = useRef();
    const contentRef = useRef();
    const titleTopRef = useRef();
    const titleBotRef = useRef();
    
    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        const titleTop = titleTopRef.current;
        const titleBot = titleBotRef.current;

        const targets = [
            content,
            titleTop,
            titleBot
        ];

        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom top",
                scrub: true,
                toggleClass: {targets: targets, className: "open"},
                // markers: true
            }
        });
    })
    // ---------------------------

    return (
        <>
        <div ref={containerRef} id="projects-container">
            <div className="projects-background">
                <div className="line"></div>
                <div className="title-marquee">
                    <div className="title-content">
                        <span ref={titleRef} className="title"></span>
                    </div>
                </div>
            </div>

            <div ref={contentRef} className="projects-content">
                <h2 ref={titleTopRef} className="title-top">"work"</h2>
                <h2 ref={titleBotRef} className="title-bottom">"work"</h2>

                <p className="click-note">Click project for more</p>
                <div className="projects-scroller">
                    <div className="btn-container">
                        <button ref={proj1BtnRef} onClick={proj1Open} className="project-btn">Proj 01</button>
                        <button ref={proj2BtnRef} onClick={proj2Open} className="project-btn">Proj 02</button>
                        <button ref={proj3BtnRef} onClick={proj3Open} className="project-btn">Proj 03</button>
                        <button ref={proj4BtnRef} onClick={proj4Open} className="project-btn">Proj 04</button>
                        <button ref={proj5BtnRef} onClick={proj5Open} className="project-btn">Proj 05</button>
                        <button ref={proj6BtnRef} onClick={proj6Open} className="project-btn">Proj 06</button>
                        <button ref={proj7BtnRef} onClick={proj7Open} className="project-btn">Proj 07</button>
                    </div>
                </div>
                <p className="scroll-note">Scroll for more</p>

                <div className="hero-box">
                    <img ref={heroBoxImgRef} src={placeholder} alt="hero-placeholder"/>
                </div>

                <div className="project-description">
                    <p ref={projectTitleRef} className="project-title"></p>
                    <p ref={projectDescRef} className="description"></p>
                    <div className="project-links">
                        <a ref={codeLinkRef} href="/" target="_blank" rel="noreferrer">Code</a>
                        <a ref={siteLinkRef} href="/" target="_blank" rel="noreferrer">Site</a>
                    </div>
                </div>
            </div>
        </div>

        <div ref={proj1Ref} id="project-1" className="project-container">
            <div onClick={projClose} className="project-background"></div>
            <div ref={proj1BoxRef} className="project-box">
                <div className="date">
                    <p className="year">2021</p>
                </div>
                <div className="title-line"></div>
                <div className="box-title">Zeth <br/> De Luna</div>
                <div className="title-line"></div>
                <p className="box-description">A clean, custom portfolio website that reflects my approach to design and web development.</p>
                <div className="title-line"></div>
                <img src={babyZeth} alt="Baby Zeth" loading="lazy" className="box-img"/>
                <div className="one-liner">
                    <p>It's all <br/> about me.</p>
                    <a href="/" target="_blank" rel="noreferrer">see live</a>
                </div>
                <div className="intro">
                    <h3 className="intro-header">Introduction</h3>
                    <p className="intro-content">New skills, new portfolio! Being in the field of web development means learning new things &mdash; all the time. As I continue to discover new tools and tricks, I think about how I can use them to make my websites more fluid and interactive. With rigorous research on UI/UX design (I'm no web designer, but I try), I defined and refined animations to create a user experience that best reflects my style.</p>
                </div>
                <div className="box-img-2-container">
                    <img src={portfolioHomepage} alt="portfolio homepage" loading="lazy" className="box-img-2"/>
                </div>
                <div className="challenges">
                    <h3 className="challenges-header">Challenges</h3>
                    <p className="challenges-content">Although I know how to appreciate good design, designing for myself lead to at least 40 drafts on the chopping block until I was able to come to the final design. I wanted my website to have smooth, satisfying transitions &mdash; specifically when opening the menu or a project, where they would fade in and be revealed behind some "sliding doors". Setting up the carefully timed transitions for each element was a great opportunity for me to solidify my understanding of JavaScript and React Hooks.</p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={portfolioVideo1}/>
                    </video>
                </div>
                <div className="technology">
                    <h3 className="technology-header">Technology & <br/> Design</h3>
                    <p className="technology-content">
                        React JS / React Hooks / GSAP / SASS <br/><br/> Figma
                    </p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={portfolioVideo2}/>
                    </video>
                </div>
                <div className="box-footer">
                    <div className="footer-line"></div>
                    <p className="footer-content">
                        Thanks for reading! <br/>
                        Click on the green areas outside this page to exit this project. <br/><br/>
                        Or check out the <a href="https://github.com/zethdeluna/bbth" target="_blank" rel="noreferrer">code</a> / <a href="https://zethdeluna.github.io/bbth/" target="_blank" rel="noreferrer">site</a>.
                    </p>
                    <div className="footer-line"></div>
                </div>
            </div>
        </div>

        <div ref={proj2Ref} id="project-2" className="project-container">
            <div onClick={projClose} className="project-background"></div>
            <div ref={proj2BoxRef} className="project-box">
                <div className="date">
                    <p className="year">2021</p>
                </div>
                <div className="title-line"></div>
                <div className="box-title">Bon Bon <br/> Tea House</div>
                <div className="title-line"></div>
                <p className="box-description">My take on a responsive, mobile-friendly website for a local small business.</p>
                <div className="title-line"></div>
                <img src={bonbonDrink} alt="Bon Bon Product" loading="lazy" className="box-img"/>
                <div className="one-liner">
                    <p>Boba. That's it.</p>
                    <a href="https://zethdeluna.github.io/bbth/" target="_blank" rel="noreferrer">see live</a>
                </div>
                <div className="intro">
                    <h3 className="intro-header">Introduction</h3>
                    <p className="intro-content">With the increasing popularity of this San Fernando Valley boba shop, Bon Bon Tea House is in need of a website to create a more accessible and streamlined connection with their customers. While this is a mockup, here's my first take at a single-page website where customers can find their menu, locations, instagram, etc.</p>
                </div>
                <div className="box-img-2-container">
                    <img src={bonbonHomepage} alt="Bon Bon Tea House homepage" loading="lazy" className="box-img-2"/>
                </div>
                <div className="challenges">
                    <h3 className="challenges-header">Challenges</h3>
                    <p className="challenges-content">This was one of my first projects after learning the basics of HTML, CSS and JavaScript. Since this project had more pieces than I was used to, it was a perfect excuse to practice building a React component-based website.</p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={bonbonVideo1}/>
                    </video>
                </div>
                <div className="technology">
                    <h3 className="technology-header">Technology</h3>
                    <p className="technology-content">
                        React JS / SASS
                    </p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={bonbonVideo2}/>
                    </video>
                </div>
                <div className="box-footer">
                    <div className="footer-line"></div>
                    <p className="footer-content">
                        Thanks for reading! <br/>
                        Click on the green areas outside this page to exit this project. <br/><br/>
                        Or check out the <a href="https://github.com/zethdeluna/bbth" target="_blank" rel="noreferrer">code</a> / <a href="https://zethdeluna.github.io/bbth/" target="_blank" rel="noreferrer">site</a>.
                    </p>
                    <div className="footer-line"></div>
                </div>
            </div>
        </div>

        <div ref={proj3Ref} id="project-3" className="project-container">
            <div onClick={projClose} className="project-background"></div>
            <div ref={proj3BoxRef} className="project-box">
                <div className="date">
                    <p className="year">2021</p>
                </div>
                <div className="title-line"></div>
                <div className="box-title">
                    Room
                </div>
                <div className="title-line"></div>
                <p className="box-description">A simple interactive homepage template made alive with React Hooks.</p>
                <div className="title-line"></div>
                <img src={roomImg1} alt="a room" loading="lazy" className="box-img"/>
                <div className="one-liner">
                    <p>Modern, elegant furniture.</p>
                    <a href="https://zethdeluna.github.io/room-homepage/" target="_blank" rel="noreferrer">see live</a>
                </div>
                <div className="intro">
                    <h3 className="intro-header">Introduction</h3>
                    <p className="intro-content">
                        This is a practice project from <a href="https://www.frontendmentor.io/profile/zethdeluna" target="_blank" rel="noreferrer">FrontEndMentor.io</a>, a site that offers hundreds of mock website projects for front-end developers to enhance their coding skills. The goal of this project was to build a responsive homepage for a mock furniture store with a slider that displays promotional information about the company. Users should be able to navigate through the slider using the arrow buttons on the site or keyboard arrows.
                    </p>
                </div>
                <div className="box-img-2-container">
                    <img src={roomHomepage} alt="room homepage" loading="lazy" className="box-img-2"/>
                </div>
                <div className="challenges">
                    <h3 className="challenges-header">Challenges</h3>
                    <p className="challenges-content">This was my first time building an interactive slider, so it was a great opportunity for me to improve my JavaScript. The concept behind my approach was simple: update the state of the slider depending on which button was clicked (next or previous) and display the appropriate content corresponding to the current slider page. In terms of layout, the challenge was getting the different sections and images to look good while being responsive. I used CSS Flexbox, but looking back now I realize that using CSS Grid would have been so much easier.</p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={roomVideo1}/>
                    </video>
                </div>
                <div className="technology">
                    <h3 className="technology-header">Technology</h3>
                    <p className="technology-content">
                        React JS / React Hooks / SASS / Flexbox
                    </p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={roomVideo2}/>
                    </video>
                </div>
                <div className="box-footer">
                    <div className="footer-line"></div>
                    <p className="footer-content">
                        Thanks for reading! <br/>
                        Click on the green areas outside this page to exit this project. <br/><br/>
                        Or check out the <a href="https://github.com/zethdeluna/room-homepage" target="_blank" rel="noreferrer">code</a> / <a href="https://zethdeluna.github.io/room-homepage/" target="_blank" rel="noreferrer">site</a>.
                    </p>
                    <div className="footer-line"></div>
                </div>
            </div>
        </div>

        <div ref={proj4Ref} id="project-4" className="project-container">
            <div onClick={projClose} className="project-background"></div>
            <div ref={proj4BoxRef} className="project-box">
                <div className="date">
                    <p className="year">2021</p>
                </div>
                <div className="title-line"></div>
                <div className="box-title">Interactive <br/> Pricing Component</div>
                <div className="title-line"></div>
                <p className="box-description">A scalable interactive slider that can be dropped into any React-based website.</p>
                <div className="title-line"></div>
                <img src={ipcImg1} alt="ipc opener" loading="lazy" className="box-img"/>
                <div className="one-liner">
                    <p>Viewing prices made simple.</p>
                    <a href="https://zethdeluna.github.io/interactive-pricing-component/" target="_blank" rel="noreferrer">see live</a>
                </div>
                <div className="intro">
                    <h3 className="intro-header">Introduction</h3>
                    <p className="intro-content">This is a practice project from <a href="https://www.frontendmentor.io/profile/zethdeluna" target="_blank" rel="noreferrer">FrontEndMentor.io</a>, a site that offers hundreds of mock website projects for front-end developers to enhance their coding skills. The goal of this project was to build a responsive slider component that allows "customers" to easily see different prices for different product offerings.</p>
                </div>
                <div className="box-img-2-container">
                    <img src={ipcHomepage} alt="ipc homepage" loading="lazy" className="box-img-2"/>
                </div>
                <div className="challenges">
                    <h3 className="challenges-header">Challenges</h3>
                    <p className="challenges-content">The "driving force" behind the pricing component is the user's ability to change the component's state using the slider and toggle button, however you'd be surprised at what took most of my time and effort: the slider's progress color. Firefox and IE have a built-in CSS attribute that allows the site to show the slider thumb's progress along the rail. It wasn't so simple with webkit browsers (Safari, Chrome, Opera). Those don't have a built-in slider progress option, so I had to manually fill in the space behind the slider thumb using JavaScript.</p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={ipcVideo1}/>
                    </video>
                </div>
                <div className="technology">
                    <h3 className="technology-header">Technology</h3>
                    <p className="technology-content">
                        React JS / React Hooks / SASS
                    </p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={ipcVideo2}/>
                    </video>
                </div>
                <div className="box-footer">
                    <div className="footer-line"></div>
                    <p className="footer-content">
                        Thanks for reading! <br/>
                        Click on the green areas outside this page to exit this project. <br/><br/>
                        Or check out the <a href="https://github.com/zethdeluna/interactive-pricing-component" target="_blank" rel="noreferrer">code</a> / <a href="https://zethdeluna.github.io/interactive-pricing-component/" target="_blank" rel="noreferrer">site</a>.
                    </p>
                    <div className="footer-line"></div>
                </div>
            </div>
        </div>

        <div ref={proj5Ref} id="project-5" className="project-container">
            <div onClick={projClose} className="project-background"></div>
            <div ref={proj5BoxRef} className="project-box">
                <div className="date">
                    <p className="year">2021</p>
                </div>
                <div className="title-line"></div>
                <div className="box-title">FAQ <br/> Accordion Card</div>
                <div className="title-line"></div>
                <p className="box-description">An implementation of the accordion-style layout for a generic FAQ page.</p>
                <div className="title-line"></div>
                <img src={faqImg1} alt="faq opener" loading="lazy" className="box-img"/>
                <div className="one-liner">
                    <p>Any questions?</p>
                    <a href="https://zethdeluna.github.io/faq-accordion-card/" target="_blank" rel="noreferrer">see live</a>
                </div>
                <div className="intro">
                    <h3 className="intro-header">Introduction</h3>
                    <p className="intro-content">This is a practice project from <a href="https://www.frontendmentor.io/profile/zethdeluna" target="_blank" rel="noreferrer">FrontEndMentor.io</a>, a site that offers hundreds of mock website projects for front-end developers to enhance their coding skills. The goal of this project was to build a responsive FAQ component that uses an interactive accordion layout to display questions and answers.</p>
                </div>
                <div className="box-img-2-container">
                    <img src={faqHomepage} alt="faq homepage" loading="lazy" className="box-img-2"/>
                </div>
                <div className="challenges">
                    <h3 className="challenges-header">Challenges</h3>
                    <p className="challenges-content">Being fairly new to front-end development at the time I completed this project, I was still a novice at JavaScript. This project was a good intro for me on how to manipulate HTML elements using Vanilla JavaScript.</p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={faqVideo1}/>
                    </video>
                </div>
                <div className="technology">
                    <h3 className="technology-header">Technology</h3>
                    <p className="technology-content">
                        HTML / SASS / JavaScript
                    </p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={faqVideo2}/>
                    </video>
                </div>
                <div className="box-footer">
                    <div className="footer-line"></div>
                    <p className="footer-content">
                        Thanks for reading! <br/>
                        Click on the green areas outside this page to exit this project. <br/><br/>
                        Or check out the <a href="https://github.com/zethdeluna/faq-accordion-card" target="_blank" rel="noreferrer">code</a> / <a href="https://zethdeluna.github.io/faq-accordion-card/" target="_blank" rel="noreferrer">site</a>.
                    </p>
                    <div className="footer-line"></div>
                </div>
            </div>
        </div>

        <div ref={proj6Ref} id="project-6" className="project-container">
            <div onClick={projClose} className="project-background"></div>
            <div ref={proj6BoxRef} className="project-box">
                <div className="date">
                    <p className="year">2021</p>
                </div>
                <div className="title-line"></div>
                <div className="box-title">Stopwatch</div>
                <div className="title-line"></div>
                <p className="box-description">A JavaScript stopwatch with keyboard "start / stop / reset" functionality.</p>
                <div className="title-line"></div>
                <img src={stopwatchImg1} alt="numbers" loading="lazy" className="box-img"/>
                <div className="one-liner">
                    <p>Timeless.</p>
                    <a href="https://zethdeluna.github.io/stopwatch/" target="_blank" rel="noreferrer">see live</a>
                </div>
                <div className="intro">
                    <h3 className="intro-header">Introduction</h3>
                    <p className="intro-content">After covering the basics of HTML, CSS, and JavaScript, I wanted to see if I could actually build something. A stopwatch seemed simple enough &mdash; after all, you only need 3 buttons and a counter.</p>
                </div>
                <div className="box-img-2-container">
                    <img src={stopwatchHomepage} alt="stopwatch homepage" loading="lazy" className="box-img-2"/>
                </div>
                <div className="challenges">
                    <h3 className="challenges-header">Challenges</h3>
                    <p className="challenges-content">Although I know how to appreciate good design, designing for myself lead to at least 40 drafts on the chopping block until I was able to come to the final design. I wanted my website to have smooth, satisfying transitions &mdash; specifically when opening the menu or a project, where they would fade in and be revealed behind some "sliding doors". Setting up the carefully timed transitions for each element was a great opportunity for me to solidify my understanding of JavaScript and React Hooks.</p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={stopwatchVideo1}/>
                    </video>
                </div>
                <div className="technology">
                    <h3 className="technology-header">Technology</h3>
                    <p className="technology-content">
                        React JS / React Hooks / GSAP
                    </p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={stopwatchVideo2}/>
                    </video>
                </div>
                <div className="box-footer">
                    <div className="footer-line"></div>
                    <p className="footer-content">
                        Thanks for reading! <br/>
                        Click on the green areas outside this page to exit this project. <br/><br/>
                        Or check out the <a href="https://github.com/zethdeluna/stopwatch" target="_blank" rel="noreferrer">code</a> / <a href="https://zethdeluna.github.io/stopwatch/" target="_blank" rel="noreferrer">site</a>.
                    </p>
                    <div className="footer-line"></div>
                </div>
            </div>
        </div>

        <div ref={proj7Ref} id="project-7" className="project-container">
            <div onClick={projClose} className="project-background"></div>
            <div ref={proj7BoxRef} className="project-box">
                <div className="date">
                    <p className="year">2021</p>
                </div>
                <div className="title-line"></div>
                <div className="box-title">Calculator</div>
                <div className="title-line"></div>
                <p className="box-description">A basic JavaScript Calculator.</p>
                <div className="title-line"></div>
                <img src={calculatorImg1} alt="math symbols" loading="lazy" className="box-img"/>
                <div className="one-liner">
                    <p>Do the math.</p>
                    <a href="https://zethdeluna.github.io/calculator-app/" target="_blank" rel="noreferrer">see live</a>
                </div>
                <div className="intro">
                    <h3 className="intro-header">Introduction</h3>
                    <p className="intro-content">Building a JavaScript calculator is like a web developer's "first test" at real-world developing. If successful, it would help solidify a developer's understanding of coding logic and functional programming. In this project, I built a standard calculator that performs addition, subtraction, multiplication, and division.</p>
                </div>
                <div className="box-img-2-container">
                    <img src={calculatorHomepage} alt="calculator homepage" className="box-img-2"/>
                </div>
                <div className="challenges">
                    <h3 className="challenges-header">Challenges</h3>
                    <p className="challenges-content">I never realized how many logical steps it took to run a simple calculator. Sometimes, we just take things for granted. Since the math itself was so simple, it was good chance for me to focus on the logical coding itself.</p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={calculatorVideo1}/>
                    </video>
                </div>
                <div className="technology">
                    <h3 className="technology-header">Technology</h3>
                    <p className="technology-content">
                        React JS / React Hooks / GSAP
                    </p>
                </div>
                <div className="box-video-container">
                    <video preload="none" muted loop className="box-video">
                        <source src={calculatorVideo2}/>
                    </video>
                </div>
                <div className="box-footer">
                    <div className="footer-line"></div>
                    <p className="footer-content">
                        Thanks for reading! <br/>
                        Click on the green areas outside this page to exit this project. <br/><br/>
                        Or check out the <a href="https://github.com/zethdeluna/calculator-app" target="_blank" rel="noreferrer">code</a> / <a href="https://zethdeluna.github.io/calculator-app/" target="_blank" rel="noreferrer">site</a>.
                    </p>
                    <div className="footer-line"></div>
                </div>
            </div>
        </div>

        
        </>
    )
}

export default Projects;