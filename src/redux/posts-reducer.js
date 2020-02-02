const ADD_POST = 'ADD_POST';

let initialState = {
    posts: ['first one', 'second one', 'third one']
};

const postsReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                posts: [...state.posts, action.posts]
            };
        default:
            return state;
    }
};


export default postsReducer;