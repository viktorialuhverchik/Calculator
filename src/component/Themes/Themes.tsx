import React, { FC, useEffect, useState } from 'react';

import './Themes.css';

const themes = {
    light: "light",
    dark: "dark"
}

const Themes: FC = () => {

    const[theme, setTheme] = useState(localStorage.getItem("themes") || themes.light);

    const toggleTheme = (theme: string) => {
        if (theme === themes.light) {
            setTheme(themes.dark);
        } else if (theme === themes.dark) {
            setTheme(themes.light);
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === themes.light) {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("dark-theme");
        };
    }, [theme]);

    return (
        <div className="themes">
            {theme === themes.light ? <img alt="sun" src="/icons/sun.png" onClick={() => toggleTheme(theme)}/> : <img alt="moon" src="/icons/moon.png" onClick={() => toggleTheme(theme)}/>}
        </div>
    )

};

export default Themes;