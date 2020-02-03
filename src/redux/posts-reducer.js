import {reset} from 'redux-form';
const ADD_POST = 'ADD_POST';

let initialState = {
    posts: ['first one', 'second one', 'third one']
};

const postsReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                posts: [...state.posts, action.post]
            };
        default:
            return state;
    }
};

const addPostAC = (post) => {
    return{
        type: ADD_POST,
        post
    }
};

export const addPostThunk = (post) => (dispatch) => {
    dispatch(addPostAC(post));
    dispatch(reset('postsData'));
};

export default postsReducer;