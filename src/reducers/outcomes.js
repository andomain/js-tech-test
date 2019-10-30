import { LOAD_OUTCOME } from '../actions/outcomes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OUTCOME: {
            const { outcomeId } = action.payload;
            return ({
                ...state,
                [outcomeId]: action.payload,
            });
        }
        default: return state;
    }
};
