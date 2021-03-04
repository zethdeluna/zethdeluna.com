import React from 'react';
import './Projects.scss';
import bbth_iPhone from '../../images/bbth_iPhone.png';

function Projects() {
    return (
        <div id="projectsContainer">
            <div id="projectsPage"/>
            <div id="projectsTitle">
                <h2>
                    Projects
                    <br/><hr/>
                </h2>
                <span>
                    I'm a self-taught web developer who is eager to learn!
                    <br/>
                    Here are some projects that I worked on to help me 
                    <br/> 
                    dive deeper into the world of web development & design.
                </span>
            </div>
            <div id="project1Container">
                <img src={bbth_iPhone} alt="iPhone"/>
                <span>
                    <h3>
                        Bon Bon Tea House
                    </h3>
                    <p>
                        Over the past <em>5-ish</em> years, I've spent my time at this
                        local tea shop both as a college student & as a barista. They 
                        don't have an official website yet, but here's what I think
                        would be a great start to their internet presence.
                    </p>
                    <a href="https://zethdeluna.github.io/bbth/" 
                    target="_blank"
                    rel="noreferrer">
                        Check out the website
                    </a>
                </span>
            </div>
            
        </div>
    )
}

export default Projects