import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authreducer from './store/reducers/auth';
import { BrowserRouter } from 'react-router-dom';

const rootreducer = combineReducers(
    {auth: authreducer}
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootreducer, composeEnhancers(applyMiddleware()));

const app=(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
