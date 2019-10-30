import { LOAD_MARKET } from '../actions/markets';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MARKET: {
            const { marketId } = action.payload;
            return ({
                ...state,
                [marketId]: action.payload,
            });
        }
        default: return state;
    }
}
