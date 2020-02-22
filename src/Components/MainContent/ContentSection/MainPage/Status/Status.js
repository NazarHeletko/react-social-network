import React, {useEffect, useState} from "react";
import style from './Status.module.css';
import StatusForm from "./StatusForm";
import Preloader from "../../../../common/Preloader/Preloader";
import StatusText from "./StatusText";

let Status = (props) => {
    useEffect(() => {
        props.getStatusThunk(props.uId);
    }, [props.uId]);
    const [activatingMode,setActivatingMode] = useState(false);

    let onSubmit = (formData) => {
        if(!formData.status){
            return
        }
        props.setStatusThunk(formData.status);
    };


    let setActivatingModeCallBack = () => {
        setActivatingMode(false);
    };
    return(
        <>
            {props.app && props.uId ?
                props.isStatusLoading ?
                <div className={style.status}>
                    {activatingMode ?
                        <div className={style['status-field']}>
                            <StatusForm initialValues={{status: props.statusValue}}  setActivatingModeCallBack={setActivatingModeCallBack} onSubmit={onSubmit}/>
                        </div>
                        :
                        <div className={style['status-text']}>
                            <span onClick={()=>setActivatingMode(true)}>{props.app ? <StatusText/> : null}</span>
                        </div>
                    }
                </div> :
                <div className={style.preloader}>
                    <Preloader/>
                </div>
                : null
            }
        </>
    )
};

export default Status;
