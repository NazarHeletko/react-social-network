import {connect} from 'react-redux';
import Profile from "./Profile";
import {getProfileDataThunk, setPhotoThunk} from "../../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {
    authUserIdSimpleSelector, isPhotoUpdeted,
    isProfileLoadSimpleSelector,
    profileDataSimpleSelector
} from "../../../../redux/selectors";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        profileData: profileDataSimpleSelector(state),
        isProfileLoad: isProfileLoadSimpleSelector(state),
        uId: authUserIdSimpleSelector(state),
        isPhotoUpdated: isPhotoUpdeted(state)
    }
};

 export default compose(
     withAuthRedirect,
     connect(mapStateToProps, {getProfileDataThunk, setPhotoThunk}),
     withRouter
 )(Profile);