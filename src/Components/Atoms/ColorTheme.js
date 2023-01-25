import React from 'react';
import '../../Styles/colorTheme.css';
import ColorThemeContext from '../../Contexts/ColorThemeContext';

function ColorTheme(props) {
    const colorThemes = require("../../Data/colorThemes.json");
    const theme = props.theme;
    const colorTheme = colorThemes.themes[theme];
    return (
        <ColorThemeContext.Consumer>
            {(value) => {
                return (
                    <li>
                        <div className='colorContainer' onClick={() => { value.setColorTheme(theme)}}>
                            <div style={{ backgroundColor: colorTheme.colors[0] }}></div>
                            <div style={{ backgroundColor: colorTheme.colors[1] }}></div>
                            <div style={{ backgroundColor: colorTheme.colors[2] }}></div>
                            <div style={{ backgroundColor: colorTheme.colors[3] }}></div>
                            <div style={{ backgroundColor: colorTheme.colors[4] }}></div>
                        </div>
                    </li>
                );
            }}
        </ColorThemeContext.Consumer>
    );
}

export default ColorTheme;