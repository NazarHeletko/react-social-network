import {connect} from 'react-redux';
import Posts from "./Posts";
import {postsSimpleSelector} from "../../../../../redux/selectors";

let mapStateToProps = (state) => {
    return{
        posts: postsSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {})(Posts);

