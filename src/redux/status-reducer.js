import {statusData} from '../api/api';

const IS_STATUS_LOADING = 'IS_STATUS_LOADING';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    isStatusLoading: false,
    statusText: 'halo'
};

const statusReducer = (state=initialState, action) => {
    switch(action.type){
        case IS_STATUS_LOADING:
            return{
                ...state,
                isStatusLoading: action.isStatusLoading
            };
        case SET_STATUS:
            return{
                ...state,
                statusText: action.statusText
            };
        default:
            return state;
    }
};

const isStatusLoadingAC = (isStatusLoading) => {
    return{
        type: IS_STATUS_LOADING,
        isStatusLoading
    }
};

const setUserStatusAC = (statusText) => {
    return{
        type: SET_STATUS,
        statusText
    }
};

export const setStatusThunk = (status) => async (dispatch) => {
    dispatch(isStatusLoadingAC(false));
    let response =await statusData.setStatus(status);
    if(response.data.resultCode === 0){
        dispatch(setUserStatusAC(status));
        dispatch(isStatusLoadingAC(true));
    }
};

export const getStatusThunk = (userId) => async (dispatch) => {
    dispatch(isStatusLoadingAC(false));
    let response = await statusData.getStatusApi(userId);
    dispatch(setUserStatusAC(response.data));
    dispatch(isStatusLoadingAC(true));
};

export default statusReducer;
