import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import Form1 from "./Form1";
import Form2 from "./Form2";
import Information from "./Information";

//MicroInteraction
import Load from "../../MicroInteraction/Load";

//css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function ForgetPassword() {
  const [load, setLoad] = useState(false);
  const [forget, setForget] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [, forget]);

  return (
    <>
      <div className={fpstyle.mainDiv}>
        <div className={fpstyle.left}>
          <h1 className={fpstyle.forgot}>Forgot Password?</h1>
          <p className={fpstyle.dont}>Don't worry. We can help.</p>

          {forget ? <Form1 /> : <Form2 />}

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

        <Information />
      </div>
    </>
  );
}
