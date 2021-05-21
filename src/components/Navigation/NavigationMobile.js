import React, { useRef, useState, useEffect } from 'react';
import './NavigationMobile.scss';

function NavigationMobile() {
    // menu button functionality
    // ------------------------------------
    const [isOpen, setIsOpen] = useState(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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

        if (isOpen === true) {
            menuBtn.classList.add("hide-text");

            menu.style.top = "0";
            menu.style.opacity = "1"
            menu.style.visibility = "visible";
            box.style.opacity = "1";

            setTimeout(() => {
                menuBtn.textContent = "close";
                menuBtn.classList.remove("hide-text");
                borderTop.style.transform = "translateY(-153px)";
                borderBottom.style.transform = "translateY(109px)";
                items.style.height = "175px";
            }, 400);

            setTimeout(() => {
                links.style.opacity = "1";
                links.style.transform = "translateY(0)";
            }, 800);
        } else if (isOpen === false) {
            menuBtn.classList.add("hide-text");

            links.style.opacity = "0";
            links.style.transform = "translateY(-20px)"

            setTimeout(() => {
                menuBtn.textContent = "menu";
                menuBtn.classList.remove("hide-text");
                borderTop.style.transform = "translateY(0)";
                borderBottom.style.transform = "translateY(0)";
                items.style.height = "0";
            }, 400);

            setTimeout(() => {
                box.style.opacity = "0";
                menu.style.opacity = "0";
            }, 800);

            setTimeout(() => {
                menu.style.top = "-100vh";
                menu.style.visibility = "hidden";
            }, 1200);
        }
    })
    // ------------------------------------

    // copy email
    // ------------------------------------
    const emailAlertRef = useRef();

    const copyEmail = () => {
        const email = "zeth.anthony.deluna@gmail.com";

        navigator.clipboard.writeText(email);

        const emailAlert = emailAlertRef.current;
        emailAlert.style.opacity = "1";
        setTimeout(() => {
            emailAlert.style.opacty = "0";
        }, 1000);
    };
    // ------------------------------------


    return (
        <>
        <div ref={menuRef} className="navigation-container-mobile">
            <ul ref={itemsRef} className="nav-items-mobile">
                <li><a onClick={toggleMenu} href="#about-container-mobile">About</a></li>
                <li><a onClick={toggleMenu} href="#projects-container-mobile">Projects</a></li>
                <li><a onClick={toggleMenu} href="#workflow-container-mobile">Workflow</a></li>
            </ul>

            <div ref={boxRef} className="nav-box-mobile">
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
            <p ref={emailAlertRef} className="email-alert">You copied my email</p>
        </div>

        <button ref={menuBtnRef} onClick={toggleMenu} className="menu-btn-mobile">menu</button>
        </>
    )
}

export default NavigationMobile;