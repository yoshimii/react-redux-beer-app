import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import { reducer } from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const beerStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={beerStore}>
<App />
</Provider>
, document.getElementById('root'));

// 1. create store with reducer and set to beerStore
// 2. provide Redux store to connect() calls in app with Provider method

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
