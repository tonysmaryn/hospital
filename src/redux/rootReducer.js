export const ActionTypes = {
    FETCH_EMPLOYEES: 'FETCH_EMPLOYEES',
};

const initialState = {
    employees: [],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_EMPLOYEES: {
            return { ...state, employees: action.payload }
        }
        default: {
            return state;
        }
    }
}