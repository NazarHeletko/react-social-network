import {connect} from 'react-redux';
import NavigationSection from "./NavigationSection";
import {authUserIdSimpleSelector, isAuthSelector} from "../../../redux/selectors";

let mapStateToProps = (state) => {
    return{
        uId: authUserIdSimpleSelector(state),
        isAuth: isAuthSelector(state)
    }
};

export default connect(mapStateToProps, {})(NavigationSection);