import {connect} from 'react-redux';
import Users from "./Users";
import {followThunk, getUsersThunk, setActivePageAC, unfollowThunk} from "../../../../redux/users-reducer";
import {
    btnDisabledSimpleSelector,
    isUserLoadedSimpleSelector,
    usersDataSimpleSelector
} from "../../../../redux/selectors";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return{
        usersData: usersDataSimpleSelector(state),
        isUsersLoaded: isUserLoadedSimpleSelector(state),
        btnsDisabled: btnDisabledSimpleSelector(state)
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUsersThunk, followThunk, unfollowThunk, setActivePageAC}),
)(Users)