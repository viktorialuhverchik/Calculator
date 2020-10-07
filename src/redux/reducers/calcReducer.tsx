import {
    INPUT_VALUE,
    CLEAR_VALUE,
    DELETE_LAST,
    EQUALL
} from '../types';

interface CalcState {
    value: string,
    result: string,
    history: string[]
}

const initialState: CalcState = {
    value: "",
    result: "",
    history: []
};

export const calcReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INPUT_VALUE:
            if (state.value === "") {
                state.value = action.value;
            } else {
                state.value = `${state.value}${action.value}`;
            };
            return state;
        case CLEAR_VALUE:
            state.value = "";
            state.result = "0"
            return state;
        case DELETE_LAST:
            state.value = `${state.value}`;
            let updateState: string = state.value.slice(0, -1);
            if(updateState.length === 0) {
                state.value = "";
                state.result = "0";
            } else {
                state.value = updateState;
            };
            return state;
        case EQUALL:
            try {
                if (state.value.length !== 0) {
                    state.history.push(state.value);
                    let result = eval(state.value);
                    state.result = result;
                    state.value = `${result}`;
                };
            } catch(error) {
                console.log(error);
                state.result = "Check you value!";
            }
            return state;
        default: 
            return state;
    };
};