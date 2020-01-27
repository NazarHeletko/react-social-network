import React, {useEffect} from 'react';
import style from './Header.module.css';
import logo from '../../assets/logo.png';

 let Header = ({isAuth, isAuthThunk, onClickLogout}) => {
     useEffect(()=>{
         isAuthThunk();
     }, [isAuth]);
     console.log('Був рендер!');
    return(
        <div className={style.header}>
            <div className={style['inner-header']}>
                <div className={style.logo}><img src={logo} /></div>
                <div className={style.log}>
                    {isAuth ? <button onClick={onClickLogout}>Logout</button> : <button>Sign in</button>}
                </div>
            </div>
        </div>
    )
};

export default Header;