import React from "react";
import {reduxForm, Field} from 'redux-form';
import style from './Posts.module.css';

let TextareaWrapper = ({input, meta, ...props}) => {
    return(
        <div className={style['custom-textarea']}>
            <textarea {...input} {...props} placeholder="enter your post text"/>
        </div>
    )
};

let PostsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field  name="singlePost" component={TextareaWrapper} />
            <button>add post</button>
        </form>
    )
};

export default reduxForm({form: 'postsData'})(PostsForm);