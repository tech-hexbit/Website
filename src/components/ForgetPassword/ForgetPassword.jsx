import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//MicroInteraction
import Load from "../../MicroInteraction/Load";

//css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function ForgetPassword() {
  const [load, setLoad] = useState(false);
  const [forget, setForget] = useState(true);
  const [input, setInput] = useState({ email: "", phone: "", otp: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [, forget]);

  return (
    <>
      <div className={fpstyle.mainDiv}>
        <div className={fpstyle.left}>
          <h1 className={fpstyle.forgot}>Forgot Password?</h1>
          <p className={fpstyle.dont}>Don't worry. We can help.</p>
          {/* Email */}
          {forget ? (
            <>
              <div className={fpstyle.inputEP}>
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

              <h3 className={fpstyle.or}>Or</h3>

              {/* Phone */}
              <div className={fpstyle.inputPO}>
                <label htmlFor="phone">
                  Phone<span style={{ color: "#350B5E" }}>*</span>
                </label>
                <br />
                <div className={fpstyle.phoneInputs}>
                  <input
                    type="text"
                    placeholder="+91"
                    disabled
                    id={fpstyle.countryCode}
                  />
                  <input
                    type="number"
                    placeholder="XXXXX-XXXXX"
                    id="phone"
                    className={fpstyle.phone}
                  />
                </div>
              </div>

              {/* OTP */}
              <div className={fpstyle.inputPO}>
                <label htmlFor="otp">
                  Enter OTP<span style={{ color: "#350B5E" }}>*</span>
                </label>
                <br />
                <div className={fpstyle.otpInputs}>
                  <input type="text" placeholder="Enter the otp" id="otp" />
                  <button>Resend OTP</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={fpstyle.inputEP}>
                <label>Create New Password *</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  value={input.newpwd}
                  onChange={(e) => {
                    setInput({ ...input, newpwd: e.target.value });
                  }}
                />
              </div>

              {/* Phone */}
              <div className={fpstyle.inputPO}>
                <label htmlFor="password">
                  Confirm New Password
                  <span style={{ color: "#350B5E" }}>*</span>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  value={input.confirmpwd}
                  onChange={(e) => {
                    setInput({ ...input, confirmpwd: e.target.value });
                  }}
                />
              </div>
            </>
          )}

          <div className={fpstyle.loginDiv}>
            {forget && (
              <div className={fpstyle.forCont}>
                <p className={fpstyle.forget} onClick={() => setForget(false)}>
                  Remembered your password?
                </p>
                <Link className={fpstyle.login} to="/signIn">
                  Back to login
                </Link>
              </div>
            )}
            {forget ? (
              <button onClick={() => setForget(false)}>
                {load ? <Load /> : "Continue"}
              </button>
            ) : (
              <button>
                <Link to="/changepwd" className={fpstyle.linkStyles}>
                  {load ? <Load /> : "Continue"}
                </Link>
              </button>
            )}

            <div className={fpstyle.tc}>
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
        <div className={fpstyle.right}>
          <h1 className={fpstyle.headline}>
            Sell Smarter <br /> Sell Faster <br /> At HEXBIT
          </h1>
          <div className={fpstyle.impCont}>
            <h3 className={fpstyle.imp}>Important information:</h3>
            <p className={fpstyle.line}>
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
          <h2 className={fpstyle.terms}>
            Terms and conditions | FAQs | Contact us
          </h2>
        </div>
      </div>
    </>
  );
}
