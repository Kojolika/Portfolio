import React from 'react';
import ColorTheme from '../Atoms/ColorTheme';
import '../../Styles/colorThemeMenu.css';

function ColorThemeMenu (props){
    const colorThemes = require("../../Data/colorThemes.json").themes;
    const listOfThemes = colorThemes.map((theme,index) =>
        <ColorTheme key={theme.name} theme={index}></ColorTheme>
    );
    return (
    <div className='colorThemeContainer'>
        <span id='themesTitle'>Themes</span>
        <ul className='colorList'>{listOfThemes}</ul>
    </div>
    );
}

export default ColorThemeMenu;