import { CalcState, Element } from '../types';

let regExp = new RegExp(/[+-/*]/);

export const checkInputValue = (state: CalcState, value: string) => {
    let isOperator: boolean = regExp.test(value);
    if (state.value === "" && state.result === "") {
        if (isOperator || value === "%") {
            value = `0${value}`;
        };
        state.value = `${state.value}${value}`;
    } else if (state.result !== "" && isOperator) {
        state.value = `${state.result}${value}`;
    } else if (state.value !== "" && value === "%") {
        state.value = `${state.value}${value}`;
        let lastSymbol: string = state.value.slice(state.value.length - 2, state.value.length - 1);
        if (regExp.test(lastSymbol)) {
            let updatedValue: string = state.value.slice(0, state.value.length - 1);
            state.value = `${updatedValue}0${value}`;
        };
    } else {
        state.value = `${state.value}${value}`;
    };
    return state.value;
};

export const calculate = (state: CalcState) => {
    let valuesForCalculate: any = [];
    let element: Element = {
        value: "",
        operator: ""
    };

    for (let index = 0; index < state.value.length; index++) {
        let symbol: string = state.value[index];
        if (regExp.test(symbol)) {
            if (element.value === "") {
                element.operator = symbol;
                continue;
            };
            valuesForCalculate.push(element);
            element = {
                value: "",
                operator: symbol
            };
            continue;
        };
        if (symbol === "%") {
            let percentValue = parseInt(element.value) / 100;
            if (valuesForCalculate.length === 0) {
                element.value = `${percentValue}`;
                continue;
            };
            let lastNumber: number = parseInt(valuesForCalculate[valuesForCalculate.length - 1].value);
            let newLastNumber: number = 0;
            switch(element.operator) {
                case "+":
                    newLastNumber = lastNumber + percentValue * lastNumber;
                    break;
                case "-":
                    newLastNumber = lastNumber - percentValue * lastNumber;
                    break;
                case "*":
                    newLastNumber = lastNumber * percentValue;
                    break;
                case "/":
                    newLastNumber = lastNumber / percentValue;
                    break;
            };
            valuesForCalculate[valuesForCalculate.length - 1].value = `${newLastNumber}`;
            element.value = "";
            continue;
        };
        element.value += symbol;
    }; 
    if (element.value) {
        valuesForCalculate.push(element);   
    };
    let result: number = eval(valuesForCalculate.map((item: Element) => item.operator + item.value).join(""));
    return state.result = `${result}`;
};

export const saveHistory = (state: CalcState) => {
    let history: string = `${state.value}=${state.result}`;
    if(history !== "=") {
        state.history.unshift(history);
        localStorage.setItem("history", JSON.stringify(state.history));
    };
    return state.history;
};
