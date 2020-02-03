import {createSelector} from 'reselect';

// All I have done here is just an example of using 'reselect library'.
// At the moment, this app do not need it.

const isAuthSimpleSelector = (state) => {
    return state.isAuth.isAuth;
};
export const isAuthSelector = createSelector(isAuthSimpleSelector, (isAuth)=>{
    return isAuth;
});

const isAuthDataSimpleSelector = (state) => {
    return state.isAuth.authData;
};

export const authUserIdSimpleSelector = (state) => {
    return state.isAuth.authData.id;
};
export const isAuthDataSelector = createSelector(isAuthDataSimpleSelector, (authData)=>{
    return authData;
});

export const isStatusLoadingSimpleSelector = (state) => {
    return state.status.isStatusLoading;
};

export const statusTextSimpleSelector = (state) => {
    return state.status.statusText;
};
export const postsSimpleSelector = (state) => {
    return state.posts.posts;
};
export const linkControlSimpleSelector = (state) => {
    return state.linkControl.checkingArr;
};