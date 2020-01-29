import React from 'react';
import style from './MainContent.module.css'
import NavigationSection from "./NavigationSection/NavigationSection";
import ContentSection from "./ContentSection/ContentSection";

let MainContent = (props) => {
    return(
        <div className={style['main-content']}>
            <NavigationSection/>
            <ContentSection/>
        </div>
    )
};

export default MainContent;