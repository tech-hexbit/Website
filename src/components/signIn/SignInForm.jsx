import React from "react";

import style from "./SignInForm.module.css";

import slider from "../../assets/Slider.png";
import { Link } from "react-router-dom";

export default function SignInForm() {
  return (
    <div className={style.mainDiv}>
      <div className={style.left}>
        <div>
          <div>Welcome to Hexbit!</div>
          <div>
            <p>Don’t have an account?</p>
            <Link to="/register" className="LinkStyle">
              <div>Register!!!!!!!!!!!</div>
            </Link>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div className={style.right}>
        <img src={slider} alt="" />
      </div>
    </div>
  );
}
