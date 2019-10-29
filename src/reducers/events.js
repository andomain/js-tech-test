import { LOAD_EVENTS } from '../actions/events';

const initialState = {
    eventList: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS: {
            return {
                eventList: action.payload,
            }
        }
        default: return state;
    }
}
