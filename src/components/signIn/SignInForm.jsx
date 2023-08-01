import React from "react";

import style from "./SignInForm.module.css";

// import slider from "../../assets/Slider.png";
import slider1 from "../../assets/slider/Group3.png";
import { Link } from "react-router-dom";
import Slider from "./slider/Slider";

export default function SignInForm() {
  return (
    <div className={style.mainDiv}>
      <div className={style.left}>
        <div>
          <div className={style.welcomeText}>Welcome to Hexbit!</div>
          <div className={style.text}>
            <p className={style.account}>Don’t have an account?</p>
            <Link to="/register" className="LinkStyle">
              <div className={style.register}>Register</div>
            </Link>
          </div>
        </div>
        <div className={style.emailPassword}>
          <div className={style.inputEP}>
            <label htmlFor="email">
              Email<span style={{ color: "#350B5E" }}>*</span>
            </label>
            <br />
            <input type="email" placeholder="Email address" id="email" />
          </div>
          <div className={style.inputEP}>
            <label htmlFor="password">
              Password<span style={{ color: "#350B5E" }}>*</span>
            </label>
            <br />
            <input type="password" placeholder="Password" id="password" />
          </div>
        </div>
        <div className={style.or}>Or</div>
        <div className={style.phoneOTP}>
          <div className={style.inputPO}>
            <label htmlFor="phone">
              Phone<span style={{ color: "#350B5E" }}>*</span>
            </label>
            <br />
            <div className={style.phoneInputs}>
              <input
                type="text"
                placeholder="+91"
                disabled
                id={style.countryCode}
              />
              <input
                type="number"
                placeholder="XXXXX-XXXXX"
                id="phone"
                className={style.phone}
              />
            </div>
          </div>
          <div className={style.inputPO}>
            <label htmlFor="otp">
              Enter OTP<span style={{ color: "#350B5E" }}>*</span>
            </label>
            <br />
            <div className={style.otpInputs}>
              <input type="text" placeholder="Enter the otp" id="otp" />
              <button>Resend OTP</button>
            </div>
          </div>
        </div>
        <div className={style.loginDiv}>
          <button>Log In</button>
          <div className={style.tc}>
            By signing up, you are agreeing to our{" "}
            <Link
              to="/terms"
              className="LinkStyle"
              style={{ color: "#350B5E" }}
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="LinkStyle"
              style={{ color: "#350B5E" }}
            >
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
      <div className={style.right}>
        {/* <Slider
          img1={slider1}
          img2={slider1}
          img3={slider1}
          head={["Retail Revolution", "Retail Revolution", "Retail Revolution"]}
          subHead={[
            `"Elevate Your Retail Game: Hexbit - Where Digital Selling Meets Success!"`,
            `"Elevate Your Retail Game: Hexbit - Where Digital Selling Meets Success!"`,
            `"Elevate Your Retail Game: Hexbit - Where Digital Selling Meets Success!"`,
          ]}
        /> */}
        <img src={slider1} alt="" />
        <div>
          <p className={style.head}>Retail Revolution</p>
          <p className={style.subHead}>
            Elevate Your Retail Game: Hexbit - Where Digital Selling Meets
            Success!
          </p>
        </div>
      </div>
    </div>
  );
}
