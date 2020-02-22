import React, {useEffect} from 'react';
import {reduxForm, Field} from 'redux-form';
import facebookLogo from '../../../../assets/facebook.png';
import instagramLogo from '../../../../assets/instagram.png';
import twetterLogo from '../../../../assets/twitter.png';
import githubLogo from '../../../../assets/github.png';
import style from './Profile.module.css';
import {requiredField} from "../../../../utils/validators/validators";

let FullNameWrapper = ({input, meta, ...props})=>{
    const showErr = meta.error && meta.touched;
    return(
        <div className={showErr ? style['full-name-error'] : null}>
            <input {...input} {...props} />
            {showErr ? <span>{meta.error}</span> : null}
        </div>
    )
};

let EditProfileInfoForm = (props) => {
    useEffect(()=>{
        return() => {
            props.handleSubmit();
        }
    },[]);
    return(
        <form >
            <div><span>Full name </span><Field validate={[requiredField]} component={FullNameWrapper} name={'fullName'}/></div>
            <div><span>About me: </span><Field component='input' name={'aboutMe'}/></div>
            <div><div className={style.social}><img src={facebookLogo} /><span>Facebook</span></div><Field component='input' name='contacts.facebook'/></div>
            <div><div className={style.social}><img src={instagramLogo} /><span>Instagram</span></div><Field component='input' name='contacts.instagram'/></div>
            <div><div className={style.social}><img src={twetterLogo} /><span>Twetter</span></div><Field component='input' name='contacts.twitter'/></div>
            <div><div className={style.social}><img src={githubLogo} /><span>Github</span></div><Field component='input' name='contacts.github'/></div>
            <div><span>Looking for a job</span><Field type='checkbox' component='input' name='lookingForAJob'/></div>
            <div><span>My skills</span><Field component='input' name='lookingForAJobDescription'/></div>
        </form>
    )
};

export default reduxForm({form :'profile-form'})(EditProfileInfoForm);