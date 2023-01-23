import React from 'react';
import '../../Styles/contentBubble.css';

function ContentBubble (props){
    return <div id={props.id} className='contentContainer'>{props.children}</div>;
}

export default ContentBubble;