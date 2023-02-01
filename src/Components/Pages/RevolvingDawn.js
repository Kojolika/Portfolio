import React from 'react';
import '../../Styles/revolvingDawn.css';
import Title from '../Atoms/Title';
import fightImage from '../../Media/RD_Fight_Image.png';

function RevolvingDawn() {
    return (
        <div className='projectContainer'>
            <div className='title'>
                <span>Revolving Dawn (WIP)</span>
            </div>
            <span className='subTitle'>Tools/Languages:</span>
            <p>Unity, C#, Github</p>
            <span className='subTitle'>Design Patterns</span>
            <p>MVC, State, Observer, Chain of Responsibility, Factory</p>
            <span className='subTitle'>Description:</span>
            <p>If you've played games like Slay the Spire, Monster Train or 
                    Across the Obelisk then this genre should be familiar to you. The main gameplay loop is building a deck of cards as you fight through
                    monsters, bosses and come across events. What makes this game unique is the mana system, it is not the same mana system as a traditonal card game.
                    Each card can be powered up with mana to gain a powerful affect! Use your mana wisely as you only have a few to spare.
                    In addition to this, the time of the day greatly alters what mana can be used. During night time, more powerful affects are avaliable to you. 
            </p>
            <span className='subTitle'>Images:</span>
            <img className='images' src={fightImage}></img>
        </div>
    )
}

export default RevolvingDawn;