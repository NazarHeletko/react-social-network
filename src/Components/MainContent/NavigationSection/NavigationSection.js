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
                    <li><NavLink onClick={()=>props.linkActivateAC()} to=''>main</NavLink></li>
                    <li><NavLink onClick={()=> props.linkDeactivateAC(1)} to='profile'>profile</NavLink></li>
                    <li><NavLink onClick={()=> props.linkDeactivateAC(1)} to='users'>users</NavLink></li>
                </ul>
            </div>
        </div>
    )
};

export default NavigationSection;