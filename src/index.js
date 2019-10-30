import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import SocketListener from './SocketListener';
import rootReducer from './reducers';

import { SOCKET_URL } from './constants';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// eslint-disable-next-line no-unused-vars
const socket = new SocketListener(SOCKET_URL, store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
