import {auth} from "../api/api";

const IS_AUTH = 'IS_AUTH';

let initialState = {
    isAuth: false
};

const isAuthReducer = (state=initialState, action) => {
    switch(action.type){
        case IS_AUTH:
            return{
                ...state,
                isAuth: action.isAuth
            };
        default:
            return state;
    }
};

const isAuthAC = (isAuth) => {
    return{
        type: IS_AUTH,
        isAuth
    }
};

export const isAuthThunk = () => async (dispatch) => {
    let response = await auth.isAuthApi();
    if(response.data.resultCode === 0){
        dispatch(isAuthAC(true));
    }
};

export const logOutThunk = () => async (dispatch) => {
    let response = await auth.logOut();
    if(response.data.resultCode === 0){
        dispatch(isAuthAC(false));
    }
};

export default isAuthReducer;