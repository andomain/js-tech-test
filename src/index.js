import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import SocketListener from './SocketListener';
import rootReducer from './reducers';

import { SOCKET_URL } from './constants';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

new SocketListener(SOCKET_URL, store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
