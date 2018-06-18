import history from '../routing/history';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialStates = {};
const composeEnhancers = process.env.BROWSER ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(
    connectRouter(history)(rootReducer),
    initialStates,
    composeEnhancers(
        applyMiddleware(thunk, routerMiddleware(history)),
    )
);
export default store;
