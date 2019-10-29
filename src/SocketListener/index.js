import { loadEvents } from '../actions/events';
import { REQUEST, EVENT } from '../constants';

export default class SocketListener {
    constructor(url, dispatch, wsPrototcol = []) {
        this.dispatch = dispatch;

        const socket = new WebSocket(url, wsPrototcol);

        socket.addEventListener('open', () => {
            socket.addEventListener(EVENT.MESSAGE, e => this.messageHandler(JSON.parse(e.data)));
            socket.send(JSON.stringify({ type: REQUEST.GET_LIVE_EVENTS, primaryMarkets: false }));
        });

        this.socket = socket;
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
}
