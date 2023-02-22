import React,{useState} from 'react';

import ContentBubble from '../Modules/ContentBubble';
import ContentInside from '../Atoms/ContentInside';
import Title from '../Atoms/Title';
import RevolvingDawn from './RevolvingDawn';
import Portfolio from './Portfolio';

import '../../Styles/projects.css';

function Projects() {
    const [isPoppedUp, setPoppedUp] = useState(0);
    var PopUp;
    if(isPoppedUp == 0)
    {
        PopUp = <></>;
    }
    else if(isPoppedUp == 'revolvingDawn')
    {
        PopUp = 
        (<ContentBubble id='popUp'>
            <div className='header'>
                <div className='closeButton' 
                onClick={()=>{
                    setPoppedUp(0);
                    document.getElementById("designTestContainer").style.overflow = 'hidden';
                }}>
                x
                </div>
            </div> 
            <RevolvingDawn/>
        </ContentBubble>);
    }
    else if(isPoppedUp == 'portfolio')
    {
        PopUp = 
        (<ContentBubble id='popUp'>
            <div className='header'>
            <div className='closeButton' 
                onClick={()=>{
                    setPoppedUp(0);
                    document.getElementById("designTestContainer").style.overflow = 'hidden';
                }}>
                x
                </div>
            </div> 
            <Portfolio/>
        </ContentBubble>);
    }


    return (
        <div className='projectsMain'>
            <ContentBubble id='revolvingDawn' onClick={()=>{
                setPoppedUp('revolvingDawn')
                document.getElementById("designTestContainer").style.overflow = 'visible';
                }}>
                <Title>Revolving Dawn</Title>
                <ContentInside>
                    A roguelike deckbuilder game I am developing in Unity with C#, and verison control with Github.
                </ContentInside>
                <span className='clickTooltip'>Click for detailed information</span>
            </ContentBubble>
            <ContentBubble id='portfolio' onClick={()=>{
                setPoppedUp('portfolio');
                document.getElementById("designTestContainer").style.overflow = 'visible';
                }}>
                <Title>Portfolio Website</Title>
                <ContentInside>
                    A website portfolio created with React (and of course HTML, CSS, and JavaScript), hosted with AWS, CI/CD with AWS Amplify, and verison control with Github. 
                </ContentInside>
                <span className='clickTooltip'>Click for detailed information</span>
            </ContentBubble>
            {PopUp}
        </div>
    );
}

export default Projects;