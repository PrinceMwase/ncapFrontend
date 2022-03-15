import { USER_LOGIN } from "../constants";
import { action } from "../types";

const initialState = {
    user: null
};
const authenticationReducer = (state = initialState, action:action) => {

    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default authenticationReducer;