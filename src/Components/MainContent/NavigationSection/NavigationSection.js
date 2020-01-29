import React from 'react';
import style from './NavigationSection.module.css';
import NavHeaderContainer from "./NavHeader/NavHeaderContainer";

let NavigationSection = () => {
    return(
        <div className={style['navigation-section']}>
            <NavHeaderContainer/>
        </div>
    )
};

export default NavigationSection;