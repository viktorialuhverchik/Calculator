import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createHistory, showResultHistoryItem, toggleShowHistory } from '../../redux/actions/actions';
import { PropsHistory } from '../../types';

import './History.css';

const History: FC<PropsHistory> = ({ isShowHistory, history }) => {

    const dispatch: any = useDispatch();

    useEffect(() => {
        let history = localStorage.getItem("history");
        if(!history) {
            return;
        }
        let formattedHistory = JSON.parse(history);
        dispatch(createHistory(formattedHistory));
    }, [dispatch]);

    return (
        <div className="history-wrapper">
            <div className="title-wrapper">
                <i
                    className="fa fa-arrow-left"
                    aria-hidden="true"
                    data-testid="arrow-left"
                    onClick={() => dispatch(toggleShowHistory(isShowHistory))}
                />
                <span className="history-title">History</span>
            </div>
            {history.map((item: string, index: number) => (
                <div
                    className="history-item"
                    data-testid="history-item"
                    key={index}
                    onClick={() => dispatch(showResultHistoryItem(isShowHistory, item))}
                >{item}
                </div>)
            )}
        </div>
    );
};

export default History;
