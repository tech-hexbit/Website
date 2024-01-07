import React from "react";
import style from "./CSS/PwdChanged.module.css";
import succIcon from "../../assets/SuccessIcon.png"
import { Link } from "react-router-dom";

export default function PwdChanged(){
    return(
        <div>
            <h1 className={style.pwd}>Password Changed</h1>
            <div className={style.container}>
                <img className={style.icon} src={succIcon}/>
            </div>
            <p className={style.text}>Password Changed Successfully</p>
            <p className={style.head}><Link className={style.linkStyle} to="/signin">Login now</Link></p>
        </div>
    )
}