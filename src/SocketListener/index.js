import { loadEvents } from '../actions/events';
import { loadMarket } from '../actions/markets';
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

    messageHandler({ type, data }) {
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
            default: return;
        }
    }

    _sendEvent = payload => this.socket.send(JSON.stringify(payload));
}
