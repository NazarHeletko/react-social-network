import Status from "./Status";
import {connect} from "react-redux";
import {
    authUserIdSimpleSelector,
    isStatusLoadingSimpleSelector
} from "../../../../../redux/selectors";
import {getStatusThunk, setStatusThunk} from "../../../../../redux/status-reducer";


let mapStateToProps = (state) => {
    return{
        isStatusLoading: isStatusLoadingSimpleSelector(state),
        app: state.app.initialized,
        uId: authUserIdSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {getStatusThunk, setStatusThunk})(Status);
