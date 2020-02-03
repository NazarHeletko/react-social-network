import {connect} from 'react-redux';
import Posts from "./Posts";
import {postsSimpleSelector} from "../../../../../redux/selectors";
import {addPostThunk} from "../../../../../redux/posts-reducer";

let mapStateToProps = (state) => {
    return{
        posts: postsSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {addPostThunk})(Posts);

