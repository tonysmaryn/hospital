import { ActionTypes } from "./rootReducer";
import { getEmployees } from '../api';

export const fetchEmployees = (payload) => ({
    type: ActionTypes.FETCH_EMPLOYEES,
    payload: payload
});

export const getEmployeesList = () => {
    return (dispatch) => {
        getEmployees().then(value => dispatch(fetchEmployees(value)));
    }
}