import { LOAD_EVENTS, loadEvents } from '../events';
import { LOAD_MARKET, loadMarket } from '../markets';
import { LOAD_OUTCOME, loadOutcome } from '../outcomes';

const testEvents = [
    {
        eventId: 1,
        name: 'Example Event 1',
    }, {
        eventId: 2,
        name: 'Example Event 2',
    },
];

const testMarket = {
    marketId: 1,
    name: 'Example Market 1',
};

const testOutcome = {
    outcomeId: 1,
    name: 'Example Outcome 1',
};

describe('event actions', () => {
    it('should create an action to load an array of events', () => {
        const expectedAction = {
            type: LOAD_EVENTS,
            payload: testEvents,
        };

        expect(loadEvents(testEvents)).toEqual(expectedAction);
    });

    it('should create an action to load a single market', () => {
        const expectedAction = {
            type: LOAD_MARKET,
            payload: testMarket,
        };

        expect(loadMarket(testMarket)).toEqual(expectedAction);
    });

    it('should create an action to load a single outcome', () => {
        const expectedAction = {
            type: LOAD_OUTCOME,
            payload: testOutcome,
        };

        expect(loadOutcome(testOutcome)).toEqual(expectedAction);
    });
});
