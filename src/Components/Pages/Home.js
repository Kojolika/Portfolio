import React from 'react';
import ContentBubble from '../Modules/ContentBubble';
import '../../Styles/home.css';
import me from '../../Media/headshot.jpg';
import github from '../../Media/GitHub_logo.png';
import linkedIn from '../../Media/Linkedin-logo.png';

import {
    Link
} from 'react-router-dom';

function Home() {
    return (
        <div className='homeMainArea'>
            <div className='topRow'>
                <img id="image" src={me}></img>
                <div id="introMessageContainer">
                    <div id="mainPageTitle">
                        <span id='name'>Andrew Myshok</span>
                        <span id='job'>Software Developer</span>
                    </div>

                    <div className='socialMediaIcons'>
                        <a className='logoContainer' href="https://github.com/Kojolika">
                            <img id="githubLogo2" src={github} />
                        </a>
                        <a className='logoContainer' href="https://www.linkedin.com/in/andrew-myshok-55106822a/">
                            <img id="linkedInLogo2" src={linkedIn} />
                        </a>
                    </div>

                    <div id='contact'>
                        <Link to="/contact" id='contactText'>
                            Contact me!
                        </Link>
                    </div>
                </div>
            </div>
            <ContentBubble id='bottomRows'>
                <div id='row2'>
                    <div className='description' >
                        <span className='para'>
                            I'm a recent graduate from the University of Windsor that is actively looking for work.
                        </span>
                        <span className='para' >
                            I have professional experience with machine learning applications, and I enjoy coding in my free time to learn and improve my software developer skills (on applications such as this one!).
                        </span>
                    </div>
                </div>
                <div id='row3'>
                    <div id='skills'>
                        <div className='languages' >
                            Python, C#, C++, Java, C, CSS, HTML, JavaScript, PHP, SQL
                        </div>
                        <div className='languages' >
                            React, Redux, Node, AWS, EF Core, Unity, Agile, MongoDB, JUnit, Limitless
                        </div>
                    </div>
                </div>
            </ContentBubble>
        </div>
    );
}

export default Home;