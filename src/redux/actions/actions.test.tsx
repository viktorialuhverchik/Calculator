import * as actions from './actions';
import * as types from '../types';

describe('actions', () => {
    it('should create an handle click action', () => {
        let value: string = "1";
        const expectedAction = {
            type: types.INPUT_VALUE,
            value
        };
        expect(actions.handleClick(value)).toEqual(expectedAction);
    });

    it('should create an calculate action', () => {
        const expectedAction = {
            type: types.EQUALL
        };
        expect(actions.calculate()).toEqual(expectedAction);
    });

    it('should create an clear value action', () => {
        const expectedAction = {
            type: types.CLEAR_VALUE
        };
        expect(actions.clearValue()).toEqual(expectedAction);
    });

    it('should create an delete last action', () => {
        const expectedAction = {
            type: types.DELETE_LAST
        };
        expect(actions.deleteLast()).toEqual(expectedAction);
    });

    it('should create an toggle show history action', () => {
        let isShowHistory: boolean = false;
        const expectedAction = {
            type: types.TOGGLE_HISTORY,
            isShowHistory: !isShowHistory
        };
        expect(actions.toggleShowHistory(isShowHistory)).toEqual(expectedAction);
    });

    it('should create an create history action', () => {
        let history: string[] = ["1+2=3"];
        const expectedAction = {
            type: types.CREATE_HISTORY,
            history
        };
        expect(actions.createHistory(history)).toEqual(expectedAction);
    });

    it('should create an show result history action', () => {
        let value: string = "1+2";
        let result: string = "=3";
        const expectedAction = {
            type: types.SHOW_HISTORY,
            value,
            result
        };
        const showResultHistoryItem = jest.fn();
        showResultHistoryItem.mockImplementation(() => {
            return expectedAction;
        });
        expect(showResultHistoryItem()).toEqual(expectedAction);
    });

    it('should create an toggle theme action', () => {
        let theme: string = "dark";
        const expectedAction = {
            type: types.TOGGLE_THEME,
            theme
        };
        expect(actions.toggleTheme(theme)).toEqual(expectedAction);
    });

    it('should create an change theme action', () => {
        let theme: string = "light";
        const expectedAction = {
            type: types.CHANGE_THEME,
            theme
        };
        expect(actions.changeTheme(theme)).toEqual(expectedAction);
    });
});