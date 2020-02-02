import {createStore, combineReducers, applyMiddleware} from "redux";
import isAuthReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import statusReducer from "./status-reducer";
import postsReducer from "./posts-reducer";

let reducers = combineReducers({
    isAuth: isAuthReducer,
    form: formReducer,
    status: statusReducer,
    posts: postsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;