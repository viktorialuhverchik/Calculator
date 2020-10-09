import React, { FC } from 'react';
import Calculator from './component/Calculator/Calculator';
import History from './component/History/History';

import './App.css';
import { useSelector } from 'react-redux';
import { State } from './types';

const App: FC = () => {

    const isShowHistory: boolean = useSelector((state: State) => state.app.isShowHistory);
    const history: string[] = useSelector((state: State) => state.calc.history);

    return (
        <div className="app">
            <header className="app-header">
                <h1>Calculator</h1>
            </header>
            {!isShowHistory ? <Calculator isShowHistory={isShowHistory} history={history} /> : <History isShowHistory={isShowHistory} history={history} />}
        </div>
    );
};

export default App;
