import React from "react";
import style from './Posts.module.css';

let Posts = (props) => {
    return(
        <div className={style.posts}>
            <textarea />
            <button>add</button>
            <div className={style['all-posts']}>
                {props.posts.map(el => <div><p>{el}</p></div>)}
            </div>
        </div>
    )
};

export default Posts;