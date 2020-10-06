import { INPUT_DATA } from "../types";

export const handleClick = (value: any) => {
    console.log(value);
    return ({
        type: INPUT_DATA,
        payload: value
    });
};
