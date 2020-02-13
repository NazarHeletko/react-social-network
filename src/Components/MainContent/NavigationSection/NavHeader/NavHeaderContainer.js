import {connect} from 'react-redux';
import NavHeader from "./NavHeader";
import { isAuthSelector} from "../../../../redux/selectors";


let mapStateToProps = (state) => {
    return{
        isAuth: isAuthSelector(state),
        app: state.app.initialized
    }
};

export default connect(mapStateToProps, {})(NavHeader);