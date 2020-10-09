import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { calculate, clearValue, deleteLast, handleClick, toggleShowHistory } from '../../redux/actions/actions';
import Display from '../Display/Display';
import Themes from '../Themes/Themes';
import { PropsCalculator } from '../../types';

import './Calculator.css';

const Calculator: FC<PropsCalculator> = ({isShowHistory, history, theme}) => {

    const dispatch: any = useDispatch();

    return (
        <div className="calculator container">
            <Themes theme={theme} />
            <Display history={history}/>
            <div className="buttons-wrapper">
                <div className="row">
                    <button className="btn symbol" onClick={() => dispatch(clearValue())}>C</button>
                    <button className="btn delete-icon_button" onClick={() => dispatch(deleteLast())}>
                        <img alt="delete" src="/icons/delete.png" className="delete-icon" />
                    </button>
                    <button className="btn symbol" onClick={() => dispatch(handleClick("%"))}>%</button>
                    <button className="btn symbol large" onClick={() => dispatch(handleClick("/"))}>&#247;</button>
                </div>
                <div className="row">
                    <button className="btn number" onClick={() => dispatch(handleClick("7"))}>7</button>
                    <button className="btn number" onClick={() => dispatch(handleClick("8"))}>8</button>
                    <button className="btn number" onClick={() => dispatch(handleClick("9"))}>9</button>
                    <button className="btn symbol large" onClick={() => dispatch(handleClick("*"))}>&#215;</button>
                </div>
                <div className="row">
                    <button className="btn number" onClick={() => dispatch(handleClick("4"))}>4</button>
                    <button className="btn number" onClick={() => dispatch(handleClick("5"))}>5</button>
                    <button className="btn number" onClick={() => dispatch(handleClick("6"))}>6</button>
                    <button className="btn symbol large" onClick={() => dispatch(handleClick("-"))}>&#8722;</button>
                </div>
                <div className="row">
                    <button className="btn number" onClick={() => dispatch(handleClick("1"))}>1</button>
                    <button className="btn number" onClick={() => dispatch(handleClick("2"))}>2</button>
                    <button className="btn number" onClick={() => dispatch(handleClick("3"))}>3</button>
                    <button className="btn symbol large" onClick={() => dispatch(handleClick("+"))}>+</button>
                </div>
                <div className="row">
                    <button className="btn number" onClick={() => dispatch(toggleShowHistory(isShowHistory))}>
                        <i className="fa fa-history" aria-hidden="true"></i>
                    </button>
                    <button className="btn number" onClick={() => dispatch(handleClick("0"))}>0</button>
                    <button className="btn number" onClick={() => dispatch(handleClick("."))}>.</button>
                    <div className="equally-wrapper">
                        <div className="btn equally" onClick={() => dispatch(calculate())}>=</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
