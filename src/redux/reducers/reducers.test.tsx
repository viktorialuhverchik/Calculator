import { appReducer } from './appReducer';
import { calcReducer } from './calcReducer';

describe('app reducer', () => {

    it('should handle TOGGLE_HISTORY', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'TOGGLE_HISTORY',
                isShowHistory: true
            }
            ))
            .toEqual({isShowHistory: true, theme: "light"});
    });

    it('should handle TOGGLE_THEME', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'TOGGLE_THEME',
                theme: "dark"
            }
            ))
            .toEqual({isShowHistory: false, theme: "light"});
    });

    it('should handle TOGGLE_THEME', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'TOGGLE_THEME',
                theme: "light"
            }
            ))
            .toEqual({isShowHistory: false, theme: "dark"});
    });

    it('should handle CHANGE_THEME', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'CHANGE_THEME',
                theme: "light"
            }
            ))
            .toEqual({isShowHistory: false, theme: "light"});
    });
});

describe('calc reducer', () => {

    it('should handle INPUT_VALUE if first not number', () => {
        expect(calcReducer(
            {
                value: "",
                result: "",
                history: []
            }, 
            {
                type: 'INPUT_VALUE',
                value: "+"
            }
            ))
            .toEqual({value: "0+", result: "", history: []});
    });

    it('should handle INPUT_VALUE if result and input symbol', () => {
        expect(calcReducer(
            {
                value: "",
                result: "2",
                history: []
            }, 
            {
                type: 'INPUT_VALUE',
                value: "+"
            }
            ))
            .toEqual({value: "2+", result: "", history: []});
    });

    it('should handle INPUT_VALUE if input number', () => {
        expect(calcReducer(
            {
                value: "1",
                result: "",
                history: []
            }, 
            {
                type: 'INPUT_VALUE',
                value: "2"
            }
            ))
            .toEqual({value: "12", result: "", history: []});
    });

    it('should handle DELETE_LAST', () => {
        expect(calcReducer(
            {
                value: "12",
                result: "",
                history: []
            }, 
            {
                type: 'DELETE_LAST'
            }
            ))
            .toEqual({value: "1", result: "", history: []});
    });

    it('should handle DELETE_LAST if length value 0', () => {
        expect(calcReducer(
            {
                value: "",
                result: "",
                history: []
            }, 
            {
                type: 'DELETE_LAST'
            }
            ))
            .toEqual({value: "", result: "", history: []});
    });

    it('should handle CLEAR_VALUE', () => {
        expect(calcReducer(
            {
                value: "1+2",
                result: "2",
                history: []
            }, 
            {
                type: 'CLEAR_VALUE'
            }
            ))
            .toEqual({value: "", result: "", history: []});
    });

    it('should handle EQUALL', () => {
        expect(calcReducer(
            {
                value: "1+2",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: 3, history: ["1+2=3"]});
    });

    it('should handle EQUALL if error', () => {
        expect(calcReducer(
            {
                value: "1+-*2",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "Check you value!", history: []});
    });

    it('should handle EQUALL if sum percent at the right', () => {
        expect(calcReducer(
            {
                value: "2+10%",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "2.2", history: ["2+10%=2.2"]});
    });

    it('should handle EQUALL if sum percent at the left', () => {
        expect(calcReducer(
            {
                value: "10%+2",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "2.2", history: ["10%+2=2.2"]});
    });

    it('should handle EQUALL if minus percent at the right', () => {
        expect(calcReducer(
            {
                value: "2-10%",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "1.8", history: ["2-10%=1.8"]});
    });

    it('should handle EQUALL if minus percent at the left', () => {
        expect(calcReducer(
            {
                value: "10%-2",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "1.8", history: ["10%-2=1.8"]});
    });

    it('should handle EQUALL if multiplication percent at the right', () => {
        expect(calcReducer(
            {
                value: "2*10%",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "0.2", history: ["2*10%=0.2"]});
    });

    it('should handle EQUALL if multiplication percent at the left', () => {
        expect(calcReducer(
            {
                value: "10%*2",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "0.2", history: ["10%*2=0.2"]});
    });

    it('should handle EQUALL if division percent at the right', () => {
        expect(calcReducer(
            {
                value: "2/10%",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "20", history: ["2/10%=20"]});
    });

    it('should handle EQUALL if division percent at the left', () => {
        expect(calcReducer(
            {
                value: "10%/2",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "20", history: ["10%/2=20"]});
    });

    it('should handle EQUALL if number percent', () => {
        expect(calcReducer(
            {
                value: "2%",
                result: "",
                history: []
            }, 
            {
                type: 'EQUALL'
            }
            ))
            .toEqual({value: "", result: "0.02", history: ["2%=0.02"]});
    });

    it('should handle CREATE_HISTORY', () => {
        expect(calcReducer(
            undefined, 
            {
                type: 'CREATE_HISTORY',
                history: ["1+2=3"]
            }
            ))
            .toEqual({value: "", result: "", history: ["1+2=3"]});
    });

    it('should handle SHOW_HISTORY', () => {
        expect(calcReducer(
            {
                value: "1+2",
                result: "3",
                history: ["1+2=3"]
            },
            {
                type: 'SHOW_HISTORY',
                value: "1+2",
                result: "3",
            }
            ))
            .toEqual({value: "1+2", result: "3", history: ["1+2=3"]});
    });
});