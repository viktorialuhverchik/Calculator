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
};

export interface PropsDisplay{
    history: string[]
};
