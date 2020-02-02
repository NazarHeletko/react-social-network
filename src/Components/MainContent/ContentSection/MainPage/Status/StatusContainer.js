import Status from "./Status";
import {connect} from "react-redux";
import {
    authUserIdSimpleSelector,
    isStatusLoadingSimpleSelector,
    statusTextSimpleSelector
} from "../../../../../redux/selectors";
import {getStatusThunk, setStatusThunk} from "../../../../../redux/status-reducer";


let mapStateToProps = (state) => {
    return{
        isStatusLoading: isStatusLoadingSimpleSelector(state),
        statusText: statusTextSimpleSelector(state),
        uId: authUserIdSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {getStatusThunk, setStatusThunk})(Status);
