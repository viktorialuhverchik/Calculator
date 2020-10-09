import { CHANGE_THEME, TOGGLE_HISTORY, TOGGLE_THEME } from "../types";
import { AppState, AppActionTypes } from '../types';

const initialState: AppState = {
    isShowHistory: false,
    theme: "light"
};

export const appReducer = (state = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case TOGGLE_HISTORY:
            return {...state, isShowHistory: action.isShowHistory};
        case TOGGLE_THEME:
            if (action.theme === "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            };
            localStorage.setItem("theme", state.theme);
            return state;
        case CHANGE_THEME:
                return {...state, theme: action.theme};
        default: 
            return state;
    };
};
