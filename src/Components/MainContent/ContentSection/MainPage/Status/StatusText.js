import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {authUserIdSimpleSelector,  statusTextSimpleSelector} from "../../../../../redux/selectors";
import {getStatusThunk} from "../../../../../redux/status-reducer";

let StatusText = (props) => {

    return(
        <>
            {props.statusText}
        </>
    )
};

let mapStateToProps = (state) => {
    return{
        statusText: statusTextSimpleSelector(state),
        uId: authUserIdSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {getStatusThunk})(StatusText);