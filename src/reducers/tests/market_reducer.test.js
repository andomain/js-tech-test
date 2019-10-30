import reducer, { initialState } from '../markets';
import { LOAD_MARKET } from '../../actions/markets';

const exampleMarket = {
    marketId: 1,
};

describe('markets reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOAD_MARKET actions', () => {
        expect(reducer(initialState, {
            type: LOAD_MARKET,
            payload: exampleMarket,
        })).toEqual({
            1: exampleMarket,
        });
    });
});
