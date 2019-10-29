import { TOGGLE_PRIMARY } from '../actions/status';

const initialState = {
    showPrimary: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PRIMARY:
            return {
                showPrimary: !state.showPrimary,
            }
        default:
            return state
    }
}
