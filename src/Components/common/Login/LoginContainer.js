import {connect} from 'react-redux';
import Login from "./Login";
import {isAuthThunk, logInThunk} from "../../../redux/auth-reducer";
import {isAuthSelector} from "../../../redux/selectors";

let mapStateToProps = (state) => {
    return{
        isAuth: isAuthSelector(state),
        showCaptcha: state.isAuth.showCaptcha,
        captchaUrl: state.isAuth.captchaUrl
    }
};

export default connect(mapStateToProps, {logInThunk, isAuthThunk})(Login);