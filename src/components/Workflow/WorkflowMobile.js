import React, { useRef, useEffect } from 'react';
import './WorkflowMobile.scss';
import OpenerMobile from './Opener/OpenerMobile';
import BreakdownMobile from './Breakdown/BreakdownMobile';
import FoundationMobile from './Foundation/FoundationMobile';
import IntegrationMobile from './Integration/IntegrationMobile';
import DetailMobile from './Detail/DetailMobile';

function WorkflowMobile() {
    // vertical text scroller
    // ----------------------------
    const titleRef = useRef();

    useEffect(() => {
        const content = "<p>workflow</p>";
        const title = titleRef.current;

        for (let i = 0; i < 100; i++) {
            title.innerHTML += content;
        }
    })
    // ----------------------------

    return (
        <div id="workflow-container-mobile">
            <div className="workflow-background-mobile">
                <div className="line"></div>
                <div className="title-marquee">
                    <div className="title-content">
                        <span ref={titleRef} className="title"></span>
                    </div>
                </div>
            </div>
            <OpenerMobile/>
            <BreakdownMobile/>
            <FoundationMobile/>
            <IntegrationMobile/>
            <DetailMobile/>
        </div>
    )
}

export default WorkflowMobile;