const DEACTIVATE_MAIN_PAGE = 'DEACTIVATE_MAIN_PAGE';
const ACTIVATE_MAIN_PAGE = 'ACTIVATE_MAIN_PAGE';

let initialState = {
    checkingArr: []
};

const linkControlReducer = (state=initialState, action) => {
    switch(action.type){
        case DEACTIVATE_MAIN_PAGE:
            return{
                ...state,
                checkingArr: [...state.checkingArr, action.element]
            };
        case ACTIVATE_MAIN_PAGE:
            return{
                ...state,
                checkingArr: []
            };
        default:
            return state;
    }
};

export const linkDeactivateAC = (element) => {
    return{
        type: DEACTIVATE_MAIN_PAGE,
        element
    }
};

export const linkActivateAC = () => {
    return{
        type: ACTIVATE_MAIN_PAGE
    }
};

export default linkControlReducer;