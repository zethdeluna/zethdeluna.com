import React, { useRef, useEffect, useState } from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    // handle the form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [button, setButton] = useState("send");

    const nameChange = (event) => {
        setName(event.target.value)
    }
    const emailChange = (event) => {
        setEmail(event.target.value)
    }
    const messageChange = (event) => {
        setMessage(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setButton("sending...")

        const templateParams = {
            from: name,
            email: email,
            to: "zeth.anthony.deluna@gmail.com",
            message: message
        };

        emailjs.send(
            "service_848mxuj",
            "zethdelunaContactEmail",
            templateParams,
            "user_BFRQfCIO8h2bmYLnlpFB8"
        )

        // reset the form
        setName("");
        setEmail("");
        setMessage("");
        setButton("sent")
    }

    // handle the scroll effects
    const contactRef = useRef();
    const formRef = useRef();
    const otherInfoRef = useRef();
    const formCircleRef = useRef();
    const infoCircleRef = useRef();

    useEffect(() => {
        // slide up form 
        gsap.timeline({
            scrollTrigger: {
                trigger: contactRef.current,
                start: "-10% 10%",
                end: "60% bottom",
                scrub: true,
                // markers: true
            }
        })
        .to(formRef.current, {y: "0"})

        // fade out form
        gsap.timeline({
            scrollTrigger: {
                trigger: contactRef.current,
                start: "65% bottom",
                end: "85% bottom",
                scrub: true
            }
        })
        .to(formRef.current, {opacity: 0}, 0)
        .to(formCircleRef.current, {rotate: "180deg"}, 0)

        // fade in "other things" page
        gsap.timeline({
            scrollTrigger: {
                trigger: contactRef.current,
                start: "65% bottom",
                end: "65% bottom",
                scrub: true,
            }
        })
        .to(otherInfoRef.current, {y: "0"})
        gsap.timeline({
            scrollTrigger: {
                trigger: contactRef.current,
                start: "70% bottom",
                end: "bottom bottom",
                scrub: true,
                // markers: true
            }
        })
        .to(otherInfoRef.current, {opacity: 1}, 0)
        .to(infoCircleRef.current, {rotate: "180deg"}, 0)
    })

    // handle "other things" page
    const [myEmail, setMyEmail] = useState("email.")
    const changeMyEmail = (event) => {
        if (myEmail === "email.") {
            setMyEmail("zeth.anthony.deluna@gmail.com");
        } else {
            setMyEmail("email.");
        }
    }

    return (
        <div ref={contactRef} id="contactContainer">
            <div ref={formRef} id="formContainer">
                <form>
                    <div className="userInput">
                        <input type="text" placeholder="name" id="name" value={name} onChange={nameChange} required />
                    </div>
                    <div className="userInput">
                        <input type="text" placeholder="email" id="email" value={email} onChange={emailChange} required />
                    </div>
                    <div className="userInput">
                        <textarea placeholder="message" id="message" value={message} onChange={messageChange} required />
                    </div>
                    <button type="submit" id="submitButton" onClick={handleSubmit}>
                        {button}
                    </button>
                </form>
                <svg ref={formCircleRef} xmlns="http://www.w3.org/2000/svg" width="800" height="800">
                    <g id="contactSirko">
                        <path id="contactCurve" d="M115.018 400c0-157.534 127.591-285.24 284.982-285.24 157.391 0 284.982 127.706 284.982 285.24S557.391 685.24 400 685.24c-157.391 0-284.982-127.706-284.982-285.24z" fill="none"/>
                        <text>
                            <textPath xlinkHref="#contactCurve">
                                get in touch.
                            </textPath>
                        </text>
                    </g>
                </svg>
            </div>
            <div ref={otherInfoRef} id="infoContainer">
                <p onClick={changeMyEmail}>{myEmail}</p>
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
                <svg ref={infoCircleRef} xmlns="http://www.w3.org/2000/svg" width="800" height="800">
                    <g id="contactSirko">
                        <path id="contactCurve" d="M115.018 400c0-157.534 127.591-285.24 284.982-285.24 157.391 0 284.982 127.706 284.982 285.24S557.391 685.24 400 685.24c-157.391 0-284.982-127.706-284.982-285.24z" fill="none"/>
                        <text>
                            <textPath xlinkHref="#contactCurve">
                                other things.
                            </textPath>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Contact