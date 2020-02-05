import React from "react";
import style from './ContentSection.module.css';
import {Route} from "react-router-dom";
import MainPageContainer from "./MainPage/MainPageContainer";
import ProfileContainer from "./Profile/ProfileContainer";

let ContentSection = (props) => {
    return(
        <div className={style['content-section']}>
                  <Route exact path="/" render={()=><MainPageContainer/>}/>
                  <Route path="/profile/:uId" render={()=><ProfileContainer/>}/>
        </div>
    )
};

export default ContentSection;