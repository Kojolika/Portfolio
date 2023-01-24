import React, {useContext} from 'react';
import ContentBubble from '../Modules/ContentBubble';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import '../../Styles/backgroundSelf.css';
import '../../Styles/home.css';

function Home() {
    var colorTheme = useContext(ColorThemeContext);
    var color1 = colorTheme.colors[2];
    var color2 = colorTheme.colors[4];

    return (
        <div className='homeMainArea'>
            <ContentBubble id="selfImage">
                <div className='selfText' >
                    <div className='name' style={{ backgroundColor: color1 }}>
                        <span>Hello, I'm Andrew.</span>
                        <br />
                        <span>A software developer.</span>
                    </div>
                    <div className='description' style={{ backgroundColor: color2 }}>
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
}

export default Home;