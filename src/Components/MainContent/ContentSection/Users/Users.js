import React from 'react';
import style from './Users.module.css';
import PaginatorContainer from "./Paginator/PaginatorContainer";

let Users = (props) => {
    return(
        <div className={style.users}>
            <PaginatorContainer/>
            we are users
        </div>
    )
};

export default Users;