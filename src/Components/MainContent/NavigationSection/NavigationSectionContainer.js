import {connect} from 'react-redux';
import NavigationSection from "./NavigationSection";
import {authUserIdSimpleSelector} from "../../../redux/selectors";

let mapStateToProps = (state) => {
    return{
        uId: authUserIdSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {})(NavigationSection);