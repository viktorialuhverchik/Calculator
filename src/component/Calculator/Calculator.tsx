import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculate, clearData, deleteLast, handleClick, handleClickNumber } from '../../redux/actions/actions';
import Themes from '../Themes/Themes';

import './Calculator.css';

const Calculator: FC = () => {

    const dispatch: any = useDispatch();
    const result: any = useSelector((state: any) => state.calc.result);
    const value: any = useSelector((state: any) => state.calc.value);

    return (
        <div className="calculator container">
            <div className="display-wrapper">
                <Themes />
            </div>
            <div className="textarea-wrapper">
                <textarea className="textarea" onChange={(event) => event.target.value} value={value}/>
            </div>
            <div className="textarea-wrapper">
                <textarea className="textarea-equally" onChange={(event) => event.target.value} value={result === "" ? "0" : `= ${result}`}/>
            </div>
            <div className="row">
                <button className="btn symbol" onClick={() => dispatch(clearData())}>C</button>
                <button className="btn" onClick={() => dispatch(deleteLast())}>
                    <img alt="delete" src="/icons/delete.png" className="delete-icon" />
                </button>
                <button className="btn symbol" onClick={() => dispatch(handleClick("%"))}>%</button>
                <button className="btn symbol large" onClick={() => dispatch(handleClick("/"))}>&#247;</button>
            </div>
            <div className="row">
                <button className="btn number" onClick={() => dispatch(handleClickNumber(7))}>7</button>
                <button className="btn number" onClick={() => dispatch(handleClickNumber(8))}>8</button>
                <button className="btn number" onClick={() => dispatch(handleClickNumber(9))}>9</button>
                <button className="btn symbol large" onClick={() => dispatch(handleClick("*"))}>&#215;</button>
            </div>
            <div className="row">
                <button className="btn number" onClick={() => dispatch(handleClickNumber(4))}>4</button>
                <button className="btn number" onClick={() => dispatch(handleClickNumber(5))}>5</button>
                <button className="btn number" onClick={() => dispatch(handleClickNumber(6))}>6</button>
                <button className="btn symbol large" onClick={() => dispatch(handleClick("-"))}>&#8722;</button>
            </div>
            <div className="row">
                <button className="btn number" onClick={() => dispatch(handleClickNumber(1))}>1</button>
                <button className="btn number" onClick={() => dispatch(handleClickNumber(2))}>2</button>
                <button className="btn number" onClick={() => dispatch(handleClickNumber(3))}>3</button>
                <button className="btn symbol large" onClick={() => dispatch(handleClick("+"))}>+</button>
            </div>
            <div className="row">
                <button className="btn number">
                    <i className="fa fa-history" aria-hidden="true"></i>
                </button>
                <button className="btn number" onClick={() => dispatch(handleClickNumber(0))}>0</button>
                <button className="btn number" onClick={() => dispatch(handleClick("."))}>.</button>
                <div className="equally-wrapper">
                    <button className="btn equally" type="submit" onClick={() => dispatch(calculate())}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
