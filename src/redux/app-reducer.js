import {isAuthThunk} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state=initialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

const initializedSucessAC = () => {
    return{
        type: INITIALIZED_SUCCESS
    }
};

export const initializedSucessThunk = () => (dispatch) => {
    let firstPromise = dispatch(isAuthThunk());
    Promise.all([firstPromise]).then(()=>{
        dispatch(initializedSucessAC());
    })
};

export default appReducer;