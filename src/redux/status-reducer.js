const IS_STATUS_LOADING = 'IS_STATUS_LOADING';

let initialState = {
    isStatusLoading: false
};

const statusReducer = (state=initialState, action) => {
    switch(action.type){
        case IS_STATUS_LOADING:
            return{
                ...state,
                isStatusLoading: action.isStatusLoading
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

export default statusReducer;
