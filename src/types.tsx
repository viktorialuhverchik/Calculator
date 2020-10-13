export interface State {
    app: {
        isShowHistory: boolean
        theme: string
    },
    calc: {
        value: string
        result: string
        history: string[]
    }
};

export interface PropsHistory {
    isShowHistory: boolean
    history: string[]
};

export interface PropsCalculator{
    isShowHistory: boolean
    history: string[]
    theme: string
};

export interface PropsDisplay{
    history: string[]
};

export interface PropsTheme{
    theme: string
};

export enum Numbers {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Zero = "0",
};

export enum Operations {
    Plus = "+",
    Minus = "-",
    Multiplication = "*",
    Division = "/",
    Percent = "%",
    Equally = "=",
    Dot = "."
};
