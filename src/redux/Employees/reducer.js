import { ActionTypes, initialState } from "./types";

export const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_EMPLOYEES: {
            return { ...state, employees: action.payload }
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