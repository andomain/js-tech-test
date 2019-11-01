import reducer, { initialState } from './events';
import { LOAD_EVENTS } from '../actions/events';

import { events } from '../fixtures';

describe('events reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOAD_EVENTS actions', () => {
        expect(reducer(initialState, {
            type: LOAD_EVENTS,
            payload: events,
        })).toEqual({
            21249939: events[0],
            21249937: events[1],
        });
    });

    it('should not load non-displayable events', () => {
        const nonDisplayable = {
            ...events[1],
            status: {
                displayable: false,
            },
        };

        expect(reducer(initialState, {
            type: LOAD_EVENTS,
            payload: [
                events[0],
                nonDisplayable,
            ],
        })).toEqual({
            21249939: events[0],
        });
    });
});
