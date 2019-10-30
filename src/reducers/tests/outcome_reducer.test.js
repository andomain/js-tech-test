import reducer, { initialState } from '../outcomes';
import { LOAD_OUTCOME } from '../../actions/outcomes';

const exampleOutcome = {
    outcomeId: 1,
};

describe('outcomes reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOAD_MARKET actions', () => {
        expect(reducer(initialState, {
            type: LOAD_OUTCOME,
            payload: exampleOutcome,
        })).toEqual({
            1: exampleOutcome,
        });
    });
});
