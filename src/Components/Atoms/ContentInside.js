import React from 'react';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import '../../Styles/contentInside.css';

function ContentInside(props) {

    return (
        <ColorThemeContext.Consumer>
            {(value) => {
                return (
                    <div id={props.id} className='contentInsideContainer' style={{ backgroundColor: value.colorTheme.colors[3] }}>
                        {props.children}
                    </div>);
            }}
        </ColorThemeContext.Consumer>
    );

}

export default ContentInside;