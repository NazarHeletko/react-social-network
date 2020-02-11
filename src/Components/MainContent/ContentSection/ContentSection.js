import React from "react";
import style from './ContentSection.module.css';
import {Route, Switch} from "react-router-dom";
import MainPageContainer from "./MainPage/MainPageContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import LoginContainer from "../../common/Login/LoginContainer";


let ContentSection = (props) => {
    return(
        <div className={style['content-section']}>

                <Switch>
                    <Route exact path="/" render={()=><MainPageContainer/>}/>
                    <Route   path="/profile/:uId?" render={()=><ProfileContainer/>}/>
                    <Route   path="/users" render={()=><UsersContainer/>}/>
                    <Route   path="/login" render={()=><LoginContainer/>}/>
                </Switch>

        </div>
    )
};

export default ContentSection;