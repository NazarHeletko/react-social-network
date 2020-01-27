import {connect} from 'react-redux';
import Header from "./Header";
import {isAuthSelector} from "../../redux/selectors";
import {isAuthThunk, logOutThunk} from "../../redux/auth-reducer";
import React from "react";

let HeaderContainer = (props)=>{

    let onClickLogout = () => {
        props.logOutThunk();
    };

    return(
        <Header {...props} onClickLogout={onClickLogout}/>
    )
};

let mapStateToProps = (state) => {
    return{
        isAuth: isAuthSelector(state)
    }
};

export default connect(mapStateToProps, {isAuthThunk, logOutThunk})(HeaderContainer);