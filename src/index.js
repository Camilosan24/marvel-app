import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { compose, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import promiseMiddleware from "redux-promise";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeWithMiddleware = composeEnhancers(
	applyMiddleware(promiseMiddleware)
)(createStore)

ReactDOM.render(
	<Provider store={storeWithMiddleware(reducers)}>
		<Routes />
	</Provider>,
	document.getElementById("root")
);
