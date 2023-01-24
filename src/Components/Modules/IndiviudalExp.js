import React from 'react';
import "../../Styles/individualExperience.css";

function IndiviudalExp (props){
    return (
    <div>
        <div className='companyName'>{props.company}</div>
        <div className='title'> {props.title}</div>
        <div className='date'>
            {props.startDate} - {props.endDate}
        </div>
        <div className='companyDescription'>{props.description}</div>
    </div>
    );
}

export default IndiviudalExp;