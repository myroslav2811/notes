import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {NoteReducer, changeInputReducer, editReducer} from "./store/reducers";

const store = createStore(combineReducers({
    notes: NoteReducer,
    editNote: editReducer,
    value: changeInputReducer
}));

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. NoteContainer.jsx this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
