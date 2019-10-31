import { LOAD_EVENTS, loadEvents } from './events';
import { LOAD_MARKET, loadMarket } from './markets';
import { LOAD_OUTCOME, loadOutcome } from './outcomes';

import { events, market, outcomes } from '../fixtures';

describe('event actions', () => {
    it('should create an action to load an array of events', () => {
        const expectedAction = {
            type: LOAD_EVENTS,
            payload: events,
        };

        expect(loadEvents(events)).toEqual(expectedAction);
    });

    it('should create an action to load a single market', () => {
        const expectedAction = {
            type: LOAD_MARKET,
            payload: market,
        };

        expect(loadMarket(market)).toEqual(expectedAction);
    });

    it('should create an action to load a single outcome', () => {
        const expectedAction = {
            type: LOAD_OUTCOME,
            payload: outcomes[0],
        };

        expect(loadOutcome(outcomes[0])).toEqual(expectedAction);
    });
});
