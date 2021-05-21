import React, { useRef, useState, useEffect } from 'react';
import './Navigation.scss';

function Navigation() {
    // menu button functionality
    // ----------------------------------
    const [isOpen, setIsOpen] = useState(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const menuBtnRef = useRef();
    const menuRef = useRef();
    const itemsRef = useRef();
    const boxRef = useRef();
    const borderTopRef = useRef();
    const borderBottomRef = useRef();
    const linksRef = useRef();

    useEffect(() => {
        const menuBtn = menuBtnRef.current;
        const menu = menuRef.current;
        const items = itemsRef.current;
        const box = boxRef.current;
        const borderTop = borderTopRef.current;
        const borderBottom = borderBottomRef.current;
        const links = linksRef.current;

        // menuBtn.textContent = "menu";

        if (isOpen === true) {
            // menu button text transition
            menuBtn.classList.add("hide-text");
            setTimeout(() => {
                menuBtn.textContent = "close";
                menuBtn.classList.remove("hide-text");
            }, 400);

            menu.style.top = "0";
            menu.style.opacity = "1";

            box.style.opacity = "1";

            setTimeout(() => {
                borderTop.style.transform = "translateY(-180px)";
                borderBottom.style.transform = "translateY(135px)";
                items.style.height = "220px";
            }, 400);

            setTimeout(() => {
                links.style.opacity = "1";
                links.style.transform = "translateY(0px)";
            }, 800)

            menu.style.visibility = "visible";
            document.body.style.overflow = "hidden";
            
        } else if (isOpen === false) {
            // menu button text transition
            menuBtn.classList.add("hide-text");
            setTimeout(() => {
                menuBtn.textContent = "menu";
                menuBtn.classList.remove("hide-text");
            }, 400);

            setTimeout(() => {
                menu.style.top = "-100vh";
                menu.style.visibility = "hidden";
            }, 1200)

            setTimeout(() => {
                box.style.opacity = "0";
                menu.style.opacity = "0";
            }, 800);

            setTimeout(() => {
                borderTop.style.transform = "translateY(0)";
                borderBottom.style.transform = "translateY(0)";
                items.style.height = "0";
            }, 400);
            
            links.style.opacity = "0";
            links.style.transform = "translateY(-20px)";

            document.body.style.overflow = "visible";
        }
    });
    // ----------------------------------

    // left block color change
    // ----------------------------------
    const leftBlockRef = useRef();

    useEffect(() => {
        const leftBlock = leftBlockRef.current;
        const menuBtn = menuBtnRef.current;

        const blockGreen = () => {
            leftBlock.classList.add("hover__active");
        };
        const blockBlack = () => {
            leftBlock.classList.remove("hover__active");
        };

        menuBtn.addEventListener("mouseenter", blockGreen);
        menuBtn.addEventListener("mouseout", blockBlack);

        return () => {
            menuBtn.removeEventListener("mouseenter", blockGreen);
            menuBtn.removeEventListener("mouseout", blockBlack);
        }
    })
    // ----------------------------------

    // page link hover effect
    // ----------------------------------
    const aboutLinkRef = useRef();
    const workflowLinkRef = useRef();
    const projectsLinkRef = useRef();

    useEffect(() => {
        const aboutLink = aboutLinkRef.current;
        const workflowLink = workflowLinkRef.current;
        const projectsLink = projectsLinkRef.current;

        // about hover
        const aboutIn = () => {
            aboutLink.style.letterSpacing = "0px";
            workflowLink.classList.add("strikeIn");
            projectsLink.classList.add("strikeIn");
        }
        const aboutOut = () => {
            aboutLink.style.letterSpacing = "-8px";

            workflowLink.classList.remove("strikeIn");
            projectsLink.classList.remove("strikeIn");

            workflowLink.classList.add("strikeOut");
            projectsLink.classList.add("strikeOut");

            setTimeout(() => {
                workflowLink.classList.remove("strikeOut");
                projectsLink.classList.remove("strikeOut");
            }, 190);
        }
        // workflow hover
        const workflowIn = () => {
            workflowLink.style.letterSpacing = "0px";
            aboutLink.classList.add("strikeIn");
            projectsLink.classList.add("strikeIn");
        }
        const workflowOut = () => {
            workflowLink.style.letterSpacing = "-8px";

            aboutLink.classList.remove("strikeIn");
            projectsLink.classList.remove("strikeIn");

            aboutLink.classList.add("strikeOut");
            projectsLink.classList.add("strikeOut");

            setTimeout(() => {
                aboutLink.classList.remove("strikeOut");
                projectsLink.classList.remove("strikeOut");
            }, 190);
        }
        // projects hover 
        const projectsIn = () => {
            projectsLink.style.letterSpacing = "0px";
            aboutLink.classList.add("strikeIn");
            workflowLink.classList.add("strikeIn");
        }
        const projectsOut = () => {
            projectsLink.style.letterSpacing = "-8px";

            aboutLink.classList.remove("strikeIn");
            workflowLink.classList.remove("strikeIn");

            aboutLink.classList.add("strikeOut");
            workflowLink.classList.add("strikeOut");

            setTimeout(() => {
                aboutLink.classList.remove("strikeOut");
                workflowLink.classList.remove("strikeOut");
            }, 190);
        }

        // implement effects
        aboutLink.addEventListener("mouseenter", aboutIn);
        aboutLink.addEventListener("mouseout", aboutOut);
        workflowLink.addEventListener("mouseenter", workflowIn);
        workflowLink.addEventListener("mouseout", workflowOut);
        projectsLink.addEventListener("mouseenter", projectsIn);
        projectsLink.addEventListener("mouseout", projectsOut);

        return () => {
            aboutLink.removeEventListener("mouseenter", aboutIn);
            aboutLink.removeEventListener("mouseout", aboutOut);
            workflowLink.removeEventListener("mouseenter", workflowIn);
            workflowLink.removeEventListener("mouseout", workflowOut);
            projectsLink.removeEventListener("mouseenter", projectsIn);
            projectsLink.removeEventListener("mouseout", projectsOut);
        }
    })
    // ----------------------------------

    // contact links hover effects
    // ----------------------------------
    useEffect(() => {
        const links = document.querySelectorAll(".link");

        links.forEach((link) => {
            const hoverIn = () => {
                link.classList.add("hoverIn");
            }
            const hoverOut = () => {
                link.classList.remove("hoverIn");
                link.classList.add("hoverOut");
                setTimeout(() => {
                    link.classList.remove("hoverOut");
                }, 190);
            }

            link.addEventListener("mouseenter", hoverIn);
            link.addEventListener("mouseout", hoverOut);

            return () => {
                link.removeEventListener("mouseenter", hoverIn);
                link.removeEventListener("mouseout", hoverOut);
            }
        })
    })
    // ----------------------------------

    // copy email on click
    // ----------------------------------  

    // menu email
    const testAlertRef = useRef();

    const copyEmail = () => {
        const email = "zeth.anthony.deluna@gmail.com"

        navigator.clipboard.writeText(email);

        const testAlert = testAlertRef.current;
        testAlert.style.opacity = "1";
        setTimeout(() => {
            testAlert.style.opacity = "0";
        }, 1000)
    }

    // front email
    const frontEmailAlertRef = useRef();

    const copyFrontEmail = () => {
        const email = "zeth.anthony.deluna@gmail.com";

        navigator.clipboard.writeText(email);

        const frontAlert = frontEmailAlertRef.current;
        frontAlert.style.opacity = "1";
        setTimeout(() => {
            frontAlert.style.opacity = "0";
        }, 1000);
    }
    // ----------------------------------

    // fade in on load
    // ----------------------------------
    const frontLinksRef = useRef();

    useEffect(() => {
        const menuBtn = menuBtnRef.current;
        const leftBlock = leftBlockRef.current;
        const frontLinks = frontLinksRef.current;

        setTimeout(() => {
            menuBtn.classList.add("menu-btn-enter");
            leftBlock.classList.add("menu-btn-enter");
            frontLinks.classList.add("enter");
        }, 400);
    })
    // ----------------------------------

    return (
        <>
        <div ref={menuRef} className="nav-container">
            <ul ref={itemsRef} className="nav-items">
                <li><a ref={aboutLinkRef} href="#about-container" onClick={toggleMenu}>About</a></li>
                <li><a ref={projectsLinkRef} href="#projects-container" onClick={toggleMenu}>Projects</a></li>
                <li><a ref={workflowLinkRef} href="#workflow-container" onClick={toggleMenu}>Workflow</a></li>
            </ul>

            <div ref={boxRef} className="nav-box">
                <div ref={borderTopRef} className="line"></div>
                <div ref={borderBottomRef} className="line"></div>
            </div>

            <ul ref={linksRef} className="my-links">
                <li>
                    <span onClick={copyEmail} className="link">Email</span>
                </li>
                <li><a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer" className="link">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer" className="link">LinkedIn</a></li>
            </ul>
            <p ref={testAlertRef} className="email-alert">You copied my email</p>

        </div>
        <ul ref={frontLinksRef} className="front-links">
            <li>
                <span onClick={copyFrontEmail}>Email</span>
            </li>
            <li>
                <a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
        </ul>
        <span className="front-email-alert">
            <p ref={frontEmailAlertRef}>Copied</p>
        </span>
        <button ref={menuBtnRef} onClick={toggleMenu} className="menu-btn">menu</button>
        <div ref={leftBlockRef} className="left-block"></div>
        </>
    )
}

export default Navigation;