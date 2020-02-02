import React, {useEffect, useState} from "react";
import style from './Status.module.css';
import StatusForm from "./StatusForm";
import Preloader from "../../../../common/Preloader/Preloader";

let Status = (props) => {
    const [activatingMode,setActivatingMode] = useState(false);

    let onSubmit = (formData) => {
        if(!formData.status){
            return
        }
        props.setStatusThunk(formData.status);
    };

    useEffect(()=>{
        props.getStatusThunk(props.uId);
    }, [props.statusText]);

    let setActivatingModeCallBack = () => {
        setActivatingMode(false);
    };
    return(
        <>
            {props.isStatusLoading ?
                <div className={style.status}>
                    {activatingMode ?
                        <div className={style['status-field']}>
                            <StatusForm setActivatingModeCallBack={setActivatingModeCallBack} onSubmit={onSubmit}/>
                        </div>
                        :
                        <div className={style['status-text']}>
                            <span onClick={()=>setActivatingMode(true)}>{props.statusText}</span>
                        </div>
                    }
                </div> :
                <div className={style.preloader}>
                    <Preloader/>
                </div>
            }
        </>
    )
};

export default Status;
