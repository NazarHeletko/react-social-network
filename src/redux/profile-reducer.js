import {getUserProfile} from "../api/api";

const GET_USER_PROFILE_DATA = 'GET_USER_PROFILE_DATA';
const IS_PROFILE_LOADED = 'IS_PROFILE_LOADED';

let initialState = {
    profileData: {},
    isProfileLoad: false
};

let profileReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USER_PROFILE_DATA:
            return{
                ...state,
                profileData: action.profileData
            };
        case IS_PROFILE_LOADED:
            return{
                ...state,
                isProfileLoad: action.isLoad
            };
        default:
            return state;
    }
};

const profileDataAC = (profileData) => {
    return{
        type: GET_USER_PROFILE_DATA,
        profileData
    }
};

const isProfileLoadAC = (isLoad) => {
    return{
        type: IS_PROFILE_LOADED,
        isLoad
    }
};

export const getProfileDataThunk = (uId) => async (dispatch) => {
    dispatch(isProfileLoadAC(false));
    let response = await getUserProfile(uId);
    let data = response.data;
    dispatch(profileDataAC(data));
    dispatch(isProfileLoadAC(true));
};

export default profileReducer;