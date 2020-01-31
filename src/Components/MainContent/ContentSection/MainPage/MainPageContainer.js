import {connect} from 'react-redux';
import MainPage from "./MainPage";
import {isAuthSelector} from "../../../../redux/selectors";

let mapStateToProps = (state) => {
    return{
        isAuth: isAuthSelector(state)
    }
};

export default connect(mapStateToProps, {})(MainPage);