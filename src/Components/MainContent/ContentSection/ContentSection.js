import React from "react";
import style from './ContentSection.module.css';
import {Route} from "react-router-dom";
import MainPageContainer from "./MainPage/MainPageContainer";

let ContentSection = () => {
    return(
        <div className={style['content-section']}>
            <Route path="/" render={()=><MainPageContainer/>}/>
        </div>
    )
};

export default ContentSection;