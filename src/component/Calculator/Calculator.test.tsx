import React from 'react';
import { renderWithRedux } from '../../index.test';
import { fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

let isShowHistory: boolean = false;
let history: string[] = ["1+2=3"];
let theme: string = "light";

describe('Calculator component',() => {

    it('renders Calculator component', () => {
        const wrapper = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('click clear value', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("clear"));
        expect(getByTestId("clear")).toBeTruthy();
    });

    it('click delete last', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("delete-last"));
        expect(getByTestId("delete-last")).toBeTruthy();
    });

    it('click handle click percent', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("percent"));
        expect(getByTestId("percent")).toBeTruthy();
    });

    it('click handle click division', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("division"));
        expect(getByTestId("division")).toBeTruthy();
    });

    it('click handle click seven', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("seven"));
        expect(getByTestId("seven")).toBeTruthy();
    });

    it('click handle click eight', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("eight"));
        expect(getByTestId("eight")).toBeTruthy();
    });

    it('click handle click nine', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("nine"));
        expect(getByTestId("nine")).toBeTruthy();
    });

    it('click handle click multiplication', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("multiplication"));
        expect(getByTestId("multiplication")).toBeTruthy();
    });

    it('click handle click four', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("four"));
        expect(getByTestId("four")).toBeTruthy();
    });

    it('click handle click five', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("five"));
        expect(getByTestId("five")).toBeTruthy();
    });

    it('click handle click six', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("six"));
        expect(getByTestId("six")).toBeTruthy();
    });

    it('click handle click minus', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("minus"));
        expect(getByTestId("minus")).toBeTruthy();
    });

    it('click handle click one', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("one"));
        expect(getByTestId("one")).toBeTruthy();
    });

    it('click handle click two', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("two"));
        expect(getByTestId("two")).toBeTruthy();
    });

    it('click handle click three', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("three"));
        expect(getByTestId("three")).toBeTruthy();
    });

    it('click handle click plus', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("plus"));
        expect(getByTestId("plus")).toBeTruthy();
    });

    it('click handle click history', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("history"));
        expect(getByTestId("history")).toBeTruthy();
    });

    it('click handle click zero', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("zero"));
        expect(getByTestId("zero")).toBeTruthy();
    });

    it('click handle click dot', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("dot"));
        expect(getByTestId("dot")).toBeTruthy();
    });

    it('click handle click equally', () => {
        const { getByTestId } = renderWithRedux(<Calculator isShowHistory={isShowHistory} history={history} theme={theme} />);
        fireEvent.click(getByTestId("equally"));
        expect(getByTestId("equally")).toBeTruthy();
    });
});
