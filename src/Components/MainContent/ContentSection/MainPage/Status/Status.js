import React, {useState} from "react";
import style from './Status.module.css';
import StatusForm from "./StatusForm";
import Preloader from "../../../../common/Preloader/Preloader";

let Status = (props) => {
    const [activatingMode,setActivatingMode] = useState(false);

    let onSubmit = (formData) => {
        console.log(formData);
    };

    let setActivatingModeCallBack = () => {
        setActivatingMode(false);
    };
    return(
        <>
            {!props.isStatusLoading ?
                <div className={style.status}>
                    {!activatingMode ?
                        <div className={style['status-field']}>
                            <StatusForm setActivatingModeCallBack={setActivatingModeCallBack} onSubmit={onSubmit}/>
                        </div>
                        :
                        <div className={style['status-text']}>
                            <span onClick={()=>setActivatingMode(true)}>Це текст статусу, ще не вмерла україни ні слава ні воля, ще у на будуть зарплати по 2000 доларів</span>
                        </div>
                    }
                </div> :
                <Preloader/>
            }
        </>
    )
};

export default Status;
