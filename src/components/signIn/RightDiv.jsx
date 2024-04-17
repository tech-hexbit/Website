import React from "react";

// img
import slider1 from "../../assets/slider/Group3.png";

// css
import style from "./SignInForm.module.css";

export default function RightDiv() {
  return (
    <div className={style.right}>
      <img src={slider1} alt="Img_1" />
      <div className={style.pDiv}>
        <p className={style.head}>Retail Revolution</p>
        <p className={style.subHead}>
          Elevate Your Retail Game: Hexbit - Where Digital Selling Meets
          Success!
        </p>
      </div>
    </div>
  );
}
