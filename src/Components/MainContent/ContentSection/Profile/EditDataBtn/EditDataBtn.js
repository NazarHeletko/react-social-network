import React, {useState} from 'react';
import {connect} from 'react-redux';
import style from '../Profile.module.css';
import editIcon from "../../../../../assets/settings-profile.png";
import {changeSubmitAC, showEditAC} from "../../../../../redux/profile-reducer";


let EditDataBtn = (props) => {
    const [editMode, seteditMode] = useState(false);
    return(
        <div onClick={editMode ? () => {
            seteditMode(false);
            props.changeSubmitAC(true);
            props.showEditAC(false);
        } : () => {
            seteditMode(true);
            props.changeSubmitAC(false);
            props.showEditAC(true);
        }} className={style['edit-profile-info']}>
            <img src={editIcon}/>{editMode ? <span>save</span> : <span>edit</span>}
        </div>
    )
};

let mapStateToProps = (state) => {
    return{

    }
};

export default connect(mapStateToProps, {changeSubmitAC, showEditAC})(EditDataBtn);