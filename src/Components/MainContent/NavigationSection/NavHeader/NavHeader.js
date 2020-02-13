import React  from "react";
import style from './NavHeader.module.css';
import noLogedUserAva from '../../../../assets/anonymity.png';
import logedUserAva from '../../../../assets/man.png';
import NavHeaderLocalData from "./NavHeaderLocalUserData";

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
                    {props.app ? <NavHeaderLocalData/> : null}
                </div>
            }

        </div>
    )
};

export default NavHeader;