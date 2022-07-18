import { SET_USER_NAME,SET_PASSWORD } from "../actions/LoginAction";

const initialState = {
    userName: '',
    password: '',
}

function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, userName: action.payload };
        case SET_PASSWORD:
            return { ...state, password: action.payload };
        default:
            return state;
    }
}

export default LoginReducer;