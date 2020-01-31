import React, {useState} from "react";
import style from './Status.module.css';

let Status = (props) => {
    const [activatingMode,setActivatingMode] = useState(false);
    return(
        <div className={style.status}>
            {activatingMode ?
                <input autoFocus onBlur={()=>setActivatingMode(false)} type="text" /> :
                <span onClick={()=>setActivatingMode(true)}>Це текст статусу</span>
            }
        </div>
    )
};

export default Status;
