import {
    CLEAR_VALUE,
    DELETE_LAST,
    EQUALL,
    INPUT_VALUE
} from "../types";

export const handleClickNumber = (value: number) => ({
    type: INPUT_VALUE,
    value
});

export const handleClick = (value: string) => ({
    type: INPUT_VALUE,
    value
});

export const calculate = () => ({
    type: EQUALL
});

export const clearData = () => ({
    type: CLEAR_VALUE
});

export const deleteLast = () => ({
    type: DELETE_LAST
});
