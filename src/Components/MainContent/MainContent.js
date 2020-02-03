import React from 'react';
import style from './MainContent.module.css'

import ContentSectionContainer from "./ContentSection/ContentSectionContainer";
import NavigationSectionContainer from "./NavigationSection/NavigationSectionContainer";

let MainContent = (props) => {
    return(
        <div className={style['main-content']}>
            <NavigationSectionContainer/>
            <ContentSectionContainer/>
        </div>
    )
};

export default MainContent;