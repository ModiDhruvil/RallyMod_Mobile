import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import ApiReducer from "./Reducer/ApiReducer";
import LoginReducer from "./Reducer/LoginReducer";

const appReducers = combineReducers({
    ApiReducer,
    LoginReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));