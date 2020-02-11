import React, {useEffect} from "react";
import style from './Profile.module.css';
import noPhotoUser from '../../../../assets/anonymity.png';
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
        <div

            className={style['profile-wrapper']}>
            {props.isProfileLoad ?
                <div className={style.profile}>
                    <img src={props.profileData.photos.large === null ? noPhotoUser : props.profileData.photos.large}/>
                    <h2>{props.profileData.fullName}</h2>
                    <p><span>About me: </span>span>{`${abutMeExist ? abutMeExist : 'no data'}`}</p>
                    <div className={style['social-btns']}>
                        <a href='http://facebook.com/'><img src={facebookLogo} /></a>
                        <a href='https://www.instagram.com/'><img src={instagramLogo} /></a>
                        <a href='https://twitter.com/'><img src={twetterLogo} /></a>
                        <a href='https://github.com/'><img src={githubLogo} /></a>
                    </div>
                    <p><span>Looking for a job: </span>{`${lookingJobExist ? lookingJobExist : 'no data'}`}</p>
                    <p><span>My skils: </span>{`${descriptionExist ? descriptionExist : 'no data'}`}</p>
                </div> :
                <Preloader/>
            }
        </div>
    )
};

export default Profile;