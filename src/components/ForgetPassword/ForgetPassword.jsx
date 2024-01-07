import React, { useEffect, useState } from "react";
import style from "./CSS/ForgetPassword.module.css";
import { Link } from "react-router-dom";
import Load from "../../MicroInteraction/Load";

export default function ForgetPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [input, setInput] = useState({ email: "", phone: "", otp: "" });
  const [load, setLoad] = useState(false);

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.left}>
          <h1 className={style.forgot}>Forgot Password?</h1>
          <p className={style.dont}>Don't worry. We can help.</p>
          {/* Email */}
          <div className={style.inputEP}>
            <label>Email address *</label>
            <br />
            <input
              type="email"
              placeholder="Email address"
              id="email"
              name="email"
              value={input.email}
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
            />
          </div>

          <h3 className={style.or}>Or</h3>
          {/* Phone */}
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
          {/* OTP */}
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

          <div className={style.loginDiv}>
            <div style={{ paddingBottom: "20px" }}>
              <p className={style.forget}>
                <Link
                  to="/forgotpasswordsec"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Remembered your password?
                </Link>
              </p>
              <Link className={style.login}>Back to login</Link>
            </div>
            <button>{load ? <Load /> : "Continue"}</button>

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
          <h1 className={style.headline}>
            Sell Smarter <br /> Sell Faster <br /> At HEXBIT
          </h1>
          <div className={style.impCont}>
            <h3 className={style.imp}>Important information:</h3>
            <p className={style.line}>
              Please read the information below and then kindly share the
              requested information.{" "}
            </p>
            <ul>
              <li>Use AlphaNumeric passwords.</li>
              <li>Your Login ID. and security answer are required</li>
              <li>Login IDs are case sensitive.</li>
              <li>Do not reveal your password to anybody</li>
              <li>Do not reuse passwords</li>
            </ul>
          </div>
          <h2 className={style.terms}>
            Terms and conditions | FAQs | Contact us
          </h2>
        </div>
      </div>
    </>
  );
}
