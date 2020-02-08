import {connect} from 'react-redux';
import Paginator from "./Paginator";
import {
    activePageSimpleSelector,
    totalUsersSimpleSelector,
    usersOnPageSimpleSelector
} from "../../../../../redux/selectors";
import {getUsersThunk, setActivePageAC, setTotalUsersThunk} from "../../../../../redux/users-reducer";

let mapStateToProps = (state) => {
    return{
        totalUsers: totalUsersSimpleSelector(state),
        usersOnPage: usersOnPageSimpleSelector(state),
        activePage: activePageSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {setActivePageAC, setTotalUsersThunk, getUsersThunk})(Paginator);