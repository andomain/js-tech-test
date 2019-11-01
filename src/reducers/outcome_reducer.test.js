import reducer, { initialState } from './outcomes';
import { LOAD_OUTCOME } from '../actions/outcomes';

import { outcomes } from '../fixtures';

describe('outcomes reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOAD_MARKET actions', () => {
        expect(reducer(initialState, {
            type: LOAD_OUTCOME,
            payload: outcomes[0],
        })).toEqual({
            367528211: outcomes[0],
        });
    });
});
