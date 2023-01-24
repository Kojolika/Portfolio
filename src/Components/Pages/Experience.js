import React from 'react';
import ContentBubble from '../Modules/ContentBubble';
import IndiviudalExp from '../Modules/IndiviudalExp';
import '../../Styles/experience.css';


function Experience() {
    const experience = require("../../Data/experience.json");

    return (
        <div className='expList'>
            <ContentBubble >
                <IndiviudalExp
                    company = {experience.experiences[0].company}
                    title = {experience.experiences[0].title}
                    startDate = {experience.experiences[0].startDate}
                    endDate = {experience.experiences[0].endDate}
                    description= {experience.experiences[0].description}>
                </IndiviudalExp>;
            </ContentBubble>
            <ContentBubble></ContentBubble>
            <ContentBubble></ContentBubble>
            <ContentBubble></ContentBubble>
        </div>
    );
}

export default Experience;