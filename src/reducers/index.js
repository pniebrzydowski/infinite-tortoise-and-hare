import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

// import applicationReducer from './application';
// import { initialState as applicationState } from './application';

const rootReducer = combineReducers({
    router
});

export const initialStates = {};

export default rootReducer;
