import React from "react";
import {reduxForm, Field} from 'redux-form';

let StatusForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field autoFocus={true} onBlur={()=>props.setActivatingModeCallBack(false)} placeholder='status' component='input' name='status'/>
            <button>e</button>
        </form>
    )
};

export default reduxForm({form: 'status'})(StatusForm);