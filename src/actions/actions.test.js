import { LOAD_EVENTS, loadEvents } from './events';
import { LOAD_MARKET, loadMarket } from './markets';
import { LOAD_OUTCOME, loadOutcome } from './outcomes';
import {
    SET_LOADED,
    TOGGLE_ODDS,
    setLoaded,
    toggleOdds,
} from './status';

import { events, market, outcomes } from '../fixtures';

describe('event actions', () => {
    it('should create an action to load an array of events', () => {
        const expectedAction = {
            type: LOAD_EVENTS,
            payload: events,
        };

        expect(loadEvents(events)).toEqual(expectedAction);
    });
});

describe('market actions', () => {
    it('should create an action to load a single market', () => {
        const expectedAction = {
            type: LOAD_MARKET,
            payload: market,
        };

        expect(loadMarket(market)).toEqual(expectedAction);
    });
});

describe('outcome actions', () => {
    it('should create an action to load a single outcome', () => {
        const expectedAction = {
            type: LOAD_OUTCOME,
            payload: outcomes[0],
        };

        expect(loadOutcome(outcomes[0])).toEqual(expectedAction);
    });
});

describe('status actions', () => {
    it('should set loaded status', () => {
        const expectedAction = {
            type: SET_LOADED,
            payload: {
                loaded: true,
            },
        };

        expect(setLoaded(true)).toEqual(expectedAction);
    });

    it('should toggle odds type', () => {
        const expectedAction = {
            type: TOGGLE_ODDS,
        };

        expect(toggleOdds()).toEqual(expectedAction);
    });
});
