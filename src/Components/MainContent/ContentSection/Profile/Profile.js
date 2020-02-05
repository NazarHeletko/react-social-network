import React, {useEffect} from "react";
import style from './Profile.module.css';
import noPhotoUser from '../../../../assets/man.png';
import Preloader from "../../../common/Preloader/Preloader";
import facebookLogo from '../../../../assets/facebook.png';
import instagramLogo from '../../../../assets/instagram.png';
import twetterLogo from '../../../../assets/twitter.png';
import githubLogo from '../../../../assets/github.png';

let Profile = (props) => {
    useEffect(()=>{
        props.getProfileDataThunk(props.match.params.uId);

    }, [props.match.params.uId]);

    let abutMeExist = props.profileData.aboutMe;
    let lookingJobExist = props.profileData.lookingForAJob;
    let descriptionExist = props.profileData.lookingForAJobDescription;
    return(
        <>
            {props.isProfileLoad ?
                <div className={style.profile}>
                    <img src={props.profileData.photos.large === null ? noPhotoUser : props.profileData.photos.large}/>
                    <h3>{props.profileData.fullName}</h3>
                    <p>{`About me: ${abutMeExist ? abutMeExist : 'no data'}`}</p>
                    <div className={style['social-btns']}>
                        <a href='http://facebook.com/'><img src={facebookLogo} /></a>
                        <a href='https://www.instagram.com/'><img src={instagramLogo} /></a>
                        <a href='https://twitter.com/'><img src={twetterLogo} /></a>
                        <a href='https://github.com/'><img src={githubLogo} /></a>
                    </div>
                    <p>{`Looking for a job: ${lookingJobExist ? lookingJobExist : 'no data'}`}</p>
                    <p>{`My skils: ${descriptionExist ? descriptionExist : 'no data'}`}</p>
                </div> :
                <Preloader/>
            }
        </>
    )
};

export default Profile;