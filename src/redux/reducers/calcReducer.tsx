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

const initialState: CalcState = {
    value: "",
    result: "",
    history: []
};

export const calcReducer = (state = initialState, action: CalcActionTypes) => {
    switch (action.type) {
        case INPUT_VALUE:
            if (state.value === "") {
                state.value = action.value;
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
                if (state.value.length !== 0) {
                    let result: string = eval(state.value);
                    state.result = result;
                };
                if(state.history.length === 11) {
                    state.history.pop();
                }
                let history: string = `${state.value}=${state.result}`;
                if(history !== "=") {
                    state.history.unshift(history);
                    localStorage.setItem("history", JSON.stringify(state.history));
                }
            } catch(error) {
                console.log(error);
                state.result = "Check you value!";
            };
            return {...state, value: ""};
        case CREATE_HISTORY:
            return {...state, history: action.history};
        case SHOW_HISTORY:
            return {...state, value: action.value, result: action.result};;
        default: 
            return state;
    };
};
