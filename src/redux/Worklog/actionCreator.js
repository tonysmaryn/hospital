import { ActionTypes } from "./types";
import { getWorklog } from '../../api';

const fetchWorklog = (payload) => ({
    type: ActionTypes.FETCH_WORKLOG,
    payload,
});

const setLoadingIsStart = () => ({
    type: ActionTypes.START_LOADING,
});

const setLoadingIsFinish = () => ({
    type: ActionTypes.FINISH_LOADING,
});

const setLoadingError = () => ({
    type: ActionTypes.ERROR_LOADING,
})

export const getFullWorklog = () => {
    return (dispatch) => {
        dispatch(setLoadingIsStart());
        getWorklog().then(value => {
            dispatch(fetchWorklog(value));
            dispatch(setLoadingIsFinish());
        }
        ).catch(() => {
            dispatch(setLoadingError());
            dispatch(setLoadingIsFinish());
        });
    }
}