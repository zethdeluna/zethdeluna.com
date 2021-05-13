import React, { useRef, useState, useEffect } from 'react';
import './About.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    // vertical text scroller
    // ---------------------------
    const titleRef = useRef();

    useEffect(() => {
        const content = "<p>about</p>";
        const aboutMarqueeText = titleRef.current;

        for (let i = 0; i < 70; i++) {
            aboutMarqueeText.innerHTML += content;
        }
    });
    // ---------------------------

    // skills button
    // ---------------------------
    const [skillsOpen, setSkillsOpen] = useState(null);

    const toggleSkills = (e) => {
        e.preventDefault();
        setSkillsOpen(!skillsOpen);
    };

    const s2Ref = useRef();
    const skillsRef = useRef();
    const skBtnRef = useRef();

    useEffect(() => {
        const s2 = s2Ref.current;
        const skills = skillsRef.current;
        const skBtn = skBtnRef.current;
        skBtn.textContent = "click";

        if (skillsOpen === true) {
            s2.style.transform = "translateX(490px)";
            skBtn.textContent = "close"
            
            setTimeout(() => {
                skills.style.opacity = "1";
            }, 200);
        } else if (skillsOpen === false) {
            setTimeout(() => {
                s2.style.transform = "translateX(0)";
            }, 200);

            skBtn.textContent = "click";
            skills.style.opacity = "0";
        }
    })
    // ---------------------------

    // skills marquees
    // ---------------------------
    const skillsList1Ref = useRef();
    const skillsList2Ref = useRef();

    useEffect(() => {
        const content1 = "<p>HTML5 CSS3/SASS VanillaJS</p>";
        const content2 = "<p>React.JS React.Hooks Git Figma</p>";
        const skillsList1 = skillsList1Ref.current;
        const skillsList2 = skillsList2Ref.current;

        for (let i = 0; i < 20; i++) {
            skillsList1.innerHTML += content1;
            skillsList2.innerHTML += content2;
        }
    })
    // ---------------------------

    // education button
    // ---------------------------
    const [eduOpen, setEduOpen] = useState(null);

    const toggleEdu = (e) => {
        e.preventDefault();
        setEduOpen(!eduOpen);
    };

    const e1Ref = useRef();
    const eduRef = useRef();
    const eduBtnRef = useRef();

    useEffect(() => {
        const e1 = e1Ref.current;
        const edu = eduRef.current;
        const eduBtn = eduBtnRef.current;

        eduBtn.textContent = "click";

        if (eduOpen === true) {
            e1.style.transform = "translateX(-500px)";
            eduBtn.textContent = "close";

            setTimeout(() => {
                edu.style.opacity = "1";
            }, 200);
        } else if (eduOpen === false) {
            setTimeout(() => {
                e1.style.transform = "translateX(0)";
            }, 200);

            edu.style.opacity = "0";
            eduBtn.textContent = "click";
        }
    })
    // ---------------------------

    // education marquees
    // ---------------------------
    const eduList1Ref = useRef();
    const eduList2Ref = useRef();

    useEffect(() => {
        const content1 = "<p>B.S. <span>in</span> Astrophysics &nbsp;&nbsp;&nbsp;&nbsp; California State University, Northridge</p>";
        const content2 = "<p>FreeCodeCamp.org &nbsp;&nbsp;&nbsp;&nbsp; Personal Projects &nbsp;&nbsp;&nbsp;&nbsp; FrontEndMentor.io</p>";
        const eduList1 = eduList1Ref.current;
        const eduList2 = eduList2Ref.current;

        for (let i = 0; i < 20; i++) {
            eduList1.innerHTML += content1;
            eduList2.innerHTML += content2; 
        }
    })
    // ---------------------------

    // scroll effects
    // ---------------------------
    const aboutContainerRef = useRef();
    const desContainerRef = useRef();
    const desRef = useRef();
    const ssRef = useRef();
    const eeRef = useRef();
    const titleLeftRef = useRef();
    const titleRightRef = useRef();

    useEffect(() => {
        const aboutContainer = aboutContainerRef.current; // whole section
        const desContainer = desContainerRef.current; // center line
        const description = desRef.current; // center paragraph
        const ss = ssRef.current; // the two S's
        const skillsBtn = skBtnRef.current; // skills button
        const ee = eeRef.current; // the two E's
        const eduBtn = eduBtnRef.current; // education botton
        const titleLeft = titleLeftRef.current; // left title
        const titleRight = titleRightRef.current; // right title

        const targets = [
            desContainer, 
            description, 
            ss, 
            skillsBtn, 
            titleLeft, 
            titleRight,
            ee,
            eduBtn
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
    // ---------------------------

    return (
        <div ref={aboutContainerRef} id="about-container">
            <div className="about-background">
                <div className="line"></div>
                <div className="title-marquee">
                    <div className="title-content">
                        <span ref={titleRef} className="title"></span>
                    </div>
                </div>
            </div>
            <div className="about-content">

                <div className="skills-cover">
                    <div ref={ssRef} className="ss">
                        <span>s</span>
                        <span ref={s2Ref}>s</span>
                    </div>
                    <button ref={skBtnRef} onClick={toggleSkills} className="s-btn"></button>
                </div>
                <div ref={skillsRef} className="skills-content">
                    <div className="skills-marquee-1">
                        <div className="sk-marquee-content-1">
                            <span ref={skillsList1Ref} className="skills-list-1"></span>
                        </div>
                    </div>
                    <div className="skills-marquee-2">
                        <div className="sk-marquee-content-2">
                            <span ref={skillsList2Ref} className="skills-list-2"></span>
                        </div>
                    </div>
                </div>
                <div ref={titleLeftRef} className="title-left-container">
                    <h2 className="title-left">A little about myself</h2>
                </div>

                <div className="edu-cover">
                <button ref={eduBtnRef} onClick={toggleEdu} className="e-btn"></button>
                    <div ref={eeRef} className="ee">
                        <span ref={e1Ref}>E</span>
                        <span>E</span>
                    </div>
                </div>
                <div ref={eduRef} className="edu-content">
                    <div className="edu-marquee-1">
                        <div className="edu-marquee-content-1">
                            <span ref={eduList1Ref} className="edu-list-1"></span>
                        </div>
                    </div>
                    <div className="edu-marquee-2">
                        <div className="edu-marquee-content-2">
                            <span ref={eduList2Ref} className="edu-list-2"></span>
                        </div>
                    </div>
                </div>
                <div ref={titleRightRef} className="title-right-container">
                    <h2 className="title-right">A little about myself</h2>
                </div>

                <div ref={desContainerRef} className="about-description">
                    <p ref={desRef} >
                        I'm Zeth &mdash; freelance front-end developer with a background in physics. I love <br/>
                        bringing pleasing UI/UX designs to life & love everything about clean, beautiful <br/>
                        typography. With my self-starter mentality & my keen attention to detail, I'm <br/>
                        capable of turning website designs into functional and responsive websites.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;