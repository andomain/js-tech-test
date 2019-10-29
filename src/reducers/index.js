import { combineReducers } from 'redux';

import events from './events';
import status from './status';

export default combineReducers({
    events,
    status,
});
