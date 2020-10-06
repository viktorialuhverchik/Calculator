import { INPUT_DATA } from '../types';

const initialState = 0;

export const calcReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INPUT_DATA:
            return action.payload;
        default: 
            return state;
    };
};