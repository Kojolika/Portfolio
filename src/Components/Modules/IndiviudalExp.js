import React from 'react';
import "../../Styles/individualExperience.css";

function IndiviudalExp (props){
    return (
    <div>
        <div className='companyName'>{props.title}</div>
        <div className='companyDescription'>{props.description}</div>
    </div>
    );
}

export default IndiviudalExp;