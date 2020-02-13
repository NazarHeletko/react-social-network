import React, {useEffect} from "react";
import {isAuthDataSelector} from "../../../../redux/selectors";
import {connect} from "react-redux";
import {isAuthThunk} from "../../../../redux/auth-reducer";

let NavHeaderLocalData = (props)=> {
    useEffect(()=>{
        props.isAuthThunk()
    },[]);
    return(
        <>
            <h4>{props.authData.login}</h4>
            <p>{props.authData.email}</p>
        </>
    )
};

let mapStateToProps = (state) => {
    return{
        authData: isAuthDataSelector(state)
    }
};

export default connect(mapStateToProps, {isAuthThunk})(NavHeaderLocalData);