import { combineReducers } from 'redux';

import events from './events';
import markets from './markets';
import status from './status';

export default combineReducers({
    events,
    markets,
    status,
});
