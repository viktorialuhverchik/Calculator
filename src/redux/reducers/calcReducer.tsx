import {
    INPUT_VALUE,
    CLEAR_VALUE,
    CREATE_HISTORY,
    SHOW_HISTORY,
    DELETE_LAST,
    EQUALLY,
    CalcActionTypes
} from '../types';
import { CalcState } from '../types';
import { calculate, checkInputValue, saveHistory } from '../actions/helpers';

const initialState: CalcState = {
    value: "",
    result: "",
    history: []
};

export const calcReducer = (state = initialState, action: CalcActionTypes) => {
    switch (action.type) {
        case INPUT_VALUE:
            checkInputValue(state, action.value);
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
        case EQUALLY:
            try {
                calculate(state);
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
