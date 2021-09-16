import { ActionTypes } from "./types";
import { getEmployees } from '../../api';

const fetchEmployees = (payload) => ({
    type: ActionTypes.FETCH_EMPLOYEES,
    payload
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

export const getEmployeesList = () => {
    return (dispatch) => {
        dispatch(setLoadingIsStart());
        getEmployees().then(value => {
            dispatch(fetchEmployees(value));
            dispatch(setLoadingIsFinish());
        }
        ).catch(() => {
            dispatch(setLoadingError());
            dispatch(setLoadingIsFinish());
        });
    }
}