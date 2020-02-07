import React from "react";
import style from './ContentSection.module.css';
import {Route, Switch} from "react-router-dom";
import MainPageContainer from "./MainPage/MainPageContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";

let ContentSection = (props) => {
    return(
        <div className={style['content-section']}>
                <Switch>
                  <Route exact path="/" render={()=><MainPageContainer/>}/>
                  <Route exact  path="/profile/:uId?" render={()=><ProfileContainer/>}/>
                  <Route exact  path="/users" render={()=><UsersContainer/>}/>
                </Switch>
        </div>
    )
};

export default ContentSection;