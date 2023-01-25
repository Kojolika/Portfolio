import React, { useContext } from 'react';
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
                                {console.log(value.colorTheme.colors[2])}
                                <div className='name' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                                    <span>Hello, I'm Andrew.</span>
                                    <br />
                                    <span>A software developer.</span>
                                </div>
                                <div className='description' style={{ backgroundColor: value.colorTheme.colors[4] }}>
                                    <span>I'm a recent graduate that is looking for work.</span>
                                    <br></br>
                                    <span>This is a short paragraph of things I've worked on.</span>
                                    <br></br>
                                    <span>This is a short paragraph of things I've worked on.</span>
                                    <br></br>
                                    <span>This is a short paragraph of things I've worked on.</span>
                                    <br></br>
                                    <span>This is a short paragraph of things I've worked on.</span>
                                </div>
                            </div>
                        </ContentBubble>
                    </div>
                );

            }}
        </ColorThemeContext.Consumer>
    );
}

export default Home;