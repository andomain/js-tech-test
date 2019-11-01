import reducer, { initialState } from './status';
import { SET_LOADED, TOGGLE_ODDS } from '../actions/status';

describe('status reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_LOADED action', () => {
        expect(reducer(initialState, {
            type: SET_LOADED,
            payload: {
                loaded: true,
            },
        })).toEqual({
            ...initialState,
            loaded: true,
        });
    });

    it('should handle TOGGLE_ODDS action', () => {
        expect(reducer(initialState, {
            type: TOGGLE_ODDS,
        })).toEqual({
            ...initialState,
            decimalOdds: !initialState.decimalOdds,
        });
    });
});
