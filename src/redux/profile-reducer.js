import {profile} from "../api/api";

const GET_USER_PROFILE_DATA = 'GET_USER_PROFILE_DATA';
const IS_PROFILE_LOADED = 'IS_PROFILE_LOADED';
const UPDATE_PROFILE_PHOTO = 'UPDATE_PROFILE_PHOTO';
const IS_PHOTO_UPDATED = 'IS_PHOTO_UPDATED';
const GET_OWN_PHOTO = 'GET_OWN_PHOTO';
const IS_OWN_PHOTO_LOADED = 'IS_OWN_PHOTO_LOADED';
const CHANGE_SUBMITE = 'CHANGE_SUBMITE';
const SHOW_EDIT = 'SHOW_EDIT';
const IS_PROFILE_DESCRIPTION_LOAD = 'IS_PROFILE_DESCRIPTION_LOAD';


let initialState = {
    profileData: {},
    isProfileLoad: false,
    isPhotoUpdated: true,
    ownPhoto: null,
    isOwnPhotoLoaded: false,
    isSubmited: false,
    showEdit: false,
    isProfileDescriptionLoad: true
};

let profileReducer = (state=initialState, action) => {
    switch(action.type){
        case SHOW_EDIT:
            return{
                ...state,
                showEdit: action.showEdit
            };
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
        case GET_OWN_PHOTO:
            return{
                ...state,
                ownPhoto: action.photo
            };
        case IS_OWN_PHOTO_LOADED:
            return{
                ...state,
                isOwnPhotoLoaded: action.isOwnPhotoLoaded
            };
        case CHANGE_SUBMITE:
            return{
                ...state,
                isSubmited: action.isSubmited
            };
        case IS_PROFILE_DESCRIPTION_LOAD:
            return{
                ...state,
                isProfileDescriptionLoad: action.isProfileDescriptionLoad
            };
        default:
            return state;
    }
};

const isProfileDescriptionLoadAC = (isProfileDescriptionLoad) => {
    return{
        type: IS_PROFILE_DESCRIPTION_LOAD,
        isProfileDescriptionLoad
    }
};

export const showEditAC = (showEdit) => {
    return{
        type: SHOW_EDIT,
        showEdit
    }
};

export const changeSubmitAC = (isSubmited) => {
    return{
        type: CHANGE_SUBMITE,
        isSubmited
    }
};

const isOwnPhotoLoadedAC = (isOwnPhotoLoaded) => {
    return{
        type: IS_OWN_PHOTO_LOADED,
        isOwnPhotoLoaded
    }
};

const getOwnPhotoAC = (photo)=> {
    return{
        type: GET_OWN_PHOTO,
        photo
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

const getUserProfileDescriptionThunk = (uId) => async (dispatch) => {
    let response = await profile.getUserProfileDescriptionApi(uId);
    let data = response.data;
    dispatch(profileDataAC(data));
};

export const setOwnProfileDataThunk = (ownProfileData) => async (dispatch, getState) => {
    dispatch(isProfileDescriptionLoadAC(false));
    const uId = getState().isAuth.authData.id;
    let response = await profile.setOwnProfileDataApi(ownProfileData);
    if(response.data.resultCode === 0){
        dispatch(getUserProfileDescriptionThunk(uId));
        dispatch(isProfileDescriptionLoadAC(true));
    }
};

export const getProfileDataThunk = (uId) => async (dispatch) => {
    dispatch(isProfileLoadAC(false));
    let response = await profile.getUserProfile(uId);
    let data = response.data;
    dispatch(profileDataAC(data));
    dispatch(isProfileLoadAC(true));
};

export const getProfilePhotoThunk = (uId) => async (dispatch) => {
    dispatch(isOwnPhotoLoadedAC(false));
    let response = await profile.getUserProfile(uId);
    let foto = response.data.photos.small;
    dispatch(getOwnPhotoAC(foto));
    dispatch(isOwnPhotoLoadedAC(true));
};

export const setPhotoThunk = (photoFile) => async (dispatch) => {
    dispatch(isPhotoUpdatedAC(false));
    let response = await profile.setProfilePhoto(photoFile);
    if(response.data.resultCode === 0){
        dispatch(updateProfilePhotoAC(response.data.data.photos));
        dispatch(isPhotoUpdatedAC(true));
        dispatch(getOwnPhotoAC(response.data.data.photos.small));
    }
};

export default profileReducer;