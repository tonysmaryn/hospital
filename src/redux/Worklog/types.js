export const initialState = {
    worklog: [],
    loading: true,
    error: false,
};

export const ActionTypes = {
    FETCH_WORKLOG: 'FETCH_WORKLOG',
    START_LOADING: 'START_LOADING',
    FINISH_LOADING: 'FINISH_LOADING',
    ERROR_LOADING: 'ERROR_LOADING',
};