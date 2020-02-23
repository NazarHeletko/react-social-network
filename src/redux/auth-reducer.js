import {stopSubmit} from 'redux-form';
import {auth} from "../api/api";

const IS_AUTH = 'IS_AUTH';
const SHOW_CAPTCHA = 'SHOW_CAPTCHA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    isAuth: false,
    authData: {},
    showCaptcha: false,
    captchaUrl: null
};

const isAuthReducer = (state=initialState, action) => {
    switch(action.type){
        case IS_AUTH:
            return{
                ...state,
                isAuth: action.isAuth,
                authData: action.authData
            };
        case SHOW_CAPTCHA:
            return{
                ...state,
                showCaptcha: action.showCaptcha
            };
        case SET_CAPTCHA_URL:
            return{
                ...state,
                captchaUrl: action.captchaUrl
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

const showCaptchaAC = (showCaptcha) => {
    return{
        type: SHOW_CAPTCHA,
        showCaptcha
    }
};

const getCaptchaUrlAC = (captchaUrl) => {
    return{
        type: SET_CAPTCHA_URL,
        captchaUrl
    }
};

export const isAuthThunk = () =>  (dispatch) => {
    return auth.isAuthApi().then(response =>{
            if(response.data.resultCode === 0){
                dispatch(isAuthAC(true, response.data.data));
            }
        }
    );
};

export const logOutThunk = () => async (dispatch) => {
    let response = await auth.logOut();
    if(response.data.resultCode === 0){
        dispatch(isAuthAC(false, {}));
    }
};

const getCaptchaThunk = () =>async (dispatch) => {
  let response = await auth.getCaptchaApi();
    dispatch(getCaptchaUrlAC(response.data.url));
};

export const logInThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await auth.logInApi(email, password, rememberMe, captcha);
    if(response.data.resultCode === 0){
        dispatch(isAuthAC(true, {}));
        dispatch(showCaptchaAC(false));
    }
    else {
        if(response.data.resultCode === 10){
            let actionCaptcha = stopSubmit('login', {_error: 'Are you a robot?'});
            dispatch(actionCaptcha);
            dispatch(showCaptchaAC(true));
            dispatch(getCaptchaThunk());
        } else {
            let action = stopSubmit('login', {_error: 'incorrect login or password'});
            dispatch(action);
        }
    }
};

export default isAuthReducer;