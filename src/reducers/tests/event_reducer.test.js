import reducer, { initialState } from '../events';
import { LOAD_EVENTS } from '../../actions/events';

const exampleEvents = [
    {
        eventId: 1,
        name: 'Example event 1',
        status: {
            displayable: true,
        },
    },
    {
        eventId: 2,
        name: 'Example event 2',
        status: {
            displayable: true,
        },
    },
];

describe('events reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOAD_EVENTS actions', () => {
        expect(reducer(initialState, {
            type: LOAD_EVENTS,
            payload: exampleEvents,
        })).toEqual({
            1: exampleEvents[0],
            2: exampleEvents[1],
        });
    });

    it('should not load non-displayable events', () => {
        expect(reducer(initialState, {
            type: LOAD_EVENTS,
            payload: [
                ...exampleEvents,
                {
                    eventId: 3,
                    status: { displayable: false },
                },
            ],
        })).toEqual({
            1: exampleEvents[0],
            2: exampleEvents[1],
        });
    });
});
