import React from 'react';
import ContentBubble from '../Modules/ContentBubble';
import '../../Styles/backgroundSelf.css';
import '../../Styles/home.css';

function Home() {

    return (
        <div className='homeMainArea'>
            <ContentBubble id="selfImage">
                <div className='selfText'>
                    <div className='name'>
                        <span>Hello, I'm Andrew.</span>
                        <br />
                        <span>A software developer.</span>
                    </div>
                    <div className='description'>
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