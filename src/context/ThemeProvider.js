import React, { createContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from "../compoents/theme/globelThemeStyle";

const themeColours = {
    light: lightTheme,
    dark: darkTheme,
};
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeName, setThemeName] = useState("dark")

    useEffect(() => {
       setTheme(themeName)
    }, [themeName])

    const setTheme = (name) => {
        const keys = Object.keys(themeColours[name]);
        keys.map((key) => {
            const constructVar = `--${key}`
            document.body.style.setProperty(constructVar, themeColours[name][key]);
            return false
        })
        setThemeName(name);
    }

    return (
        <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext