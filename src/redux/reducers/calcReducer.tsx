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
            let numbers: RegExpExecArray | null = (/\w/g).exec(action.value);
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
                let percent: RegExpExecArray | null = (/%/g).exec(state.value);
                let plus: RegExpExecArray | null = (/\+/g).exec(state.value);
                if (state.value.length !== 0) {
                    if(percent !== null && plus !== null) {
                        let indexPercent: number = percent["index"];
                        let indexPlus: number = plus["index"];
                        let valuePercentLeft = +state.value.slice(indexPlus + 1, indexPercent);
                        let valuePercentRight = +state.value.slice(0, indexPercent);
                        let valueForCalcLeft = +state.value.slice(0, indexPlus);
                        let valueForCalcRight = +state.value.slice(indexPercent + 2, state.value.length);
                        if (valueForCalcLeft) {
                            let calculation = valueForCalcLeft + (valueForCalcLeft * valuePercentLeft)/100;
                            state.result = `${calculation}`;
                        } else {
                            let calculation = valueForCalcRight + (valueForCalcRight * valuePercentRight)/100;
                            state.result = `${calculation}`;
                        };
                    } else {
                        let result: string = eval(state.value);
                        state.result = result;
                    };
                };
                let history: string = `${state.value}=${state.result}`;
                if(history !== "=") {
                    state.history.unshift(history);
                    localStorage.setItem("history", JSON.stringify(state.history));
                };
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

// let minus: RegExpExecArray | null = (/-/g).exec(state.value);
// let division: RegExpExecArray | null = (/\//g).exec(state.value);
// let multiplication: RegExpExecArray | null = (/\*/g).exec(state.value);
// if(numbers !== null) {
//     console.log(numbers["input"]);
// };
// if(minus !== null) {
//     let indexMinus: number = minus["index"];
//     console.log(indexMinus);
// };
// if(division !== null) {
//     let indexDivision: number = division["index"];
//     console.log(indexDivision);
// };
// if(multiplication !== null) {
//     let indexMultiplication: number = multiplication["index"];
//     console.log(indexMultiplication);
// };
