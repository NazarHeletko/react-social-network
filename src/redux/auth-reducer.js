import {auth} from "../api/api";

const IS_AUTH = 'IS_AUTH';

let initialState = {
    isAuth: false,
    authData: {}
};

const isAuthReducer = (state=initialState, action) => {
    switch(action.type){
        case IS_AUTH:
            return{
                ...state,
                isAuth: action.isAuth,
                authData: action.authData
            };
        default:
            return state;
    }
};

const isAuthAC = (isAuth, authData) => {
    return{
        type: IS_AUTH,
        isAuth,
        authData
    }
};

export const isAuthThunk = () => async (dispatch) => {
    let response = await auth.isAuthApi();
    if(response.data.resultCode === 0){
        dispatch(isAuthAC(true, response.data.data));
    }
};

export const logOutThunk = () => async (dispatch) => {
    let response = await auth.logOut();
    if(response.data.resultCode === 0){
        dispatch(isAuthAC(false));
    }
};

export default isAuthReducer;