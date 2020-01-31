import React, {useState} from "react";
import style from './Status.module.css';
import StatusForm from "./StatusForm";

let Status = (props) => {
    const [activatingMode,setActivatingMode] = useState(false);

    let onSubmit = (formData) => {
        console.log(formData);
    };

    let setActivatingModeCallBack = () => {
        setActivatingMode(false);
    };
    return(
        <div className={style.status}>
            {activatingMode ?
                <StatusForm setActivatingModeCallBack={setActivatingModeCallBack} onSubmit={onSubmit}/>
                :
                <span onClick={()=>setActivatingMode(true)}>Це текст статусу</span>
            }
        </div>
    )
};

export default Status;
