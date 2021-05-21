import React, { useRef, useEffect } from 'react';
import './ProjectsMobile.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import placeholder from '../../images/hero-placeholder.png';
import myWebsite from '../../images/hero-my-website.png';
import bonbon from '../../images/hero-bonbon.png';
import room from '../../images/hero-room.png';
import ipc from '../../images/hero-ipc.png';
import faqCard from '../../images/hero-faq-card.png';
import stopwatch from '../../images/hero-stopwatch.png';
import calculator from '../../images/hero-calculator.png';

gsap.registerPlugin(ScrollTrigger);

function ProjectsMobile() {
    // vertical title scroller
    // --------------------------------
    const titleRef = useRef();

    useEffect(() => {
        const content = "<p>projects</p>";
        const title = titleRef.current;

        for (let i = 0; i < 70; i++) {
            title.innerHTML += content;
        }
    });
    // --------------------------------

    // scroll effects
    // --------------------------------
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
                toggleClass: {targets: targets, className: "open"}
            }
        })
    })
    // --------------------------------

    // project selection
    // --------------------------------
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
    const readMoreRef = useRef();

    const ProjectSelect = (image, altText, title, description, code, site, moreClick) => {
        const heroBoxImg = heroBoxImgRef.current;
        const projectTitle = projectTitleRef.current;
        const projectDesc = projectDescRef.current;
        const codeLink = codeLinkRef.current;
        const siteLink = siteLinkRef.current;
        const readMore = readMoreRef.current;

        heroBoxImg.src = image;
        heroBoxImg.alt = altText;
        projectTitle.innerHTML = title;
        projectDesc.innerHTML = description;
        codeLink.href = code;
        siteLink.href = site;
        readMore.onclick = moreClick;
    };

    const proj1Select = () => {
        ProjectSelect(
            myWebsite,
            "My Portfolio Preview",
            "Zeth De Luna",
            "A clean, custom portfolio website that reflects my approach to design and web development.",
            "https://github.com/zethdeluna/zethdeluna.com",
            "/",
            proj1More
        );
    };
    const proj2Select = () => {
        ProjectSelect(
            bonbon, "Bon Bon Tea House Preview",
            "Bon Bon Tea House",
            "My take on a responsive, mobile-friendly website for a local small business.",
            "https://github.com/zethdeluna/bbth",
            "https://zethdeluna.github.io/bbth/",
            proj2More
        );
    };
    const proj3Select = () => {
        ProjectSelect(
            room,
            "Room Preview",
            "Room",
            "A simple interactive homepage template made alive with React Hooks.",
            "https://github.com/zethdeluna/room-homepage",
            "https://zethdeluna.github.io/room-homepage/",
            proj3More
        );
    };
    const proj4Select = () => {
        ProjectSelect(
            ipc,
            "Interactive Pricing Component Preview",
            "Interactive Pricing Component",
            "A scalable interactive slider that can be dropped into any React-based website.",
            "https://github.com/zethdeluna/interactive-pricing-component",
            "https://zethdeluna.github.io/interactive-pricing-component/",
            proj4More
        );
    };
    const proj5Select = () => {
        ProjectSelect(
            faqCard,
            "FAQ Card Preview",
            "FAQ Accordion Card",
            "An implementation of the accordion-style layout for a generic FAQ page.",
            "https://github.com/zethdeluna/faq-accordion-card",
            "https://zethdeluna.github.io/faq-accordion-card/",
            proj5More
        );
    };
    const proj6Select = () => {
        ProjectSelect(
            stopwatch,
            "Stopwatch Preview",
            "Stopwatch",
            "A JavaScript stopwatch with keyboard \"start / stop / reset\" functionality.",
            "https://github.com/zethdeluna/stopwatch",
            "https://zethdeluna.github.io/stopwatch/",
            proj6More
        );
    };
    const proj7Select = () => {
        ProjectSelect(
            calculator,
            "Calculator Preview",
            "Calculator",
            "A basic JavaScript calculator.",
            "https://github.com/zethdeluna/calculator-app",
            "https://zethdeluna.github.io/calculator-app/",
            proj7More
        );
    };
    // --------------------------------

    // read more click
    // --------------------------------
    const projectOpener = (project, projectBox) => {
        document.body.style.overflow = "hidden";

        project.style.top = "0";
        project.style.visibility = "visible";
        project.style.opacity = "1";

        const title = project.querySelector(".project-title");
        const lines = project.querySelectorAll(".project-line");
        const date = project.querySelector(".date");
        const description = project.querySelector(".project-description");
        const intro = project.querySelector(".intro-mobile");
        const challenges = project.querySelector(".challenges-mobile");
        const tech = project.querySelector(".technology-mobile");
        const thanks = project.querySelector(".thanks-for-reading");
        const closeBtn = project.querySelector(".close-btn");

        setTimeout(() => {
            projectBox.style.height = "100vh";
        }, 400);

        setTimeout(() => {
            lines.forEach((line) => {
                line.classList.add("open");
            })
        }, 1000);

        setTimeout(() => {
            title.classList.add("open");
            date.classList.add("open");
            description.classList.add("open");
            closeBtn.classList.add("open");
        }, 1400);

        setTimeout(() => {
            intro.classList.add("open");
        }, 1400);
        setTimeout(() => {
            challenges.classList.add("open");
        }, 1450);
        setTimeout(() => {
            tech.classList.add("open");
        }, 1500);
        setTimeout(() => {
            thanks.classList.add("open");
        }, 1550);
    }

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

    const proj1More = () => {
        const proj1 = proj1Ref.current;
        const proj1Box = proj1BoxRef.current;
        projectOpener(proj1, proj1Box);
    };
    const proj2More = () => {
        const proj2 = proj2Ref.current;
        const proj2Box = proj2BoxRef.current;
        projectOpener(proj2, proj2Box);
    };
    const proj3More = () => {
        const proj3 = proj3Ref.current;
        const proj3Box = proj3BoxRef.current;
        projectOpener(proj3, proj3Box);
    };
    const proj4More = () => {
        const proj4 = proj4Ref.current;
        const proj4Box = proj4BoxRef.current;
        projectOpener(proj4, proj4Box);
    };
    const proj5More = () => {
        const proj5 = proj5Ref.current;
        const proj5Box = proj5BoxRef.current;
        projectOpener(proj5, proj5Box);
    };
    const proj6More = () => {
        const proj6 = proj6Ref.current;
        const proj6Box = proj6BoxRef.current;
        projectOpener(proj6, proj6Box);
    };
    const proj7More = () => {
        const proj7 = proj7Ref.current;
        const proj7Box = proj7BoxRef.current;
        projectOpener(proj7, proj7Box);
    };

    const projectCloser = () => {
        document.body.style.overflow = "visible";
        
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

        const projList = [proj1, proj2, proj3, proj4, proj5, proj6, proj7];
        const projBoxList = [proj1Box, proj2Box, proj3Box, proj4Box, proj5Box, proj6Box, proj7Box];

        projList.forEach((project) => {
            const title = project.querySelector(".project-title");
            const lines = project.querySelectorAll(".project-line");
            const date = project.querySelector(".date");
            const description = project.querySelector(".project-description");
            const intro = project.querySelector(".intro-mobile");
            const challenges = project.querySelector(".challenges-mobile");
            const tech = project.querySelector(".technology-mobile");
            const thanks = project.querySelector(".thanks-for-reading");
            const closeBtn = project.querySelector(".close-btn");

            const itemsList = [title, date, description, intro, challenges, tech, thanks, closeBtn];

            itemsList.forEach((item) => {
                item.classList.remove("open");
            });
            lines.forEach((line) => {
                line.classList.remove("open");
            });
        });

        setTimeout(() => {
            projBoxList.forEach((box) => {
                box.style.height = "0";
            });
        }, 400);

        setTimeout(() => {
            projList.forEach((project) => {
                project.style.opacity = "0";
            })
        }, 1000);

        setTimeout(() => {
            projList.forEach((project) => {
                project.style.top = "-100vh";
                project.style.visibility = "hidden";
            })
        }, 1400)

    }
    // --------------------------------

    return (
        <>
        <div ref={containerRef} id="projects-container-mobile">
            <div className="projects-background-mobile">
                <div className="line"></div>
                <div className="title-marquee">
                    <div className="title-content">
                        <span ref={titleRef} className="title"></span>
                    </div>
                </div>
            </div>

            <div ref={contentRef} className="projects-content-mobile">
                <h2 ref={titleTopRef} className="title-top">"work"</h2>
                <h2 ref={titleBotRef} className="title-bot">"work"</h2>

                <div className="showcase">
                    <div className="hero-box-mobile">
                        <img ref={heroBoxImgRef} src={placeholder} alt="hero placeholder" />
                    </div>

                    <p ref={projectTitleRef} className="project-title">Project Title</p>
                    <div className="description-mobile">
                        <p ref={projectDescRef}>Project Description</p>
                    </div>

                    <div className="links-container">
                        <a ref={codeLinkRef} href="https://github.com/zethdeluna/zethdeluna.com" target="_blank" rel="noreferrer" className="project-link">Code</a>
                        <button ref={readMoreRef} onClick="none" className="read-more">Read More</button>
                        <a ref={siteLinkRef} href="/" target="_blank" rel="noreferrer" className="project-link">Site</a>
                    </div>

                    <div className="projects-scroller-container">
                        <div className="projects-scroller-mobile">
                            <button ref={proj1BtnRef} onClick={proj1Select} className="project-btn">Proj 01</button>
                            <button ref={proj2BtnRef} onClick={proj2Select} className="project-btn">Proj 02</button>
                            <button ref={proj3BtnRef} onClick={proj3Select} className="project-btn">Proj 03</button>
                            <button ref={proj4BtnRef} onClick={proj4Select} className="project-btn">Proj 04</button>
                            <button ref={proj5BtnRef} onClick={proj5Select} className="project-btn">Proj 05</button>
                            <button ref={proj6BtnRef} onClick={proj6Select} className="project-btn">Proj 06</button>
                            <button ref={proj7BtnRef} onClick={proj7Select} className="project-btn">Proj 07</button>
                        </div>

                        <p className="click-or-swipe">click or swipe &rarr;</p>
                    </div>
                </div>
            </div>

            <div ref={proj1Ref} id="project-1" className="project-container-mobile">
                <div ref={proj1BoxRef} className="project-box-mobile">
                    <div className="date">
                        <p className="year">2021</p>
                    </div>
                    <div className="project-line"></div>
                    <div className="project-title">Zeth <br/> De Luna</div>
                    <div className="project-line"></div>
                    <p className="project-description">
                        A clean, custom portfolio website that reflects my approach to design and web development.
                    </p>
                    <div className="project-line"></div>
                    <div className="in-depth-description">
                        <div className="intro-mobile">
                            <h2>Introduction</h2>
                            <p>New skills, new portfolio! Being in the field of web development means learning new things &mdash; all the time. As I continue to discover new tools and tricks, I think about how I can use them to make my websites more fluid and interactive. With rigorous research on UI/UX design (I'm no web designer, but I try), I defined and refined animations to create a user experience that best reflects my style.</p>
                        </div>
                        <div className="challenges-mobile">
                            <h2>Challenges</h2>
                            <p>Although I know how to appreciate good design, designing for myself led to at least 40 drafts on the chopping block until I was able to come to the final design. I wanted my website to have smooth, satisfying transitions &mdash; specifically when opening the menu or a project, where they would fade in and be revealed behind some "sliding doors". Setting up the carefully timed transitions for each element was a great opportunity for me to solidify my understanding of JavaScript and React Hooks.</p>
                        </div>
                        <div className="technology-mobile">
                            <h2>Technology & Design</h2>
                            <p>React JS / React Hooks / GSAP / SASS / Figma</p>
                        </div>
                        <div className="thanks-for-reading">
                            <p>Thanks for reading!</p>
                            <p>
                                Feel free to check out the &nbsp;
                                <a href="https://github.com/zethdeluna/zethdeluna.com" target="_blank" rel="noreferrer">code</a> /&nbsp;
                                <a href="/" target="_blank" rel="noreferrer">site</a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="project-line"></div>
                    <button onClick={projectCloser} className="close-btn">close</button>
                </div>
            </div>

            <div ref={proj2Ref} id="project-2" className="project-container-mobile">
                <div ref={proj2BoxRef} className="project-box-mobile">
                    <div className="date">
                        <p className="year">2021</p>
                    </div>
                    <div className="project-line"></div>
                    <div className="project-title">Bon Bon <br/> Tea House</div>
                    <div className="project-line"></div>
                    <p className="project-description">
                        My take on a responsive, mobile-friendly website for a local small business.
                    </p>
                    <div className="project-line"></div>
                    <div className="in-depth-description">
                        <div className="intro-mobile">
                            <h2>Introduction</h2>
                            <p>With the increasing popularity of this San Fernando Valley boba shop, Bon Bon Tea House is in need of a website to create a more accessible and streamlined connection with their customers. While this is a mockup, here's my first take at a single-page website where customers can find their menu, locations, instagram, etc.</p>
                        </div>
                        <div className="challenges-mobile">
                            <h2>Challenges</h2>
                            <p>This was one of my first projects after learning the basics of HTML, CSS and JavaScript. Since this project had more pieces than I was used to, it was a perfect excuse to practive building a React component-based website.</p>
                        </div>
                        <div className="technology-mobile">
                            <h2>Technology & Design</h2>
                            <p>React JS / SASS / Figma (Design)</p>
                        </div>
                        <div className="thanks-for-reading">
                            <p>Thanks for reading!</p>
                            <p>
                                Feel free to check out the &nbsp;
                                <a href="https://github.com/zethdeluna/bbth" target="_blank" rel="noreferrer">code</a> /&nbsp;
                                <a href="https://zethdeluna.github.io/bbth/" target="_blank" rel="noreferrer">site</a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="project-line"></div>
                    <button onClick={projectCloser} className="close-btn">close</button>
                </div>
            </div>

            <div ref={proj3Ref} id="project-3" className="project-container-mobile">
                <div ref={proj3BoxRef} className="project-box-mobile">
                    <div className="date">
                        <p className="year">2021</p>
                    </div>
                    <div className="project-line"></div>
                    <div className="project-title">Room</div>
                    <div className="project-line"></div>
                    <p className="project-description">
                        A simple interactive homepage template made alive with React Hooks.
                    </p>
                    <div className="project-line"></div>
                    <div className="in-depth-description">
                        <div className="intro-mobile">
                            <h2>Introduction</h2>
                            <p>
                                This is a practice project from <a href="https://www.frontendmentor.io/profile/zethdeluna" target="_blank" rel="noreferrer">FrontEndMentor.io</a>, a site that offers hundreds of mock website projects for front-end developers to enhance their coding skills. The goal of this project was to build a responsive homepage for a mock furniture store with a slider that displays promotional information about the company. Userse should be able to navigate through the slider using the arrow buttons on the site or keyboard arrows.
                            </p>
                        </div>
                        <div className="challenges-mobile">
                            <h2>Challenges</h2>
                            <p>This was my first time building an interactive slider, so it was a great opportunity for me to improve my JavaScript. The concept behind my approach was simple: update the state of the slider depending on which button was clicked (next or previous) and display the appropriate content corresponding to the current slider page. In terms of layout, the challenge was getting the different sections and images to look good while being responsive. I used CSS Flexbox, but looking back now I realize that using CSS Grid would have been so much easier.</p>
                        </div>
                        <div className="technology-mobile">
                            <h2>Technology</h2>
                            <p>React JS / React Hooks / SASS / Flexbox</p>
                        </div>
                        <div className="thanks-for-reading">
                            <p>Thanks for reading!</p>
                            <p>
                                Feel free to check out the &nbsp;
                                <a href="https://github.com/zethdeluna/room-homepage" target="_blank" rel="noreferrer">code</a> /&nbsp;
                                <a href="https://zethdeluna.github.io/room-homepage/" target="_blank" rel="noreferrer">site</a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="project-line"></div>
                    <button onClick={projectCloser} className="close-btn">close</button>
                </div>
            </div>

            <div ref={proj4Ref} id="project-4" className="project-container-mobile">
                <div ref={proj4BoxRef} className="project-box-mobile">
                    <div className="date">
                        <p className="year">2021</p>
                    </div>
                    <div className="project-line"></div>
                    <div className="project-title">Interactive <br/> Pricing Component</div>
                    <div className="project-line"></div>
                    <p className="project-description">
                        A scalable interactive slider that can be dropped into any React-based website.
                    </p>
                    <div className="project-line"></div>
                    <div className="in-depth-description">
                        <div className="intro-mobile">
                            <h2>Introduction</h2>
                            <p>
                                This is a practice project from <a href="https://www.frontendmentor.io/profile/zethdeluna" target="_blank" rel="noreferrer">FrontEndMentor.io</a>, a site that offers hundreds of mock website projects for front-end developers to enhance their coding skills. The goal of this project was to builda responsive slider component that allows "customers" to easily see different prices for different product offerings.
                            </p>
                        </div>
                        <div className="challenges-mobile">
                            <h2>Challenges</h2>
                            <p>The "driving force" behind the pricing component is the user's ability to change the component's state using the slider and toggle button, however you'd be surprised at what took most of my time and effort: the slider's progress color. Firefox and IE have a built-in CSS property that allows the site to show the slider thumb's progress along the rail. It wasn't so simple with webkit browsers (Safari, Chrome, Opera). Those don't have a built-in slider progress option, so I had to manually fill in the space behind the slider thumb using JavaScript.</p>
                        </div>
                        <div className="technology-mobile">
                            <h2>Technology</h2>
                            <p>React JS / React Hooks / SASS / Flexbox</p>
                        </div>
                        <div className="thanks-for-reading">
                            <p>Thanks for reading!</p>
                            <p>
                                Feel free to check out the &nbsp;
                                <a href="https://github.com/zethdeluna/interactive-pricing-component" target="_blank" rel="noreferrer">code</a> /&nbsp;
                                <a href="https://zethdeluna.github.io/interactive-pricing-component/" target="_blank" rel="noreferrer">site</a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="project-line"></div>
                    <button onClick={projectCloser} className="close-btn">close</button>
                </div>
            </div>

            <div ref={proj5Ref} id="project-5" className="project-container-mobile">
                <div ref={proj5BoxRef} className="project-box-mobile">
                    <div className="date">
                        <p className="year">2021</p>
                    </div>
                    <div className="project-line"></div>
                    <div className="project-title">FAQ <br/> Accordion Card</div>
                    <div className="project-line"></div>
                    <p className="project-description">
                        An implementation of the accordion-style layout for a generic FAQ page.
                    </p>
                    <div className="project-line"></div>
                    <div className="in-depth-description">
                        <div className="intro-mobile">
                            <h2>Introduction</h2>
                            <p>
                                This is a practice project from <a href="https://www.frontendmentor.io/profile/zethdeluna" target="_blank" rel="noreferrer">FrontEndMentor.io</a>, a site that offers hundreds of mock website projects for front-end developers to enhance their coding skills. The goal of this project was to build a responsive FAQ component that uses an interactive accordion layout to display questions and answers.
                            </p>
                        </div>
                        <div className="challenges-mobile">
                            <h2>Challenges</h2>
                            <p>Being fairly new to front-end development at the time I completed this project, I was still a novice at JavaScript. This project was a good intro for me on how to manipulate HTML elements using Vanilla JavaScript.</p>
                        </div>
                        <div className="technology-mobile">
                            <h2>Technology</h2>
                            <p>HTML / SASS / JavaScript</p>
                        </div>
                        <div className="thanks-for-reading">
                            <p>Thanks for reading!</p>
                            <p>
                                Feel free to check out the &nbsp;
                                <a href="https://github.com/zethdeluna/faq-accordion-card" target="_blank" rel="noreferrer">code</a> /&nbsp;
                                <a href="https://zethdeluna.github.io/faq-accordion-card/" target="_blank" rel="noreferrer">site</a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="project-line"></div>
                    <button onClick={projectCloser} className="close-btn">close</button>
                </div>
            </div>

            <div ref={proj6Ref} id="project-6" className="project-container-mobile">
                <div ref={proj6BoxRef} className="project-box-mobile">
                    <div className="date">
                        <p className="year">2021</p>
                    </div>
                    <div className="project-line"></div>
                    <div className="project-title">Stopwatch</div>
                    <div className="project-line"></div>
                    <p className="project-description">
                        A JavaScript stopwatch with keyboard "start / stop / reset" functionality.
                    </p>
                    <div className="project-line"></div>
                    <div className="in-depth-description">
                        <div className="intro-mobile">
                            <h2>Introduction</h2>
                            <p>
                                Aftering covering the basics of HTML, CSS, and JavaScript, I wanted to see if I could actually build something. A stopwatch seemed simple enough &mdash; after all, you only need 3 buttons and a counter.
                            </p>
                        </div>
                        <div className="challenges-mobile">
                            <h2>Challenges</h2>
                            <p>The main challenge when building a stopwatch is being able to properly count the elapsed time. Here, I was able to get my first exposure to JavaScript Date objects &mdash; the stopwatch works by marking the time at which the "start" button was pressed (say, 8:04:21PM) and subtracting that from the time at which the "stop" button was pressed (say, 8:04:31PM, at which the stopwatch would indicate that 10 seconds have passed by).</p>
                        </div>
                        <div className="technology-mobile">
                            <h2>Technology</h2>
                            <p>Vanilla JavaScript</p>
                        </div>
                        <div className="thanks-for-reading">
                            <p>Thanks for reading!</p>
                            <p>
                                Feel free to check out the &nbsp;
                                <a href="https://github.com/zethdeluna/stopwatch" target="_blank" rel="noreferrer">code</a> /&nbsp;
                                <a href="https://zethdeluna.github.io/stopwatch/" target="_blank" rel="noreferrer">site</a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="project-line"></div>
                    <button onClick={projectCloser} className="close-btn">close</button>
                </div>
            </div>

            <div ref={proj7Ref} id="project-7" className="project-container-mobile">
                <div ref={proj7BoxRef} className="project-box-mobile">
                    <div className="date">
                        <p className="year">2021</p>
                    </div>
                    <div className="project-line"></div>
                    <div className="project-title">Calculator</div>
                    <div className="project-line"></div>
                    <p className="project-description">
                        A basic JavaScript calculator.
                    </p>
                    <div className="project-line"></div>
                    <div className="in-depth-description">
                        <div className="intro-mobile">
                            <h2>Introduction</h2>
                            <p>
                                Building a JavaScript calculator is like a web developer's "first test" at real-world developing. If successful, it would help solidify a developer's understanding of coding logic and functional programming. In this project, I built a standard calculator that performs addition, subtraction, multiplication, and division.
                            </p>
                        </div>
                        <div className="challenges-mobile">
                            <h2>Challenges</h2>
                            <p>I never realized how many logical steps it took to run a simple calculator. Sometimes, we just take things for granted. Since the math itself was so simple, it was a good chance for me to focus on the logical coding itself.</p>
                        </div>
                        <div className="technology-mobile">
                            <h2>Technology</h2>
                            <p>Vanilla JavaScript / SASS</p>
                        </div>
                        <div className="thanks-for-reading">
                            <p>Thanks for reading!</p>
                            <p>
                                Feel free to check out the &nbsp;
                                <a href="https://github.com/zethdeluna/calculator-app" target="_blank" rel="noreferrer">code</a> /&nbsp;
                                <a href="https://zethdeluna.github.io/calculator-app/" target="_blank" rel="noreferrer">site</a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="project-line"></div>
                    <button onClick={projectCloser} className="close-btn">close</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectsMobile;