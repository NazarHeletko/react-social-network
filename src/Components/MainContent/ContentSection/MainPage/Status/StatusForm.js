import React from "react";
import {reduxForm, Field} from 'redux-form';
import style from './Status.module.css';
import {maxLenghtCreator} from "../../../../../utils/validators/validators";

let inputWrapper = ({input, meta, ...props}) => {
    return(
        <div className={`${style['input-wrapper']} ${meta.error ? style.error : null}`}>
            <input {...input} {...props} />
            <span>{meta.error}</span>
        </div>
    )
};

const maxLength55 = maxLenghtCreator(55);

let StatusForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field validate={[maxLength55]} autoFocus={true} onBlur={()=>{
                props.setActivatingModeCallBack(false);
                props.handleSubmit();
            }} placeholder='change status' component={inputWrapper} name='status'/>
        </form>
    )
};

export default reduxForm({form: 'status'})(StatusForm);