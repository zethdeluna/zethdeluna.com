import React from 'react';

function Cursor() {
    const onMouseMove = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    }

    const links = document.querySelectorAll('a')

    links.forEach(link => {
        const cursor = document.querySelector("#cursor")
        link.addEventListener("mouseover", e => {
            cursor.style.transform = "translate(-50%, -50%) scale(1.4)"
        })
        link.addEventListener("mouseout", e => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)"
        })
    })

    window.addEventListener("mousemove", onMouseMove);

    return <div id="cursor" className="fade-in"/>
}

export default Cursor