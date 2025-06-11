import { applyMiddleware, combineReducers, compose, legacy_createStore as  createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import logger from "redux-logger";
import { productReducer } from "../reducers/productReducer";
import { thunk } from "redux-thunk";

export function configureStore() { 
    let middleware = [thunk, logger];
    let enhancers=[];
    let reducers = {
        counterReducer: counterReducer,
        productReducer: productReducer
    }
    const store = createStore(
        combineReducers({...reducers}),
        compose(applyMiddleware(...middleware))
    )
    return store;
}