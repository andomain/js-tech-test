import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { SOCKET_URL, TYPE } from './constants';

// Debug WS connection
const socket = new WebSocket(SOCKET_URL);

socket.onopen = () => {
    socket.addEventListener("message", m => console.log(JSON.parse(m.data)));
    socket.send(JSON.stringify({ type: TYPE.GET_LIVE_EVENTS, primaryMarkets: false }));
};

ReactDOM.render(<App />, document.getElementById('root'));
