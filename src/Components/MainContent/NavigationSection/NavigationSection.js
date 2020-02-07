import React from 'react';
import style from './NavigationSection.module.css';
import NavHeaderContainer from "./NavHeader/NavHeaderContainer";
import {Link} from "react-router-dom";

let NavigationSection = (props) => {
    return(
        <div className={style['navigation-section']}>
            <NavHeaderContainer/>
            <div className={style['main-navigation']}>
                <ul>
                    <li><Link  to='/'>main</Link></li>
                    <li><Link  to={`/profile/${props.uId}`}>profile</Link></li>
                    <li><Link  to='/users'>users</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default NavigationSection;