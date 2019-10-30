import { SET_LOADED } from '../actions/status';

const initialState = {
    loaded: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADED:
            return {
                loaded: action.payload.loaded,
            }
        default:
            return state
    }
}
