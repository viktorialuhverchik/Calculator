import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { State } from '../../types';

import './Display.css';

const Display: FC = () => {

    const [showEqual, setShowEqual] = useState<boolean>(true);
    const result: string = useSelector((state: State) => state.calc.result);
    const value: string = useSelector((state: State) => state.calc.value);

    useEffect(() => {
        if(result === "") return;
        setShowEqual(false);
    }, [result]);

    return (
            <div className="display-wrapper">
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
