import React from 'react';
import ContentBubble from '../Modules/ContentBubble';
import IndiviudalExp from '../Modules/IndiviudalExp';
import '../../Styles/experience.css';


function Experience() {
    const experience = require("../../Data/experience.json");
    const experienceArray = experience.experiences;

    const listOfExperiences = experienceArray.map((exp) =>
        <ContentBubble key={exp.startDate} >
            <IndiviudalExp
                company={exp.company}
                title={exp.title}
                startDate={exp.startDate}
                endDate={exp.endDate}
                description={exp.description}
            />
        </ContentBubble>
    );

    return (
        <ul className='expList'>
            {listOfExperiences}
        </ul>
    );
}

export default Experience;