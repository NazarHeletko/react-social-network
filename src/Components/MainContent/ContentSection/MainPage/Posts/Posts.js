import React from "react";
import style from './Posts.module.css';
import PostsForm from "./PostsForm";

let Posts = (props) => {
    let onSubmit = (formData) => {
      if(!formData.singlePost) return;
      props.addPostThunk(formData.singlePost);
    };
    return(
        <div className={style.posts}>
            <PostsForm onSubmit={onSubmit}/>
            <div className={style['all-posts']}>
                {props.posts.map(el => <div><p>{el}</p></div>)}
            </div>
        </div>
    )
};

export default Posts;