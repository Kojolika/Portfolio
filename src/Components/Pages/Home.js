import React from 'react';
import ContentBubble from '../Modules/ContentBubble';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import '../../Styles/home.css';
import me from '../../Media/me1.jpg';
import github from '../../Media/GitHub_logo.png';
import linkedIn from '../../Media/Linkedin-logo.png';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

function Home() {
    return (
        <ColorThemeContext.Consumer>
            {(value) => {
                return (
                    <div className='homeMainArea'>
                        <div className='leftSide'>
                            <ContentBubble id="introMessageContainer">
                                <div className='description' style={{ backgroundColor: value.colorTheme.colors[1] }}>
                                    <div className='name' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                                        <span>Hello, I'm Andrew.</span>
                                        <br />
                                        <span>A software developer.</span>
                                    </div>
                                    <span className='para1' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                                        I'm a recent graduate from the University of Windsor that is actively looking for work.
                                    </span>
                                    <br />
                                    <span className='para2' style={{ backgroundColor: value.colorTheme.colors[3] }}>
                                        I have professional experience with machine learning applications, and I enjoy coding in my free time to learn and train my software developer skills (on applications such as this one!).
                                    </span>
                                    <br />
                                    <span className='para3' style={{ backgroundColor: value.colorTheme.colors[4] }}>

                                        <div className='tab'>
                                            <Link to="/contact" id='contact' className="tabName">
                                                Contact me
                                            </Link>
                                        </div> if you're interested in hiring me!
                                    </span>
                                </div>
                            </ContentBubble>
                            <ContentBubble id="experience">
                                <div className='title' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                                    Work experience
                                </div>
                                <div className='expDescription' style={{ backgroundColor: value.colorTheme.colors[4] }}>
                                    Over 3 internships at <b>Ford Motor Company</b>, I have developed <b>machine learning</b> applications using the Ford Bill of Materials database to extract vehicle requirements and predict the cost of parts in the database.
                                    I have also developed a <b>frontend dashboard</b> for the database.
                                </div>
                            </ContentBubble>
                            <ContentBubble id="education">
                                <div className='name' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                                    Education
                                </div>
                                <div className='languages' style={{ backgroundColor: value.colorTheme.colors[3] }}>
                                    <b>University of Windsor</b>
                                </div>
                                <div className='languages' style={{ backgroundColor: value.colorTheme.colors[4] }}>
                                    B.Sc. Honors Computer Science with Software Engineering Specialization
                                </div>
                                <div className='languages' style={{ backgroundColor: value.colorTheme.colors[0] }}>
                                    Graduated December 2022
                                </div>
                            </ContentBubble>
                        </div>
                        <div className='rightSide'>
                            <div className='imageContainer'>
                                <img className='image' src={me} />
                            </div>
                            <ContentBubble id="skills">
                                <div className='title' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                                    Skills
                                </div>
                                <div className='languages' style={{ backgroundColor: value.colorTheme.colors[3] }}>
                                    I am very knowledgable with: <b>Python, C#, C, C++, Java, Javascript, HTML, CSS, SQL</b>
                                </div>
                                <div className='tools' style={{ backgroundColor: value.colorTheme.colors[4] }}>
                                    Tools/Frameworks I'm comfortable with: <b>Github, AWS, MongoDB, React, and  JUnit</b>
                                </div>
                            </ContentBubble>
                        </div>
                    </div>
                );

            }}
        </ColorThemeContext.Consumer>
    );
}

export default Home;