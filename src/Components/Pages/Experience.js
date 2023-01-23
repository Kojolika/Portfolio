import React from 'react';
import ContentBubble from '../Modules/ContentBubble';
import IndiviudalExp from '../Modules/IndiviudalExp';

function Experience() {

    return (
        <div className='expList'>
            <ContentBubble >
                <IndiviudalExp
                    title="Ford Motor Company"
                    description="
                        • Developed a python program which was able to predict the cost of vehicle parts within the FEDEBOM Ford
                        database with respect to various attributes within the database.
                        • This involved the process of using Factor Analysis to convert categorical data into numerical data, allowing
                        the use of Multiple Linear Regression to predict the cost of the vehicle parts.
                        • This project was developed within an Agile team environment to facilitate collaboration between multiple
                        department managers and team members.">
                </IndiviudalExp>;
            </ContentBubble>
            <ContentBubble></ContentBubble>
            <ContentBubble></ContentBubble>
            <ContentBubble></ContentBubble>
        </div>
    );
}

export default Experience;