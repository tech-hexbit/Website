import React from "react";
import { Link } from "react-router-dom";

//css
import pwstyle from "./CSS/PwdChanged.module.css";

//assets
import succIcon from "../../assets/SuccessIcon.png";

export default function PwdChanged() {
  return (
    <div>
      <h1 className={pwstyle.pwd}>Password Changed</h1>
      <div className={pwstyle.container}>
        <img className={pwstyle.icon} src={succIcon} />
      </div>
      <p className={pwstyle.text}>Password Changed Successfully</p>
      <p className={pwstyle.head}>
        <Link className={pwstyle.linkStyle} to="/signin">
          Login now
        </Link>
      </p>
    </div>
  );
}
