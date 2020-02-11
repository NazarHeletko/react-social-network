import React, {useEffect} from 'react';
import style from './Header.module.css';
import logo from '../../assets/logo.png';
import {NavLink} from "react-router-dom";

 let Header = ({isAuth, isAuthThunk, onClickLogout}) => {
    return(
        <div className={style.header}>
            <div className={style['inner-header']}>
                <div className={style.logo}><img src={logo} /></div>
                <div className={style.log}>
                    {isAuth ? <button onClick={onClickLogout}>Logout</button> :
                        <NavLink to='/login'><button>Sign in</button></NavLink>}
                </div>
            </div>
        </div>
    )
};

export default Header;