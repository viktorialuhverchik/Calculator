import { CalcState } from '../types';

export const calculatePrecent = (state: CalcState) => {
    let percent: RegExpExecArray | null = (/%/g).exec(state.value);
    let symbol: RegExpExecArray | null = (/[-+/*]/g).exec(state.value);
    if (state.value.length !== 0) {
        if(percent !== null && symbol !== null) {
            let indexPercent: number = percent["index"];
            let indexSymbol: number = symbol["index"];
            let valuePercent: number;
            if (indexSymbol < indexPercent) {
                valuePercent = +state.value.slice(indexSymbol + 1, indexPercent);
            } else {
                valuePercent = +state.value.slice(0, indexPercent);
            };
            let leftValueForCalc = +state.value.slice(0, symbol["index"]);
            let rightValueForCalc = +state.value.slice(symbol["index"] + 1, state.value.length);
            switch(symbol[0]) {
                case "+":
                    if (leftValueForCalc) {
                        let calculation = leftValueForCalc + (leftValueForCalc * valuePercent) / 100;
                        return state.result = `${calculation}`;
                    } else {
                        let calculation = rightValueForCalc + (rightValueForCalc * valuePercent) / 100;
                        return state.result = `${calculation}`;
                    };
                case "-":
                    if (leftValueForCalc) {
                        let calculation = leftValueForCalc - (leftValueForCalc * valuePercent) / 100;
                        return state.result = `${calculation}`;
                    } else {
                        let calculation = rightValueForCalc - (rightValueForCalc * valuePercent) / 100;
                        return state.result = `${calculation}`;
                    };
                case "*":
                    if (leftValueForCalc) {
                        let calculation = leftValueForCalc * valuePercent / 100;
                        return state.result = `${calculation}`;
                    } else {
                        let calculation = rightValueForCalc * valuePercent / 100;
                        return state.result = `${calculation}`;
                    };
                case "/":
                    if (leftValueForCalc) {
                        let calculation = leftValueForCalc * 100 / valuePercent;
                        return state.result = `${calculation}`;
                    } else {
                        let calculation = rightValueForCalc * 100 / valuePercent;
                        return state.result = `${calculation}`;
                    };
                default:
                    return;
            };
        } else if (percent !== null && symbol === null) {
            let indexPercent: number = percent["index"];
            let valuePercent: number = +state.value.slice(0, indexPercent);
            if (valuePercent) {
                return state.result = `${valuePercent / 100}`;
            };
        } else {
            let result: string = eval(state.value);
            return state.result = result;
        };
    };
};

export const saveHistory = (state: CalcState) => {
    let history: string = `${state.value}=${state.result}`;
    if(history !== "=") {
        state.history.unshift(history);
        localStorage.setItem("history", JSON.stringify(state.history));
    };
    return state.history;
};
