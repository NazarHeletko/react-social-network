import React from 'react';
import style from './NavigationSection.module.css';
import NavHeaderContainer from "./NavHeader/NavHeaderContainer";
import { NavLink} from "react-router-dom";

let NavigationSection = (props) => {
    return(
        <div className={style['navigation-section']}>
            <NavHeaderContainer/>
            <div className={style['main-navigation']}>
                <ul>
                    <li><NavLink activeClassName={style.active} exact to='/'>main</NavLink></li>
                    <li><NavLink exact activeClassName={style.active} to={`/profile/${props.uId}`}>profile</NavLink></li>
                    <li><NavLink  activeClassName={style.active} to='/users'>users</NavLink></li>
                </ul>
            </div>
        </div>
    )
};

export default NavigationSection;