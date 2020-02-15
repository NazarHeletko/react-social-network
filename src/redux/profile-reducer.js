import {profile} from "../api/api";

const GET_USER_PROFILE_DATA = 'GET_USER_PROFILE_DATA';
const IS_PROFILE_LOADED = 'IS_PROFILE_LOADED';
const UPDATE_PROFILE_PHOTO = 'UPDATE_PROFILE_PHOTO';
const IS_PHOTO_UPDATED = 'IS_PHOTO_UPDATED';

let initialState = {
    profileData: {},
    isProfileLoad: false,
    isPhotoUpdated: true
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
        case UPDATE_PROFILE_PHOTO:
            return{
                ...state,
                profileData: {...state.profileData, photos: action.photos}
            };
        case IS_PHOTO_UPDATED:
            return{
                ...state,
                isPhotoUpdated: action.isPhotoUpdated
            };
        default:
            return state;
    }
};

const isPhotoUpdatedAC = (isPhotoUpdated) => {
    return{
        type: IS_PHOTO_UPDATED,
        isPhotoUpdated
    }
};


const updateProfilePhotoAC = (photos) => {
    return{
        type: UPDATE_PROFILE_PHOTO,
        photos
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
    let response = await profile.getUserProfile(uId);
    let data = response.data;
    dispatch(profileDataAC(data));
    dispatch(isProfileLoadAC(true));
};

export const setPhotoThunk = (photoFile) => async (dispatch) => {
    dispatch(isPhotoUpdatedAC(false));
    let response = await profile.setProfilePhoto(photoFile);
    if(response.data.resultCode === 0){
        dispatch(updateProfilePhotoAC(response.data.data.photos));
        dispatch(isPhotoUpdatedAC(true));
    }
};

export default profileReducer;