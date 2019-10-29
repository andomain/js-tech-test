export const LOAD_EVENTS = 'events/load_events';

export const loadEvents = eventData => ({
    type: LOAD_EVENTS,
    payload: eventData,
});
