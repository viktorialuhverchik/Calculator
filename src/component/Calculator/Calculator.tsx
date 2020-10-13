import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { calculate, clearValue, deleteLast, handleClick, toggleShowHistory } from '../../redux/actions/actions';
import Display from '../Display/Display';
import Themes from '../Themes/Themes';
import { Numbers, Operations, PropsCalculator } from '../../types';

import './Calculator.css';

const Calculator: FC<PropsCalculator> = ({isShowHistory, history, theme}) => {

    const dispatch: any = useDispatch();

    return (
        <div className="calculator container">
            <Themes theme={theme} />
            <Display history={history}/>
            <div className="buttons-wrapper">
                <div className="row">
                    <button
                        className="btn symbol"
                        data-testid="clear"
                        onClick={() => dispatch(clearValue())}
                    >C
                    </button>
                    <button
                        className="btn delete-icon_button"
                        data-testid="delete-last"
                        onClick={() => dispatch(deleteLast())}
                    >
                        <img alt="delete" src="/icons/delete.png" className="delete-icon" />
                    </button>
                    <button
                        className="btn symbol"
                        data-testid="percent"
                        onClick={() => dispatch(handleClick(Operations.Percent))}
                    >%
                    </button>
                    <button
                        className="btn symbol large"
                        data-testid="division"
                        onClick={() => dispatch(handleClick(Operations.Division))}
                    >&#247;
                    </button>
                </div>

                <div className="row">
                    <button
                        className="btn number"
                        data-testid="seven"
                        onClick={() => dispatch(handleClick(Numbers.Seven))}
                    >7
                    </button>
                    <button
                        className="btn number"
                        data-testid="eight"
                        onClick={() => dispatch(handleClick(Numbers.Eight))}
                    >8
                    </button>
                    <button
                        className="btn number"
                        data-testid="nine"
                        onClick={() => dispatch(handleClick(Numbers.Nine))}
                    >9
                    </button>
                    <button
                        className="btn symbol large"
                        data-testid="multiplication"
                        onClick={() => dispatch(handleClick(Operations.Multiplication))}
                    >&#215;
                    </button>
                </div>

                <div className="row">
                    <button
                        className="btn number"
                        data-testid="four"
                        onClick={() => dispatch(handleClick(Numbers.Four))}
                    >4
                    </button>
                    <button
                        className="btn number"
                        data-testid="five"
                        onClick={() => dispatch(handleClick(Numbers.Five))}
                    >5
                    </button>
                    <button
                        className="btn number"
                        data-testid="six"
                        onClick={() => dispatch(handleClick(Numbers.Six))}
                    >6
                    </button>
                    <button
                        className="btn symbol large"
                        data-testid="minus"
                        onClick={() => dispatch(handleClick(Operations.Minus))}
                    >&#8722;
                    </button>
                </div>

                <div className="row">
                    <button
                        className="btn number"
                        data-testid="one"
                        onClick={() => dispatch(handleClick(Numbers.One))}
                    >1
                    </button>
                    <button
                        className="btn number"
                        data-testid="two"
                        onClick={() => dispatch(handleClick(Numbers.Two))}
                    >2
                    </button>
                    <button
                        className="btn number"
                        data-testid="three"
                        onClick={() => dispatch(handleClick(Numbers.Three))}
                    >3
                    </button>
                    <button
                        className="btn symbol large"
                        data-testid="plus"
                        onClick={() => dispatch(handleClick(Operations.Plus))}
                    >+
                    </button>
                </div>

                <div className="row">
                    <button
                        className="btn number"
                        data-testid="history"
                        onClick={() => dispatch(toggleShowHistory(isShowHistory))}>
                        <i className="fa fa-history" aria-hidden="true"></i>
                    </button>
                    <button
                        className="btn number"
                        data-testid="zero"
                        onClick={() => dispatch(handleClick(Numbers.Zero))}
                    >0
                    </button>
                    <button className="btn number"
                        data-testid="dot"
                        onClick={() => dispatch(handleClick(Operations.Dot))}
                    >.
                    </button>

                    <div className="equally-wrapper">
                        <div
                            className="btn equally"
                            data-testid="equally"
                            onClick={() => dispatch(calculate())}
                        >=
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
