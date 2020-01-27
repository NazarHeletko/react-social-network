import {createStore, combineReducers, applyMiddleware} from "redux";
import isAuthReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    isAuth: isAuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;