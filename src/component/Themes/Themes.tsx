import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme, toggleTheme } from '../../redux/actions/actions';
import { PropsTheme } from '../../types';

import './Themes.css';

const Themes: FC<PropsTheme> = ({theme}) => {

    const dispatch: any = useDispatch();

    useEffect(() => {
        let theme = localStorage.getItem("theme");
        if(!theme) {
            return;
        }
        dispatch(changeTheme(theme));
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        };
    }, [dispatch, theme]);

    return (
        <div className="themes">
            {theme === "light" ?
                <i className="fa fa-moon-o" aria-hidden="true" onClick={() => dispatch(toggleTheme(theme))}></i> :
                <img alt="sun" className="icon-sun" src="/icons/sun.png" onClick={() => dispatch(toggleTheme(theme))}/>
            }
        </div>
    );
};

export default Themes;
