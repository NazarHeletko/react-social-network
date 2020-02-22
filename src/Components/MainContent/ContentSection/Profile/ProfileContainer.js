import {connect} from 'react-redux';
import Profile from "./Profile";
import {
    getProfileDataThunk,
    setOwnProfileDataThunk,
    setPhotoThunk
} from "../../../../redux/profile-reducer";
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
        isProfileLoad: isProfileLoadSimpleSelector(state),
        uId: authUserIdSimpleSelector(state),
        isPhotoUpdated: isPhotoUpdeted(state),
        profilePhoto: state.profileData.profileData.photos ? state.profileData.profileData.photos.large : null
    }
};

 export default compose(
     withAuthRedirect,
     connect(mapStateToProps, {getProfileDataThunk, setPhotoThunk, setOwnProfileDataThunk}),
     withRouter
 )(Profile);