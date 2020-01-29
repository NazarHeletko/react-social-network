import React from "react";
import style from "./MainPage.module.css";

let MainPage = (props) => {
    return(
        <div className={style['main-page']}>
            <div className={style['no-logged-main-page']}>
                <h3>until you log in to the site,<br/> a few words about the application</h3>
                <p>used libraries:</p>
                <ul>
                    <li>Redux</li>
                    <li>React-redux</li>
                    <li>React-router-dom</li>
                    <li>Axios</li>
                    <li>Redux-thunk</li>
                    <li>Reselect</li>
                </ul>
                <p>Other features:</p>
                <ul>
                    <li>Only functional components (hooks)</li>
                </ul>
            </div>
        </div>
    )
};

export default MainPage;