import { loadEvents } from '../actions/events';
import { loadMarket } from '../actions/markets';
import { loadOutcome } from '../actions/outcomes';
import { setLoaded } from '../actions/status';
import { REQUEST, EVENT } from '../constants';

export default class SocketListener {
    constructor(url, dispatch, wsPrototcol = []) {
        this.dispatch = dispatch;

        const socket = new WebSocket(url, wsPrototcol);

        socket.addEventListener(EVENT.OPEN, () => {
            // Register message handler
            socket.addEventListener(EVENT.MESSAGE, e => this.messageHandler(JSON.parse(e.data)));

            // Fetch live events with primary Markets
            this.getEvents(true);
        });

        this.socket = socket;
    }

    getEvents = (primaryMarkets = false) => {
        this._sendEvent({
            type: REQUEST.GET_LIVE_EVENTS,
            primaryMarkets
        })
    }

    getMarket = id => {
        this._sendEvent({
            type: REQUEST.GET_MARKET,
            id,
        });
    }

    getOutcome = id => {
        this._sendEvent({
            type: REQUEST.GET_OUTCOME,
            id,
        })
    }

    messageHandler({ type, data }) {
        console.log({ type, data });
        switch (type) {
            case EVENT.LIVE_EVENTS: {
                this.loadEventsHandler(data);
                this.dispatch(setLoaded(true));
                break;
            }
            case EVENT.MARKET_DATA: {
                this.loadMarketHandler(data);
                break;
            }
            case EVENT.OUTCOME_DATA: {
                this.loadOutcomeHandler(data);
                break;
            }
            default: return;
        }
    }

    loadEventsHandler = eventData => {
        // Populate state with event data
        this.dispatch(loadEvents(eventData));

        // Loop through any markets required by these events
        eventData.forEach(event => {
            if (event.markets) {
                event.markets.forEach(marketId => this.getMarket(marketId));
            }
        })
    }

    loadMarketHandler = marketData => {
        // Dispatch action to populate state
        this.dispatch(loadMarket(marketData))

        // Fetch any outcomes
        marketData.outcomes.forEach(outcome => this.getOutcome(outcome));
    }

    loadOutcomeHandler = outcomeData => {
        this.dispatch(loadOutcome(outcomeData));
    }

    _sendEvent = payload => this.socket.send(JSON.stringify(payload));
}
