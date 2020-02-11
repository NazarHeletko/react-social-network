import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";

let InputWrapper = ({input, meta, ...props}) => {
    const showError = meta.error && meta.touched;
    return(
        <div className={`${showError ? style.error : null} ${style['input-wrapper']}`}>
            <input {...input} {...props} />
            {showError ? <span>{meta.error}</span> : null}
        </div>
    )
};

let LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField]} placeholder='Login' component={InputWrapper} name='login'/>
            <Field validate={[requiredField]} placeholder='Password' component={InputWrapper} name='password'/>
            <div className={style['remember-me']}>
                <span>Remeber me:</span>
                <Field component='input' type='checkbox' name='rememberMe'/>
            </div>
            <p className={style['incorect']}>{props.error}</p>
            <button>Login</button>
        </form>
    )
};

export default reduxForm({form: 'login'})(LoginForm);