import React, {useEffect} from "react";
import style from './NavHeader.module.css';
import noLogedUserAva from '../../../../assets/anonymity.png';
import NavHeaderLocalData from "./NavHeaderLocalUserData";
import Preloader from "../../../common/Preloader/Preloader";

let NavHeader = (props) => {

    useEffect(()=>{
        props.getProfilePhotoThunk(props.uId);
    },[props.profilePhoto, props.uId]);

    return(
        <div className={style['nav-header']}>
            {!props.isAuth ?
                <div className={style['no-loged-user']}>
                        <img src={noLogedUserAva} alt="no loged user"/>
                        <p>Hi, there! To see more functionality, please, enter the site.</p>
                </div> :
                <div className={style['loged-user']}>
                    {props.isOwnPhotoLoaded ?
                        <img src={props.profilePhoto ? props.profilePhoto : noLogedUserAva} alt="no loged user"/>
                        : <div className={style['preloader-own-photo-wrpr']}><Preloader/></div>
                    }
                    {props.app ? <NavHeaderLocalData/> : null}
                </div>
            }

        </div>
    )
};

export default NavHeader;