import React, { useContext } from 'react';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import '../../Styles/contentBubble.css';

function ContentBubble(props) {
    var colorTheme = useContext(ColorThemeContext);
    var color = colorTheme.colors[1];

    console.log(" in content bubble color: " + color);
    return (
        <div id={props.id} className='contentContainer' style={{ backgroundColor: color }}>
            {props.children}
        </div>
    );

}

export default ContentBubble;