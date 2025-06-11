import { applyMiddleware, combineReducers, compose, legacy_createStore as  createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import logger from "redux-logger";

export function configureStore() { 
    let middleware = [logger];
    let enhancers=[];
    let reducers = {
        counterReducer: counterReducer
    }
    const store = createStore(
        combineReducers({...reducers}),
        compose(applyMiddleware(...middleware), ...enhancers)
    )
    return store;
}