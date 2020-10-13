import {
    AppActionTypes,
    CalcActionTypes,
    CLEAR_VALUE,
    CREATE_HISTORY,
    DELETE_LAST,
    EQUALLY,
    INPUT_VALUE,
    TOGGLE_HISTORY,
    TOGGLE_THEME,
    SHOW_HISTORY,
    CHANGE_THEME
} from "../types";

export const handleClick = (value: string): CalcActionTypes => ({
    type: INPUT_VALUE,
    value
});

export const calculate = (): CalcActionTypes => ({
    type: EQUALLY
});

export const clearValue = (): CalcActionTypes => ({
    type: CLEAR_VALUE
});

export const deleteLast = (): CalcActionTypes => ({
    type: DELETE_LAST
});

export const toggleShowHistory = (isShowHistory: boolean): AppActionTypes => ({
    type: TOGGLE_HISTORY,
    isShowHistory: !isShowHistory
});

export const createHistory = (history: string[]): CalcActionTypes => ({
    type: CREATE_HISTORY,
    history
});

export const showResultHistoryItem = (isShowHistory: boolean, history: string) => {
    return (dispatch: any) => {
        dispatch(clearValue());
        dispatch(toggleShowHistory(isShowHistory));
        let value = history.split("=")[0];
        let result = history.split("=")[1];
        dispatch({
            type: SHOW_HISTORY,
            value,
            result
        });
    };
};

export  const toggleTheme = (theme: string): AppActionTypes => ({
    type: TOGGLE_THEME,
    theme
});

export  const changeTheme = (theme: string): AppActionTypes => ({
    type: CHANGE_THEME,
    theme
});
