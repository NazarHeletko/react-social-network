import {connect} from 'react-redux';
import NavHeader from "./NavHeader";
import {isAuthDataSelector, isAuthSelector} from "../../../../redux/selectors";

let mapStateToProps = (state) => {
    return{
        isAuth: isAuthSelector(state),
        authData: isAuthDataSelector(state)
    }
};

export default connect(mapStateToProps, {})(NavHeader);