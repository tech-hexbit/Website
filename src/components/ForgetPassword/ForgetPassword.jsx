import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// components
import Form1 from "./Form1";
import Form2 from "./Form2";
import TandC from "./TandC";
import Information from "./Information";

// MicroInteraction
import Load from "../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function ForgetPassword() {
  const [state, setState] = useState({
    load: false,
    forget: true,
    email: "",
    isEmailValid: true,
    passwordsMatch: false,
    variants: {
      mainColor: "",
      secondaryColor: "",
      symbol: "",
      title: "",
      text: "",
      val: false,
    },
  });

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinueForm1 = () => {
    const isEmailValid = validateEmail(state.email);
    setState((prevState) => ({ ...prevState, isEmailValid }));

    if (!isEmailValid) {
      setState((prevState) => ({
        ...prevState,
        variants: {
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Please enter valid email address",
          val: true,
        },
      }));

      window.scrollTo(0, 0);
      return;
    }

    setState((prevState) => ({ ...prevState, forget: false }));
  };

  const handleContinueForm2 = () => {
    if (!state.passwordsMatch) {
      setState((prevState) => ({
        ...prevState,
        variants: {
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Passwords didn't matched",
          val: true,
        },
      }));

      window.scrollTo(0, 0);
      return;
    }

    navigate("/changepwd");
  };

  const handleValidateEmail = (enteredEmail) => {
    setState((prevState) => ({ ...prevState, email: enteredEmail }));
  };

  const handlePasswordMatch = (match) => {
    setState((prevState) => ({ ...prevState, passwordsMatch: match }));
  };

  return (
    <div className={fpstyle.mainDiv}>
      <div className={fpstyle.left}>
        <h1 className={fpstyle.forgot}>Forgot Password?</h1>
        <p className={fpstyle.dont}>Don't worry. We can help.</p>

        {state.forget ? (
          <Form1
            validateEmail={validateEmail}
            onContinue={handleContinueForm1}
            onValidateEmail={handleValidateEmail}
          />
        ) : (
          <Form2 onPasswordMatch={handlePasswordMatch} />
        )}

        <div className={fpstyle.loginDiv}>
          {state.forget && (
            <div className={fpstyle.forCont}>
              <p
                className={fpstyle.forget}
                onClick={() =>
                  setState((prevState) => ({ ...prevState, forget: true }))
                }
              >
                Remembered your password?
              </p>
              <Link className={fpstyle.login} to="/signIn">
                Back to login
              </Link>
            </div>
          )}
          <button
            onClick={state.forget ? handleContinueForm1 : handleContinueForm2}
          >
            {state.load ? <Load /> : "Continue"}
          </button>

          {/* T&C */}
          <TandC />
        </div>
      </div>

      <Information />

      <Alert
        variant={state.variants}
        val={(variants) =>
          setState((prevState) => ({ ...prevState, variants }))
        }
      />
    </div>
  );
}
