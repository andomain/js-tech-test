export const SOCKET_URL = 'ws://localhost:8889';

export const REQUEST = {
    SUBSCRIBE: 'subscribe',
    GET_LIVE_EVENTS: 'getLiveEvents',
    GET_MARKET: 'getMarket',
    GET_OUTCOME: 'getOutcome',
};

export const EVENT = {
    OPEN: 'open',
    MESSAGE: 'message',
    INIT: 'INIT',
    LIVE_EVENTS: 'LIVE_EVENTS_DATA',
    MARKET_DATA: 'MARKET_DATA',
    OUTCOME_DATA: 'OUTCOME_DATA',
}
