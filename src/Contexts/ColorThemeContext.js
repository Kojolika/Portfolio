import { createContext } from 'react';

const colorThemes = require("../Data/colorThemes.json");
const defaultColorTheme = colorThemes.themes[0];

export const ColorThemeContext = createContext(defaultColorTheme);

export const ColorThemeProvider = (props) =>
{
    return(
        <ColorThemeContext.Provider value={defaultColorTheme}>
            {props.children}
        </ColorThemeContext.Provider>
    )

}

export default ColorThemeContext;