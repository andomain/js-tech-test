import { LOAD_EVENTS } from '../actions/events';

const initialState = {
    events: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS: {
            return {
                events: action.payload,
            }
        }
        default: return state;
    }
}
