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

// axios
import axios from "axios";

// css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function ForgetPassword() {
  const [load, setLoad] = useState(false);
  const [state, setState] = useState({
    load: false,
    forget: true,
    email: "",
    isEmailValid: true,
    passwordsMatch: false,
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinueForm1 = async () => {
    const isEmailValid = validateEmail(state.email);
    setState((prevState) => ({ ...prevState, isEmailValid }));

    if (!isEmailValid) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Enter Valid Email address",
        val: true,
      });

      window.scrollTo(0, 0);
      return;
    } else {
      try {
        const response = await axios.post("/api/website/qna/post", showData, {
          headers: { Authorization: `${authCtx.token}` },
        });

        console.log(state.email);
        // setState((prevState) => ({ ...prevState, forget: false }));
      } catch (error) {
        console.log(error);

        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    }
  };

  const handleContinueForm2 = () => {
    if (!state.passwordsMatch) {
      setError({
        mainColor: "#E5F6FD",
        secondaryColor: "#1AB1F5",
        symbol: "info",
        title: "Information",
        text: "Passwords didn't matched",
        val: true,
      });

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

          <TandC />
        </div>
      </div>

      <Information />

      <Alert variant={variants} val={setError} />
    </div>
  );
}
