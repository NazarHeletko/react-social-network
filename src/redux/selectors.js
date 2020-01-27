import {createSelector} from 'reselect';
const isAuthSimpleSelector = (state) => {
    return state.isAuth.isAuth;
};
export const isAuthSelector = createSelector(isAuthSimpleSelector, (isAuth)=>{
    return isAuth;
});