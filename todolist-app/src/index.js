import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './data/reducer';
import initial from './data/initial';
import thunk from "redux-thunk";	
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	initial,
	composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
