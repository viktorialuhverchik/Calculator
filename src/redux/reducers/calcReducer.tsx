import {
    INPUT_VALUE,
    CLEAR_VALUE,
    CREATE_HISTORY,
    SHOW_HISTORY,
    DELETE_LAST,
    EQUALL,
    CalcActionTypes
} from '../types';
import { CalcState } from '../types';
import { calculatePrecent, saveHistory } from '../actions/helpers';

const initialState: CalcState = {
    value: "",
    result: "",
    history: []
};

export const calcReducer = (state = initialState, action: CalcActionTypes) => {
    switch (action.type) {
        case INPUT_VALUE:
            let numbers: RegExpExecArray | null = (/\d/g).exec(action.value);
            if (state.value === "" && !numbers && state.result === "") {
                state.value = `0${action.value}`;
            } else if (!numbers && state.result !== "") {
                state.value = `${state.result}${action.value}`;
            } else {
                state.value = `${state.value}${action.value}`;
            };
            return {...state, result: ""};
        case CLEAR_VALUE:
            return {...state, value: "", result: ""};
        case DELETE_LAST:
            let updateState: string = state.value.slice(0, -1);
            if(updateState.length === 0) {
                state.value = "";
                state.result = "";
            } else {
                state.value = updateState;
            };
            return state;
        case EQUALL:
            try {
                calculatePrecent(state);
                saveHistory(state);
            } catch(error) {
                console.log(error);
                state.result = "Check you value!";
            };
            return {...state, value: ""};
        case CREATE_HISTORY:
            return {...state, history: action.history};
        case SHOW_HISTORY:
            return {...state, value: action.value, result: action.result};
        default: 
            return state;
    };
};
