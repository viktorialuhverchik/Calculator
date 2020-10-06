import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleClick } from '../../redux/actions/actions';
import Themes from '../Themes/Themes';

import './Calculator.css';

const Calculator: FC = () => {

    const dispatch: any = useDispatch();
    const data: any = useSelector((state: any) => state.calc);

    return (
        <div className="calculator container">
            <div className="display-wrapper">
                <Themes />
            </div>
            <div className="textarea-wrapper">
                <textarea className="textarea" onChange={(event) => event.target.value} value={data}/>
            </div>
            <div className="textarea-wrapper">
                <textarea className="textarea-equally" onChange={(event) => event.target.value} value={data === 0 ? "" : `=  ${data}`}/>
            </div>
            <div className="row">
                <button className="btn symbol">C</button>
                <button className="btn">
                    <img alt="delete" src="/icons/delete.png" width={18} height={13}/>
                    {/* <i className="fa fa-arrow-left" aria-hidden="true"></i> */}
                </button>
                <button className="btn symbol" onClick={() => dispatch(handleClick("%"))}>%</button>
                <button className="btn symbol large" onClick={() => dispatch(handleClick("/"))}>&#247;</button>
            </div>
            <div className="row">
                <button className="btn number" onClick={() => dispatch(handleClick(7))}>7</button>
                <button className="btn number" onClick={() => dispatch(handleClick(8))}>8</button>
                <button className="btn number" onClick={() => dispatch(handleClick(9))}>9</button>
                <button className="btn symbol large" onClick={() => dispatch(handleClick("*"))}>&#215;</button>
            </div>
            <div className="row">
                <button className="btn number" onClick={() => dispatch(handleClick(4))}>4</button>
                <button className="btn number" onClick={() => dispatch(handleClick(5))}>5</button>
                <button className="btn number" onClick={() => dispatch(handleClick(6))}>6</button>
                <button className="btn symbol large" onClick={() => dispatch(handleClick("-"))}>&#8722;</button>
            </div>
            <div className="row">
                <button className="btn number" onClick={() => dispatch(handleClick(1))}>1</button>
                <button className="btn number" onClick={() => dispatch(handleClick(2))}>2</button>
                <button className="btn number" onClick={() => dispatch(handleClick(3))}>3</button>
                <button className="btn symbol large" onClick={() => dispatch(handleClick("+"))}>+</button>
            </div>
            <div className="row">
                <button className="btn number">
                    <i className="fa fa-history" aria-hidden="true"></i>
                </button>
                <button className="btn number" onClick={() => dispatch(handleClick(0))}>0</button>
                <button className="btn number" onClick={() => dispatch(handleClick("."))}>.</button>
                <div className="equally-wrapper">
                    <button className="btn equally" type="submit" onClick={() => dispatch(handleClick("="))}>=</button>
                </div>
            </div>
        </div>
    )

};

export default Calculator;
