import Status from "./Status";
import {connect} from "react-redux";
import {isStatusLoadingSimpleSelector} from "../../../../../redux/selectors";


let mapStateToProps = (state) => {
    return{
        isStatusLoading: isStatusLoadingSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {})(Status);
