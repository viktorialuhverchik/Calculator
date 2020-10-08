import { TOGGLE_HISTORY, TOGGLE_THEME } from "../types";
import { AppState, AppActionTypes } from '../types';

const initialState: AppState = {
    isShowHistory: false,
    theme: "light"
};

export const appReducer = (state = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case TOGGLE_HISTORY:
            state.isShowHistory = action.isShowHistory;
            return state;
        case TOGGLE_THEME:
            if (action.theme === "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            };
            return state;
        default: 
            return state;
    };
};
