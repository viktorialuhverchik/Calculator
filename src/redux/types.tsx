export const INPUT_VALUE = "INPUT_VALUE";
export const CLEAR_VALUE = "CLEAR_VALUE";
export const DELETE_LAST = "DELETE_LAST";
export const EQUALL = "EQUALL";
export const TOGGLE_HISTORY = "TOGGLE_HISTORY";
export const CREATE_HISTORY = "CREATE_HISTORY";
export const SHOW_HISTORY = "SHOW_HISTORY";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const CHANGE_THEME = "CHANGE_THEME";

export interface AppState {
    isShowHistory: boolean
    theme: string
};

export interface CalcState {
    value: string
    result: string
    history: string[]
};

interface HandleClick {
    type: typeof INPUT_VALUE
    value: string
};

interface Calculate {
    type: typeof EQUALL
};

interface ClearValue {
    type: typeof CLEAR_VALUE
};

interface DeleteLast {
    type: typeof DELETE_LAST
};

interface ToggleShowHistory {
    type: typeof TOGGLE_HISTORY
    isShowHistory: boolean
};

interface CreateHistory {
    type: typeof CREATE_HISTORY
    history: string[]
};

interface ShowHistory {
    type: typeof SHOW_HISTORY
    value: string
    result: string
};

interface ToggleTheme {
    type: typeof TOGGLE_THEME
    theme: string
};

interface ChangeTheme {
    type: typeof CHANGE_THEME
    theme: string
};

export type CalcActionTypes = HandleClick | Calculate | ClearValue | DeleteLast | CreateHistory | ShowHistory;
export type AppActionTypes = ToggleShowHistory | ToggleTheme | ChangeTheme;
