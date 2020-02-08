import {users} from "../api/api";

const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const GET_USERS = 'GET_USERS';
const IS_USERS_LOADED = 'IS_USERS_LOADED';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const DISABLED_BTN = 'DISABLED_BTN';

let initialState = {
    totalUsers: 100,
    usersOnPage: 6,
    activePage: 1,
    usersData: [],
    isUsersLoaded: false,
    btnDisabled: []
};

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_ACTIVE_PAGE:
            return {
              ...state,
              activePage: action.page
            };
        case SET_TOTAL_USERS:
            return{
              ...state,
              totalUsers: action.totalUsers
            };
        case GET_USERS:
            return{
                ...state,
                usersData: action.usersData
            };
        case IS_USERS_LOADED:
            return{
                ...state,
                isUsersLoaded: action.isUsersLoaded
            };
        case FOLLOW:
            return{
                ...state,
                usersData: state.usersData.map(el => {
                    if(el.id === action.uId){
                        return {...el, followed: true}
                    }
                    return el
                })
            };
        case UNFOLLOW:
            return{
                ...state,
                usersData: state.usersData.map(el => {
                    if(el.id === action.uId){
                        return {...el, followed: false}
                    }
                    return el
                })
            };
        case DISABLED_BTN:
            return{
                ...state,
                btnDisabled: action.disabled ? [...state.btnDisabled, action.uId]
                    : state.btnDisabled.filter((item)=>{
                        return item != action.uId
                    })
            };
        default:
            return state;
    }
};

const disabledAC = (disabled, uId) => {
    return{
        type: DISABLED_BTN,
        disabled,
        uId
    }
};

 const followAC = (uId) => {
    return{
        type: FOLLOW,
        uId
    }
};

 const unfollowAC = (uId) => {
    return{
        type: UNFOLLOW,
        uId
    }
};

const isUsersLoadedAC = (isUsersLoaded) => {
    return{
        type: IS_USERS_LOADED,
        isUsersLoaded
    }
};

export const setActivePageAC = (page) => {
    return{
        type: SET_ACTIVE_PAGE,
        page
    }
};

const setTotalUsersAC = (totalUsers) => {
    return{
        type: SET_TOTAL_USERS,
        totalUsers
    }
};

const getUsersAC = (usersData) => {
    return{
        type: GET_USERS,
        usersData
    }
};

export const getUsersThunk = (page, count) =>async (dispatch) => {
    dispatch(isUsersLoadedAC(false));
    let response = await users.getTotalUsersApi(page, count);
    dispatch(isUsersLoadedAC(true));
    dispatch(getUsersAC(response.data.items));
};

export const setTotalUsersThunk = () => async (dispatch) => {
    let response = await users.getTotalPagesNumb();
    dispatch(setTotalUsersAC(response.data.totalCount));
};

export const followThunk = (uId) => async (dispatch) => {
    dispatch(disabledAC(true, uId));
    let response = await users.followApi(uId);
    if(response.data.resultCode === 0){
        dispatch(followAC(uId));
        dispatch(disabledAC(false, uId));
    }
};

export const unfollowThunk = (uId) => async (dispatch) => {
    dispatch(disabledAC(true, uId));
    let response = await users.unfollowApi(uId);
    if(response.data.resultCode === 0){
        dispatch(unfollowAC(uId));
        dispatch(disabledAC(false, uId));
    }
};


export default usersReducer;