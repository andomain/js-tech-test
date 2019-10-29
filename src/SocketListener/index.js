import { loadEvents } from '../actions/events';
import { REQUEST, EVENT } from '../constants';

export default class SocketListener {
    constructor(url, dispatch, wsPrototcol = []) {
        this.dispatch = dispatch;

        const socket = new WebSocket(url, wsPrototcol);

        socket.addEventListener(EVENT.OPEN, () => {
            socket.addEventListener(EVENT.MESSAGE, e => this.messageHandler(JSON.parse(e.data)));
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

    messageHandler({ type, data }) {
        switch (type) {
            case EVENT.LIVE_EVENTS: {
                this.dispatch(loadEvents(data));
                break;
            }
            default: return;
        }
    }

    _sendEvent = payload => this.socket.send(JSON.stringify(payload));
}
