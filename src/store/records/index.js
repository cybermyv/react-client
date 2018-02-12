import { push } from 'react-router-redux'

// CONSTANTS
const GET_LIST_RECORDS = 'GET_LIST_RECORDS';

// ACTION CREATE

export const getListRecordsAction = (recs) => ({
    type: GET_LIST_RECORDS,
    payload: { recs }
});

// ASYNC ACTION

// REDUCER
const initiaState = [];

export const recsReducer = (state = initiaState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case GET_LIST_RECORDS:
            return [...state, ...payload];
        default:
            return state
    }
}