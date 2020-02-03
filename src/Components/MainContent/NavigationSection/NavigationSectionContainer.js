import {connect} from 'react-redux';
import NavigationSection from "./NavigationSection";
import {linkActivateAC, linkDeactivateAC} from "../../../redux/link-control-reducer";

let mapStateToProps = (state) => {

};

export default connect(mapStateToProps, {linkDeactivateAC, linkActivateAC})(NavigationSection);