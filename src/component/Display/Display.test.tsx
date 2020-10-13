import React from 'react';
import { renderWithRedux } from '../../index.test';
import { fireEvent } from '@testing-library/react';
import Display from './Display';

let history: string[] = ["1+2=3"];

describe('Display component',() => {

    it('renders Display component', () => {
        const wrapper = renderWithRedux(<Display history={history} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click last value', () => {
        const { getByTestId } = renderWithRedux(<Display history={history} />);
        fireEvent.click(getByTestId("last-value"));
        expect(getByTestId("last-value")).toBeTruthy();
    });
});
