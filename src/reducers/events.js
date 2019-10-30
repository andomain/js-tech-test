import { LOAD_EVENTS } from '../actions/events';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS: {
            return action.payload.reduce((eventLookup, event) => {
                return ({
                    ...eventLookup,
                    [event.eventId]: event,
                });
            }, {});
        }
        default: return state;
    }
}
