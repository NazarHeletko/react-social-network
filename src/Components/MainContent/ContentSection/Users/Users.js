import React, {useEffect} from 'react';
import style from './Users.module.css';
import PaginatorContainer from "./Paginator/PaginatorContainer";
import noUserPhoto from '../../../../assets/anonymity.png';
import Preloader from "../../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";



let Users = (props) => {
    useEffect(()=> {
       props.getUsersThunk();
       return () => {
            props.setActivePageAC(1);
       }

    }, []);

    return(
        <div

            className={style.users}>
            <PaginatorContainer/>
            { props.isUsersLoaded ?
                props.usersData.map(el => {
                    return(
                        <div className={style['single-user']}>
                            <NavLink to={`profile/${el.id}`}><img src={el.photos.small ? el.photos.small : noUserPhoto} alt="user photo"/></NavLink>
                            <NavLink to={`profile/${el.id}`}><h2>{el.name}</h2></NavLink>
                            {el.followed ? <button disabled={props.btnsDisabled.some((number)=>{
                                return number === el.id ;
                            })} onClick={()=>{
                                props.unfollowThunk(el.id);
                            }}>unfollow</button> : <button disabled={props.btnsDisabled.some((number)=>{
                                return number === el.id ;
                            })} onClick={()=>{
                                props.followThunk(el.id);
                            }}>follow</button>}
                        </div>
                    )
                }) : <Preloader/>
            }
        </div>
    )
};

export default Users;