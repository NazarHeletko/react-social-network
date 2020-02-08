import {connect} from 'react-redux';
import Users from "./Users";
import {followThunk, getUsersThunk, unfollowThunk} from "../../../../redux/users-reducer";
import {
    btnDisabledSimpleSelector,
    isUserLoadedSimpleSelector,
    usersDataSimpleSelector
} from "../../../../redux/selectors";

let mapStateToProps = (state) => {
    return{
        usersData: usersDataSimpleSelector(state),
        isUsersLoaded: isUserLoadedSimpleSelector(state),
        btnsDisabled: btnDisabledSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {getUsersThunk, followThunk, unfollowThunk})(Users);