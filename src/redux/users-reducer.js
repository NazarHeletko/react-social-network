import {users} from "../api/api";

const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

let initialState = {
    totalUsers: 100,
    usersOnPage: 1,
    activePage: 1
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
        default:
            return state;
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

export const setTotalUsersThunk = () => async (dispatch) => {
    let response = await users.getTotalPagesNumb();

    dispatch(setTotalUsersAC(response.data.totalCount));
};

export default usersReducer;