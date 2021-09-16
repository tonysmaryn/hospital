import { combineReducers } from "redux";
import { employeesReducer } from "./Employees/reducer";
import { worklogReducer } from "./Worklog/reducer";

export const rootReducer = combineReducers({
    employees: employeesReducer,
    worklog: worklogReducer,
})