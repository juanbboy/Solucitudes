import { types } from '../types/types';

const initialState = {
    data: [],
    error: null
};

export const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.requestLoad:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case types.requestError:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
