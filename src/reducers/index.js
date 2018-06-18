import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import seriesReducer from './series';
import { initialState as seriesState } from './series';

const rootReducer = combineReducers({
    router,
    series: seriesReducer
});

export const initialStates = {
    series: seriesState
};

export default rootReducer;
