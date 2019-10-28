import { combineReducers } from 'redux';

const baseReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TEST_ACTION': {
            return {
                result: action.payload,
            }
        }
        default: return state;
    }
}

export default combineReducers({
    baseReducer
});
