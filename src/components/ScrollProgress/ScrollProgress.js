import React, { useRef, useEffect } from 'react';
import './ScrollProgress.scss';

function ScrollProgress() {
    const scrollBarRef = useRef();

    useEffect(() => {
        const scrollBar = scrollBarRef.current;

        const progress = () => {
            var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight;
            var scrollProgress = (windowScroll / scrollHeight) * 100;
            scrollBar.style.height = scrollProgress + "%";
        }

        document.addEventListener("scroll", progress);
})

    return (
        <div className="scroll-container">
            <div ref={scrollBarRef} className="scroll-bar"></div>
        </div>
    )
}

export default ScrollProgress;