import { SET_LOADED, TOGGLE_ODDS } from '../actions/status';

const initialState = {
    loaded: false,
    decimalOdds: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADED: {
            return {
                ...state,
                loaded: action.payload.loaded,
            }
        }
        case TOGGLE_ODDS: {
            return {
                ...state,
                decimalOdds: !state.decimalOdds,
            }
        }
        default:
            return state
    }
}
