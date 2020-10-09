import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { calcReducer } from './calcReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    calc: calcReducer
});
