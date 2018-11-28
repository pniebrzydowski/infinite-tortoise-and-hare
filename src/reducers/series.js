import { GET_SERIES_SUCCESS } from "../actions/types";

export const initialState = {
    series: null,
};

const series = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERIES_SUCCESS: {
            return {...state, series: action.data};
        }
        default: {
            return state;
        }
    }
};

export default series;
