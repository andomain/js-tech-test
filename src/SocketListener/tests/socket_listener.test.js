import SocketListener from '..';
import {
    SOCKET_URL,
    REQUEST,
} from '../../constants';

const socketInstance = new SocketListener(SOCKET_URL, jest.fn());

socketInstance.sendEvent = jest.fn();

describe('Websocket listener', () => {
    describe('get events', () => {
        it('should not request primary markets by default', () => {
            socketInstance.getEvents();
            expect(socketInstance.sendEvent).toHaveBeenCalledWith({
                type: REQUEST.GET_LIVE_EVENTS,
                primaryMarkets: false,
            });
        });
        it('should request primary markets when required', () => {
            socketInstance.getEvents(true);
            expect(socketInstance.sendEvent).toHaveBeenCalledWith({
                type: REQUEST.GET_LIVE_EVENTS,
                primaryMarkets: true,
            });
        });
    });

    describe('get a market', () => {
        it('should fetch a market', () => {
            socketInstance.getMarket(1);
            expect(socketInstance.sendEvent).toHaveBeenCalledWith({
                type: REQUEST.GET_MARKET,
                id: 1,
            });
        });
    });

    describe('get an outcome', () => {
        it('should fetch an outcome', () => {
            socketInstance.getOutcome(1);
            expect(socketInstance.sendEvent).toHaveBeenCalledWith({
                type: REQUEST.GET_OUTCOME,
                id: 1,
            });
        });
    });
});
