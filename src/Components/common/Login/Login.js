import React from "react";
import style from './Login.module.css';
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";


let Login = (props) => {
    let onSubmit = (formData) => {
        props.logInThunk(formData.login, formData.password, formData.rememberMe);
        props.isAuthThunk();
    };

    if(props.isAuth === true) return <Redirect to='/' />;

    return(
        <div className={style.login}>
                <h1>You need to login</h1>
                <LoginForm onSubmit={onSubmit} />
        </div>
    )
};

export default Login;