import React, { useState } from 'react';
import './ContactMobile.scss';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ContactMobile() {
    // handle the form
    const [nameMobile, setNameMobile] = useState("");
    const [emailMobile, setEmailMobile] = useState("");
    const [messageMobile, setMessageMobile] = useState("");
    const [buttonMobile, setButtonMobile] = useState("send");

    const nameMobileChange = (event) => {
        setNameMobile(event.target.value)
    }
    const emailMobileChange = (event) => {
        setEmailMobile(event.target.value)
    }
    const messageMobileChange = (event) => {
        setMessageMobile(event.target.value)
    }
    const handleSubmitMobile = (event) => {
        event.preventDefault();
        setButtonMobile("sending...")

        const templateParams = {
            from: nameMobile,
            email: emailMobile,
            to: "zeth.anthony.deluna@gmail.com",
            message: messageMobile
        };

        emailjs.send(
            "service_848mxuj",
            "zethdelunaContactEmail",
            templateParams,
            "user_BFRQfCIO8h2bmYLnlpFB8"
        )

        // reset the form
        setNameMobile("");
        setEmailMobile("");
        setMessageMobile("");
        setButtonMobile("sent")
    }

    return (
        <div id="contactMobileContainer">
            <div id="formMobileContainer">
                <h2>get in touch.</h2>
                <form>
                    <div className="userInputMobile">
                        <input type="text" placeholder="name" id="nameMobile" value={nameMobile} onChange={nameMobileChange} required />
                    </div>
                    <div className="userInputMobile">
                        <input type="text" placeholder="email" id="emailMobile" value={emailMobile} onChange={emailMobileChange} required />
                    </div>
                    <div className="userInputMobile">
                        <textarea placeholder="message" id="messageMobile" value={messageMobile} onChange={messageMobileChange} required />
                    </div>
                    <button type="submit" id="submitButtonMobile" onClick={handleSubmitMobile}>
                        {buttonMobile}
                    </button>
                </form>
            </div>
            <div id="infoMobileContainer">
                <h2>other things.</h2>
                <a href="https://github.com/zethdeluna"
                target="_blank"
                rel="noreferrer">
                    github.
                </a>
                <a href="https://www.linkedin.com/in/zethdeluna/"
                target="_blank"
                rel="noreferrer">
                    linkedin.
                </a>
                <p>zeth.anthony.deluna@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactMobile