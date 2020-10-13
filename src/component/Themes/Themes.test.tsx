import React from 'react';
import { renderWithRedux } from '../../index.test';
import { fireEvent } from '@testing-library/react';
import fetchMock from "jest-fetch-mock";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Themes from './Themes';
import { toggleTheme } from '../../redux/actions/actions';
import { TOGGLE_THEME } from '../../redux/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let isShowHistory: boolean = false;
let theme: string = "dark";
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

describe('Themes component',() => {

    let store: any;

    beforeEach(() => {
        store = mockStore(initialState);
        fetchMock.resetMocks();
    });

    afterEach(() => {
        fetchMock.mockClear();
    });

    it('renders Themes component', () => {
        const wrapper = renderWithRedux(<Themes theme={theme} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click moon', () => {
        const { getByTestId } = renderWithRedux(<Themes theme={theme} />);
        fireEvent.click(getByTestId("sun"));
        expect(getByTestId("sun")).toBeTruthy();
    });

    it('should toggle theme', () => {
        theme = "light";
        const expectedActions = {
            type: TOGGLE_THEME,
            theme
        };
        store.dispatch(toggleTheme(theme));
        expect(store.getActions()[0]).toEqual(expectedActions);
    });

    it('click sun', () => {
        const { getByTestId } = renderWithRedux(<Themes theme={theme} />);
        fireEvent.click(getByTestId("moon"));
        expect(getByTestId("moon")).toBeTruthy();
    });
});
