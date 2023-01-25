import { createContext, useState } from 'react';

const colorThemes = require("../Data/colorThemes.json").themes;
const color = colorThemes[0];
export const ColorThemeContext = createContext(color);

export const ColorThemeProvider = (props) => {
    
    const [colorTheme, setColorTheme] = useState(color);
    
    const changeColorTheme = (themeNumber) => {
        setColorTheme(colorThemes[themeNumber]);
        document.body.style.backgroundColor = colorThemes[themeNumber].colors[0];
    }

    return (
        <ColorThemeContext.Provider value={{ colorTheme, changeColorTheme }}>
            {props.children}
        </ColorThemeContext.Provider>
    )
}

export default ColorThemeContext;