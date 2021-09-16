import { ActionTypes, initialState } from "./types";

export const worklogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_WORKLOG: {
            return { ...state, worklog: action.payload }
        }
        case ActionTypes.START_LOADING: {
            return { ...state, loading: true };
        }
        case ActionTypes.FINISH_LOADING: {
            return { ...state, loading: false };
        }
        case ActionTypes.ERROR_LOADING: {
            return { ...state, error: true }
        }
        default: {
            return state;
        }
    }
}