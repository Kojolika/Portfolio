import React from 'react';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import '../../Styles/contentBubble.css';

function ContentBubble(props) {

    return (
        <ColorThemeContext.Consumer>
            {(value) => {
                return (
                    <li id={props.id} onClick={props.onClick} className='contentContainer' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                        {props.children}
                    </li>);
            }}
        </ColorThemeContext.Consumer>
    );

}

export default ContentBubble;