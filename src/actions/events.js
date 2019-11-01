export const LOAD_EVENTS = 'events/load_events';

export const loadEvents = (payload) => ({
    type: LOAD_EVENTS,
    payload,
});
