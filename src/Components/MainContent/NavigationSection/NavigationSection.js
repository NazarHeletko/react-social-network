import React from 'react';
import style from './NavigationSection.module.css';
import NavHeaderContainer from "./NavHeader/NavHeaderContainer";
import { NavLink} from "react-router-dom";
import homePng from '../../../assets/home-icon.png';
import profilePng from '../../../assets/user.png';
import usersPng from '../../../assets/group.png';

let NavigationSection = (props) => {
    return(
        <div style={props.isAuth ? {height: "178px"} : null} className={style['navigation-section']}>
            <NavHeaderContainer/>
            <div className={style['main-navigation']}>
                <ul>
                    <li><NavLink activeClassName={style.active} exact to='/'><img src={homePng} /><span>main</span></NavLink></li>
                    <li><NavLink exact activeClassName={style.active} to={`/profile/${props.uId}`}><img src={profilePng}/><span>profile</span></NavLink></li>
                    <li><NavLink  activeClassName={style.active} to='/users'><img src={usersPng}/><span>users</span></NavLink></li>
                </ul>
            </div>
        </div>
    )
};

export default NavigationSection;