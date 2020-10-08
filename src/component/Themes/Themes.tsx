import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actions/actions';
import { State } from '../../types';

import './Themes.css';

const Themes: FC = () => {

    const dispatch: any = useDispatch();
    const theme: string = useSelector((state: State) => state.app.theme);

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        };
    }, [theme]);

    return (
        <div className="themes">
            {theme === "light" ?
                <i className="fa fa-moon-o" aria-hidden="true" onClick={() => dispatch(toggleTheme(theme))}></i> :
                <img alt="sun" src="/icons/sun.png" onClick={() => dispatch(toggleTheme(theme))}/>
            }
        </div>
    );
};

export default Themes;
