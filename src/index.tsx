import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes';
import {reducer} from './reducers/reducer'
import './index.css';

import * as serviceWorker from './serviceWorker';

const Store = createStore(reducer)

ReactDOM.render(
    <Provider store={Store}>
        <div className="container ">
            <Routes />
        </div>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
