import {connect} from 'react-redux';
import NavHeader from "./NavHeader";
import {
    authUserIdSimpleSelector,
    isAuthSelector,
    isOwnPhotoLoadedSimple,
    profilePhotoSimpleSelector
} from "../../../../redux/selectors";
import {getProfilePhotoThunk} from "../../../../redux/profile-reducer";


let mapStateToProps = (state) => {
    return{
        isAuth: isAuthSelector(state),
        app: state.app.initialized,
        profilePhoto: profilePhotoSimpleSelector(state),
        uId: authUserIdSimpleSelector(state),
        isOwnPhotoLoaded: isOwnPhotoLoadedSimple(state)
    }
};

export default connect(mapStateToProps, {getProfilePhotoThunk})(NavHeader);