import { combineReducers } from "redux";
import { employeesReducer } from "./Employees/reducer";

export const rootReducer = combineReducers({
    employees: employeesReducer,
})