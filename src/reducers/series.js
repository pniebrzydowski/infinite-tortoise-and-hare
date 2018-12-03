import { GET_SERIES_SUCCESS, ADD_SERIES_SUCCESS } from "../actions/types";

export const initialState = {
    series: null,
};

const series = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERIES_SUCCESS: {
            return {...state, series: action.data};
        }
        case ADD_SERIES_SUCCESS: {
            const newSeries = [...state.series];
            newSeries.push(action.data);
            return {...state, series: newSeries};
        }
        default: {
            return state;
        }
    }
};

export default series;
