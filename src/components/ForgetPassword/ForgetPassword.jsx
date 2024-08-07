import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// components
import Form1 from "./Form1";
import Form2 from "./Form2";
import TandC from "./TandC";
import PwdChanged from "./PwdChanged";
import Information from "./Information";

// MicroInteraction
import Load from "../../MicroInteraction/Load";

// axios
import axios from "axios";

// css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function ForgetPassword() {
  const [load, setLoad] = useState(false);
  const [state, setState] = useState({
    forget: true,
    email: "",
    password: "",
    isEmailValid: true,
    passwordsMatch: false,
    reset: false,
  });

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // form 1
  const handleContinueForm1 = async () => {
    setLoad(true);

    const isEmailValid = validateEmail(state.email);
    setState((prevState) => ({ ...prevState, isEmailValid }));

    if (!isEmailValid) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Enter Valid Email address",
      });

      return;
    } else {
      let data = {
        Email: state.email,
      };
      try {
        const response = await axios.post(
          "/api/website/password/reset/look/email",
          data
        );

        if (response.data.success) {
          setLoad(false);

          setState((prevState) => ({ ...prevState, forget: false }));
        } else {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#E5F6FD",
            secondaryColor: "#1AB1F5",
            symbol: "info",
            title: "Information",
            text: "Email ID does not exist",
          });
        }
      } catch (error) {
        console.log(error);

        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
        });
      }
    }
  };

  // form 2
  const handleContinueForm2 = async () => {
    setLoad(true);

    if (!state.passwordsMatch) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#E5F6FD",
        secondaryColor: "#1AB1F5",
        symbol: "info",
        title: "Information",
        text: "Passwords didn't matched",
      });

      return;
    } else {
      try {
        let data = {
          email: state.email,
          password: state.password,
        };

        const response = await axios.post("/api/website/password/reset", data);

        if (response.data.success) {
          setLoad(false);

          setState({
            ...state,
            reset: true,
          });
          // navigate("/changepwd");
        } else {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#E5F6FD",
            secondaryColor: "#1AB1F5",
            symbol: "info",
            title: "Information",
            text: "Email ID does not exist",
          });
        }
      } catch (error) {
        console.log(error);

        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
        });
      }
    }
  };

  const handleValidateEmail = (enteredEmail) => {
    setState((prevState) => ({ ...prevState, email: enteredEmail }));
  };

  const handlePasswordMatch = (match, val) => {
    setState({ ...state, passwordsMatch: match, password: val });
  };

  return (
    <div className={fpstyle.mainDiv}>
      <div className={fpstyle.left}>
        <h1 className={fpstyle.forgot}>Forgot Password?</h1>
        <p className={fpstyle.dont}>Don't worry. We can help.</p>

        {state.reset ? (
          <PwdChanged />
        ) : (
          <>
            {state.forget ? (
              <Form1
                validateEmail={validateEmail}
                onContinue={handleContinueForm1}
                onValidateEmail={handleValidateEmail}
              />
            ) : (
              <Form2 onPasswordMatch={handlePasswordMatch} />
            )}
          </>
        )}

        {!state.reset && (
          <>
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
                onClick={
                  state.forget ? handleContinueForm1 : handleContinueForm2
                }
              >
                {load ? <Load /> : "Continue"}
              </button>

              <TandC />
            </div>
          </>
        )}
      </div>

      <Information />
    </div>
  );
}
