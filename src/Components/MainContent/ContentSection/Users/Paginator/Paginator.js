import React, {useEffect, useState} from 'react';
import style from './Paginator.module.css';

let Paginator = ({portionSize = 10, totalUsers, usersOnPage, activePage,...props}) => {
    if(document.body.clientWidth < 500){
        portionSize = 4
    }
    let numberOfBtns = Math.ceil(totalUsers/usersOnPage);
    let btnsArr = [];
    for(let i = 1; i <= numberOfBtns; i++){
        btnsArr.push(i);
    }
    let portionCount = Math.ceil(numberOfBtns/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(1);
        props.setTotalUsersThunk();
    },[totalUsers]);

    let getUsersOnPageChange = (page) => {
        props.getUsersThunk(page);
    };

    return(
        <div className={style.paginator}>
            { portionNumber > 1 &&
            <button className={style['portion-nav']} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            <div className={style['page-btns']}>
                {
                    btnsArr.filter(el =>  el >= leftPortionPageNumber && el<=rightPortionPageNumber).map(item =>{
                        return (
                            <button onClick={()=>{
                                props.setActivePageAC(item);
                                getUsersOnPageChange(item);
                            }} className={activePage === item ? style.active : null}>{item}</button>
                        )
                    })
                }
            </div>
            { portionCount > portionNumber &&
            <button className={style['portion-nav']} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
    )
};

export default Paginator;