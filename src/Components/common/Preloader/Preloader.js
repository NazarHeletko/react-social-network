import React from "react";
import style from './Preloader.module.css';
import preloaderImg from '../../../assets/preloader.gif';

let Preloader = (props) => {
    return(
        <div className={style.preloader}>
            <img src={preloaderImg} alt="preloader"/>
        </div>
    )
};

export default Preloader;