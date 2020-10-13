import React from 'react';
import { renderWithRedux } from '../../index.test';
import { fireEvent } from '@testing-library/react';
import fetchMock from "jest-fetch-mock";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import History from './History';
import { createHistory } from '../../redux/actions/actions';
import { CREATE_HISTORY } from '../../redux/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let isShowHistory: boolean = true;
let theme: string = "light";
let value: string = "1+2";
let result: string = "3";
let history: string[] = ["1+2=3"];

const initialState = {
    app: {
        isShowHistory,
        theme
    },
    calc: {
        value,
        result,
        history
    }
};

describe('History component',() => {

    let store: any;

    beforeEach(() => {
        store = mockStore(initialState);
        fetchMock.resetMocks();
    });

    afterEach(() => {
        fetchMock.mockClear();
    });

    it('renders History component', () => {
        const wrapper = renderWithRedux(<History isShowHistory={isShowHistory} history={history} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click arrow left', () => {
        const { getByTestId } = renderWithRedux(<History isShowHistory={isShowHistory} history={history} />);
        fireEvent.click(getByTestId("arrow-left"));
        expect(getByTestId("arrow-left")).toBeTruthy();
    });

    it('click history item', () => {
        const { getByTestId } = renderWithRedux(<History isShowHistory={isShowHistory} history={history} />);
        fireEvent.click(getByTestId("history-item"));
        expect(getByTestId("history-item")).toBeTruthy();
    });

    it('should create history', () => {
        history = ["1+2=3", "2+2=4"];
        const expectedActions = {
            type: CREATE_HISTORY,
            history
        };
        store.dispatch(createHistory(history));
        expect(store.getActions()[0]).toEqual(expectedActions);
    });
});
