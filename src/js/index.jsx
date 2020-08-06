import React from "react";
import ReactDOM from "react-dom";

import '../style/index.scss';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "../state/reducer";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('app')
);