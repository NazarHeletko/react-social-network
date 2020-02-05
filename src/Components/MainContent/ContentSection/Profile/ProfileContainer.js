import {connect} from 'react-redux';
import Profile from "./Profile";
import {getProfileDataThunk} from "../../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {isAuthSelector, isProfileLoadSimpleSelector, profileDataSimpleSelector} from "../../../../redux/selectors";

let withRouterProfile = withRouter(Profile);

let mapStateToProps = (state) => {
    return{
        profileData: profileDataSimpleSelector(state),
        isProfileLoad: isProfileLoadSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {getProfileDataThunk})(withRouterProfile);