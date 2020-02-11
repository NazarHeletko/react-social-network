import React from "react";
import style from "./MainPage.module.css";
import StatusContainer from "./Status/StatusContainer";
import PostsContainer from "./Posts/PostsContainer";
import {NavLink} from "react-router-dom";


let MainPage = (props) => {
    return(
        <div

            className={style['main-page']}>
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
                        <li>Framer-motion</li>
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
                    <NavLink to='/login'><button>go</button></NavLink>
                </div> :

                <div className={style['logged-main-page']}>
                    <h3>My status:</h3>
                    <StatusContainer/>
                    <h3 className={style['posts-title']}>My posts:</h3>
                    <div className={style['posts-wrapper']}>
                        <PostsContainer/>
                    </div>
                </div>

            }
        </div>
    )
};

export default MainPage;