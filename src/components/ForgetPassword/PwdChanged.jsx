import React from "react";
import style from "./CSS/PwdChanged.module.css";
import succIcon from "../../assets/SuccessIcon.png";

export default function PwdChanged() {
  return (
    <div>
      <h1 className={style.pwd}>Password Changed</h1>
      <div className={style.container}>
        <img className={style.icon} src={succIcon} />
      </div>
      <p className={style.text}>Password Changed Successfully</p>
      <p className={style.head}>Login now</p>
    </div>
  );
}
