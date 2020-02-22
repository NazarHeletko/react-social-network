import React from 'react';
import {connect} from 'react-redux';
import style from "./Profile.module.css";
import facebookLogo from "../../../../assets/facebook.png";
import instagramLogo from "../../../../assets/instagram.png";
import twetterLogo from "../../../../assets/twitter.png";
import githubLogo from "../../../../assets/github.png";
import EditProfileInfoForm from "./EditProfileInfoForm";
import {isProfileLoadSimpleSelector, profileDataSimpleSelector} from "../../../../redux/selectors";
import {setOwnProfileDataThunk} from "../../../../redux/profile-reducer";
import Preloader from "../../../common/Preloader/Preloader";

let ProfileMainContent = (props) => {
    let abutMeExist = props.profileData.aboutMe;
    let lookingJobExist = props.profileData.lookingForAJob;
    let descriptionExist = props.profileData.lookingForAJobDescription;

    let onSubmit = (formData) => {

        function isEmpty(formData) {

            for(let key in formData){
                if(formData[key] === null){
                    formData[key] = "false";
                }
            }


            let isEqual = JSON.stringify(formData)===JSON.stringify(props.profileData);
                if (!isEqual) {
                    let ownData = {
                        "aboutMe": formData.aboutMe ? formData.aboutMe : false,
                        "contacts": {
                            facebook: formData.contacts.facebook ? formData.contacts.facebook : null,
                            github: formData.contacts.github ? formData.contacts.github : null,
                            instagram: formData.contacts.instagram ? formData.contacts.instagram : null,
                            mainLink: null,
                            twitter: formData.contacts.twitter ? formData.contacts.twitter : null,
                            vk: null,
                            website: null,
                            youtube: null
                        },
                        "lookingForAJob": formData.lookingForAJob ? formData.lookingForAJob : false,
                        "lookingForAJobDescription": formData.lookingForAJobDescription ? formData.lookingForAJobDescription : false,
                        "fullName": formData.fullName ? formData.fullName : false
                    };
                    props.setOwnProfileDataThunk(ownData);
                    return false;
                }

            return false;
        }

        isEmpty(formData);
    };
    return(
        <div className={style['profile-main-content']}>
            {props.isProfileDescriptionLoad ?
            <div>
            {!props.showEdit ?
                <div className={style['main-profile-content']}>
                    <h2>{props.profileData.fullName ? props.profileData.fullName : 'Please, set your name'}</h2>
                    <p><span>About me: </span>{!(abutMeExist === 'false') ? abutMeExist : 'no data'}</p>
                    <div className={style['social-btns']}>
                        <a target='blank'
                           onClick={!props.profileData.contacts.facebook ? (e) => e.preventDefault() : null}
                           href={props.profileData.contacts.facebook ? props.profileData.contacts.facebook : ''}><img
                            src={facebookLogo}/></a>
                        <a target='blank'
                           onClick={!props.profileData.contacts.instagram ? (e) => e.preventDefault() : null}
                           href={props.profileData.contacts.instagram ? props.profileData.contacts.instagram : ''}><img
                            src={instagramLogo}/></a>
                        <a target='blank'
                           onClick={!props.profileData.contacts.twitter ? (e) => e.preventDefault() : null}
                           href={props.profileData.contacts.twitter ? props.profileData.contacts.twitter : ''}><img
                            src={twetterLogo}/></a>
                        <a target='blank'
                           onClick={!props.profileData.contacts.github ? (e) => e.preventDefault() : null}
                           href={props.profileData.contacts.github ? props.profileData.contacts.github : ''}><img
                            src={githubLogo}/></a>
                    </div>
                    <p><span>Looking for a job: </span>{lookingJobExist ? 'yes' : 'no'}</p>
                    <p><span>My skills: </span>{!(descriptionExist === 'false') ? descriptionExist : 'no data'}
                    </p>
                </div> : <div className={style['edit-profile-form']}><EditProfileInfoForm initialValues={{
                    ...props.profileData,
                    aboutMe: props.profileData.aboutMe === 'false' ? null : props.profileData.aboutMe,
                    lookingForAJob: props.profileData.lookingForAJob === false ? null : props.profileData.lookingForAJob,
                    lookingForAJobDescription: props.profileData.lookingForAJobDescription === 'false' ? null : props.profileData.lookingForAJobDescription,
                    fullName: props.profileData.fullName === 'false' ? null : props.profileData.fullName

                }} isSubmited={props.isSubmited} onSubmit={onSubmit}/></div>
            }</div> : <Preloader/>}
        </div>
    )
};

let mapStateToProps = (state) => {
    return{
        profileData: profileDataSimpleSelector(state),
        showEdit: state.profileData.showEdit,
        isProfileLoad: isProfileLoadSimpleSelector(state),
        isProfileDescriptionLoad: state.profileData.isProfileDescriptionLoad
    }
};

export default connect(mapStateToProps, {setOwnProfileDataThunk})(ProfileMainContent);