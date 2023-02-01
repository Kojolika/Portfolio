import React from 'react';
import ColorThemeContext from '../../Contexts/ColorThemeContext';
import '../../Styles/title.css';

function Title(props) {

    return (
        <ColorThemeContext.Consumer>
            {(value) => {
                return (
                    <div id={props.id} className='titleContainer' style={{ backgroundColor: value.colorTheme.colors[2] }}>
                        {props.children}
                    </div>);
            }}
        </ColorThemeContext.Consumer>
    );

}

export default Title;