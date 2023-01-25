import { createContext } from 'react';

const colorThemes = require("../Data/colorThemes.json");
var colorTheme = colorThemes.themes[0];

const setColorTheme = (themeNumber) =>
{
    colorTheme = colorThemes.themes[themeNumber];
    document.body.style.backgroundColor = colorTheme.colors[0];
}

export const ColorThemeContext = createContext(colorTheme);

export const ColorThemeProvider = (props) =>
{
    return(
        <ColorThemeContext.Provider value={{colorTheme, setColorTheme}}>
            {props.children}
        </ColorThemeContext.Provider>
    )
}

export default ColorThemeContext;