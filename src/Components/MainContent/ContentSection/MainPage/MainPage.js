import React from "react";
import style from "./MainPage.module.css";
import Status from "./Status/Status";

let MainPage = (props) => {
    return(
        <div className={style['main-page']}>
            {!props.isAuth ?
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
                    <p>used container functions:</p>
                    <ul>
                        <li>Connect</li>
                        <li>withRouter</li>
                        <li>reduxForm</li>
                    </ul>
                    <p>Other features:</p>
                    <ul>
                        <li>Only functional components (hooks)</li>
                        <li>High order components</li>
                        <li>Form validation</li>
                        <li>Selectors</li>
                    </ul>
                    <button>go</button>
                </div> :

                <div className={style['logged-main-page']}>
                    <Status/>
                </div>

            }
        </div>
    )
};

export default MainPage;