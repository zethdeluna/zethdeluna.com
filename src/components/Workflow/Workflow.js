import React, { useRef, useEffect } from 'react';
import './Workflow.scss';
import Opener from './Opener/Opener';
import Breakdown from './Breakdown/Breakdown';
import Foundation from './Foundation/Foundation';
import Integration from './Integration/Integration';
import Detail from './Detail/Detail';

function Workflow() {
    // vertical text scroller
    // **********************
    const marqueeTextRef = useRef();

    useEffect(() => {
        const content = "<p>workflow</p>";
        const marqueeText = marqueeTextRef.current;

        for (let i = 0; i < 70; i++) {
            marqueeText.innerHTML += content;
        }
    });
    // **********************

    return (
        <div id="workflow-container">
            <div className="workflow-background">
                <div className="line"></div>
                <div className="title-marquee">
                    <div className="title-content">
                        <span ref={marqueeTextRef} className="workflow-title"></span>
                    </div>
                </div>
            </div>
            <Opener/>
            <Breakdown/>
            <Foundation/>
            <Integration/>
            <Detail/>
        </div>
    )
}

export default Workflow;