import React from 'react';
import ContentBubble from '../Modules/ContentBubble';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import '../../Styles/backgroundSelf.css';
import '../../Styles/home.css';

function Home() {
    return (
        <ColorThemeContext.Consumer>
            {(value) => {
                return (
                    <div className='homeMainArea'>
                        <ContentBubble id="selfImage">
                            <div className='selfText' >
                                <div className='name' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                                    <span>Hello, I'm Andrew.</span>
                                    <br />
                                    <span>A software developer.</span>
                                </div>
                                <div className='description' style={{ backgroundColor: value.colorTheme.colors[1] }}>
                                    <span className='para1' style={{ backgroundColor: value.colorTheme.colors[2] }}>I'm a recent graduate from the University of Windsor that is actively looking for work.</span>
                                    <br></br>
                                    <span className='para2'  style={{ backgroundColor: value.colorTheme.colors[3] }}>I have professional experience with machine learning applications, and I enjoy coding in my free time to learn and train my software developer skills (on applications such as this one!).</span>
                                    <br></br>
                                    <span className='para3'  style={{ backgroundColor: value.colorTheme.colors[4] }}>Contact me if you're interested in hiring me!</span>
                                </div>
                            </div>
                            <div className='imageSpace'>
                            </div>
                        </ContentBubble>
                    </div>
                );

            }}
        </ColorThemeContext.Consumer>
    );
}

export default Home;