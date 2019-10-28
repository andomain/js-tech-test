import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

import App from './App';

import { SOCKET_URL, TYPE } from './constants';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Debug WS connection
const socket = new WebSocket(SOCKET_URL);

socket.onopen = () => {
    socket.addEventListener("message", m => console.log(JSON.parse(m.data)));
    socket.send(JSON.stringify({ type: TYPE.GET_LIVE_EVENTS, primaryMarkets: false }));
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
