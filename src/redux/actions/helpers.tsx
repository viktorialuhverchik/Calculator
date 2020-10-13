import { CalcState, Element } from '../types';

let regExp = new RegExp(/[+-/*]/);

export const checkInputValue = (state: CalcState, value: string) => {
    let numbers: RegExpExecArray | null = (/\d/g).exec(value);
    if (state.value === "" && state.result === "" && !numbers) {
        state.value = `0${value}`;
    } else if (state.result !== "" && !numbers) {
        state.value = `${state.result}${value}`;
    } else {
        state.value = `${state.value}${value}`;
    };
    return state.value;
};

export const calculate = (state: CalcState) => {
    let valueForCalculate: any = [];
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

            valueForCalculate.push(element);
            element = {
                value: "",
                operator: symbol
            };
            continue;
        };

        if (symbol === "%") {
            let percentValue = parseInt(element.value) / 100;
            if (valueForCalculate.length === 0) {
                element.value = `${percentValue}`;
                continue;
            };

            let lastNumber: number = parseInt(valueForCalculate[valueForCalculate.length - 1].value);
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
            valueForCalculate[valueForCalculate.length - 1].value = `${newLastNumber}`;
            element.value = "";
            continue;
        };
        element.value += symbol;
    }; 
    if (element.value) {
        valueForCalculate.push(element);   
    };
    let result: string = eval(valueForCalculate.map((item: Element) => item.operator + item.value).join(""));
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
