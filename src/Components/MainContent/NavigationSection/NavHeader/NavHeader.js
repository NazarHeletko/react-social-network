import React from "react";
import style from './NavHeader.module.css';
import noLogedUserAva from '../../../../assets/anonymity.png';
import logedUserAva from '../../../../assets/man.png';

let NavHeader = (props) => {
    return(
        <div className={style['nav-header']}>
            {!props.isAuth ?
                <div className={style['no-loged-user']}>
                        <img src={noLogedUserAva} alt="no loged user"/>
                        <p>Hi, there! To see more functionality, please, enter the site.</p>
                </div> :
                <div className={style['loged-user']}>
                    <img src={logedUserAva} alt="no loged user"/>
                    <h4>{props.authData.login}</h4>
                    <p>{props.authData.email}</p>
                </div>
            }
        </div>
    )
};

export default NavHeader;