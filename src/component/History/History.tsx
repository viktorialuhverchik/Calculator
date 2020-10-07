import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import './History.css';

const History: FC = () => {

    const history: any = useSelector((state: any) => state.calc.history);

    return (
        <div className="history">
            {history.map((item: string) => <div>{item}</div>)}
        </div>
    )

};

export default History;