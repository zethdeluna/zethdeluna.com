import React from 'react';
import './Navigation.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import frontendMentor from '../../images/frontend-mentor.png';

function Navigation() {
    return (
        <div>
            {/* navigation */}
            <div id="navbar">
                <h1 id="myName"><AnchorLink className="AnchorLink" href="#helloContainer">Zeth De Luna</AnchorLink></h1>
                <ul>
                    <li>
                        <AnchorLink className="AnchorLink" href="#projectsContainer">projects</AnchorLink>
                    </li>
                    <li><a href="https://github.com/zethdeluna" target="_blank" rel="noreferrer"><i className="fab fa-github-alt"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/zethdeluna/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.frontendmentor.io/profile/zethdeluna" target="_blank" rel="noreferrer"><img id="frontendMentorLogo" src={frontendMentor} alt="Frontend Mentor logo"/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation