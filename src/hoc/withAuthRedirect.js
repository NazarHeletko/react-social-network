import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isAuthSelector} from "../redux/selectors";

export let withAuthRedirect = (Component) => {
    let withAuthRedirectWrapper = (props) => {
        if(!props.auth) return <Redirect to='/login' />;
        return(
            <Component {...props} />
        )
    };
    let mapStateToProps = (state) => {
        return{
            auth: isAuthSelector(state)
        }
    };
    return connect(mapStateToProps, {})(withAuthRedirectWrapper);
};