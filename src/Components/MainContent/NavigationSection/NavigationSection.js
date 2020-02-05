import React from 'react';
import style from './NavigationSection.module.css';
import NavHeaderContainer from "./NavHeader/NavHeaderContainer";
import {NavLink} from "react-router-dom";

let NavigationSection = (props) => {
    return(
        <div className={style['navigation-section']}>
            <NavHeaderContainer/>
            <div className={style['main-navigation']}>
                <ul>
                    <li><NavLink  to=''>main</NavLink></li>
                    <li><NavLink  to={`profile/${props.uId}`}>profile</NavLink></li>
                    <li><NavLink  to='users'>users</NavLink></li>
                </ul>
            </div>
        </div>
    )
};

export default NavigationSection;