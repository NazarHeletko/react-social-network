import {connect} from 'react-redux';
import ContentSection from "./ContentSection";
import {linkControlSimpleSelector} from "../../../redux/selectors";

let mapStateToProps = (state) => {
    return{
        checkingArr: linkControlSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {})(ContentSection)