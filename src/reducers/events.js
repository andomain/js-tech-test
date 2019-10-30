import { LOAD_EVENTS } from '../actions/events';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS: {
            return action.payload;
        }
        default: return state;
    }
}
