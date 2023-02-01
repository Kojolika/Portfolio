import React from 'react';
import ContentBubble from '../Modules/ContentBubble';
import '../../Styles/home.css';
import me from '../../Media/me1.jpg';
import github from '../../Media/GitHub_logo.png';
import linkedIn from '../../Media/Linkedin-logo.png';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import ContentInside from '../Atoms/ContentInside';

function Home() {
    return (
        <div className='homeMainArea'>
            <div className='leftSide'>
                <div className='imageContainer'>
                    <img className='image' src={me} />
                </div>
            </div>
            <div className='rightSide'>
                <ContentBubble id="introMessageContainer">
                    <div id="mainPageTitle">
                        <span>Hello, I'm Andrew.</span>
                        <span>A software developer.</span>
                    </div>
                    <div className='description' >
                        <span className='para'>
                            I'm a recent graduate from the University of Windsor that is actively looking for work.
                        </span>
                        <span className='para' >
                            I have professional experience with machine learning applications, and I enjoy coding in my free time to learn and train my software developer skills (on applications such as this one!).
                        </span>
                        <ContentInside>
                            <div className='languages' >
                                Python, C#, C, C++, Java, Javascript, HTML, CSS, SQL
                            </div>
                            <div className='tools' >
                                Github, AWS, MongoDB, React, and  JUnit
                            </div>
                        </ContentInside>
                    </div>

                    <div className='socialMediaIcons'>
                        <a className='logoContainer' href="https://github.com/Kojolika">
                            <img id="githubLogo2" src={github} />
                        </a>
                        <a className='logoContainer' href="https://www.linkedin.com/in/andrew-myshok-55106822a/">
                            <img id="linkedInLogo2" src={linkedIn} />
                        </a>
                    </div>
                    <div id='contactButton'>
                            <div>
                                <Link to="/contact" id='contact' className="tabName">
                                    Contact me!
                                </Link>
                            </div>
                        </div>
                </ContentBubble>


                {/*
                <ContentBubble id="experience">
                    <Title>
                        Work experience
                    </Title>
                    <ContentInside>
                        <div className='expDescription' >
                            Over three internships at <b>Ford Motor Company</b>, I have developed <b>machine learning</b> applications using the Ford Bill of Materials database to extract vehicle requirements and predict the cost of parts in the database.
                            I have also developed a <b>frontend dashboard</b> for the database.
                        </div>
                    </ContentInside>
                </ContentBubble>
                <ContentBubble id="education">
                    <Title>
                        Education
                    </Title>
                    <ContentInside>
                        <div className='languages' >
                            <b>University of Windsor</b>
                            <br></br>
                            B.Sc. Honors Computer Science with Software Engineering Specialization
                            <br></br>
                            Graduated December 2022
                        </div>
                    </ContentInside>
                </ContentBubble>
                */}
            </div>
        </div>
    );
}

export default Home;