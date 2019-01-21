import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {mainReducer} from './reducers/reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    todoData:[
        {
            show: true,
            text: 'Lorem ipsum dolor',
            active: false,
            done: false,
            id: '1'
        }],
    showStatus: 'all',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    mainReducer,
    initialState,
    composeEnhancers()
);

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Root/> , document.getElementById('root'));
serviceWorker.unregister();
