import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { showResultHistoryItem } from '../../redux/actions/actions';
import { PropsDisplay, State } from '../../types';

import './Display.css';

const Display: FC<PropsDisplay> = ({history}) => {

    const dispatch: any = useDispatch();
    const [showEqual, setShowEqual] = useState<boolean>(true);
    const [lastValue, setLastValue ]= useState<string>("");
    const result: string = useSelector((state: State) => state.calc.result);
    const value: string = useSelector((state: State) => state.calc.value);

    useEffect(() => {
        if(result === "") return;
        setShowEqual(false);
        setLastValue(history[0]);
    }, [result, history]);

    return (
        <div className="display-wrapper">
            <div className="display-history">
                <span
                    className="display-last_value"
                    data-testid="last-value"
                    onClick={() => dispatch(showResultHistoryItem(true, lastValue))}
                >{lastValue}
                </span>
            </div>
            <div className="display-value">{value}</div>
            <CSSTransition
                in={showEqual}
                timeout={300}
                classNames="equal"
                unmountOnExit
                onExited={() => setShowEqual(true)}
            >
                <div className="display-equal">{result === "" ? "= 0" : `= ${result}`}</div>
            </CSSTransition>
        </div>
    );
};

export default Display;
