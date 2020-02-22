import React, {useEffect} from "react";
import style from './Profile.module.css';
import noPhotoUser from '../../../../assets/anonymity.png';
import Preloader from "../../../common/Preloader/Preloader";
import uploadPhoto from '../../../../assets/upload-photo.png';
import EditDataBtn from "./EditDataBtn/EditDataBtn";
import ProfileMainContent from "./ProfileMainContent";

let Profile = (props) => {

    useEffect(() => {
        props.getProfileDataThunk(props.match.params.uId);

    }, [props.match.params.uId]);




    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.setPhotoThunk(e.target.files[0]);
        }
    };

    return (
        <>
        {props.isProfileLoad ?
        <div
            className={style['profile-wrapper']}>
                <div className={style.profile}>
                    {props.match.params.uId === String(props.uId) ? <EditDataBtn/> : null}
                    {props.isPhotoUpdated ?
                        <img
                            src={props.profilePhoto ? props.profilePhoto : noPhotoUser}
                            alt='user photo'/>
                        : <div className={style['photo-update-preloader']}><Preloader/></div>
                    }

                    {props.uId === parseInt(props.match.params.uId) ?
                        <>
                            <input onChange={onMainPhotoSelected} className={style['change-photo']} id='file'
                                   accept='image/*' type='file'/>
                            < label htmlFor='file'>
                                <img src={uploadPhoto}/>add a photo
                            </label>
                        </> : null
                    }
                    <ProfileMainContent/>
                        </div>
                </div> : <Preloader/> } </>
                )
            };

            export default Profile;