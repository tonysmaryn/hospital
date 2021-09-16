export const initialState = {
    employees: [],
    loading: true,
    error: false,
};

export const ActionTypes = {
    FETCH_EMPLOYEES: 'FETCH_EMPLOYEES',
    START_LOADING: 'START_LOADING',
    FINISH_LOADING: 'FINISH_LOADING',
    ERROR_LOADING: 'ERROR_LOADING',
};