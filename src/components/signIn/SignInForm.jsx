import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// MicroInteraction
import Load from "../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";
import LoadingPage from "../../MicroInteraction/Loading";

// components
import OTP from "./OTP";

// state
import AuthContext from "../../store/auth-context";

// css
import style from "./SignInForm.module.css";

// img
import slider1 from "../../assets/slider/Group3.png";

export default function SignInForm() {
  const [see, hide] = useState(false);
  const [load, setLoad] = useState(false);
  const [seeOTP, hideOTP] = useState(false);
  const [input, setInput] = useState({ email: "", password: "" });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const login = async () => {
    setLoad(true);

    if (input.email == "" || input.password == "") {
      setLoad(false);

      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    } else {
      try {
        const response = await axios.post("/api/website/auth/login", input);

        if (response.data.success) {
          setLoad(false);

          setInput({
            email: "",
            password: "",
          });

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Logged In",
            val: true,
          });

          if (response.data.user[0].Store[0].StoreID.validation) {
            redirect("/me");
          } else {
            redirect("/me/SetUpStore");
          }

          await authCtx.login(
            response.data.user[0].image,
            response.data.user[0].Email,
            response.data.user[0].Phone,
            response.data.user[0].access,
            response.data.user[0].BusinessName,
            response.data.user[0].ImporterLicense,
            response.data.user[0].GSTIN,
            response.data.user[0].ShopName,
            response.data.user[0].Address,
            response.data.user[0].State,
            response.data.user[0].City,
            response.data.user[0].Pincode,
            response.data.user[0].AdditionalInfo,
            response.data.user[0].accountVerified,
            response.data.user[0].emailVerified,
            response.data.user[0].Store,
            response.data.token,
            10800000
          );
        } else {
          setLoad(false);
        }
      } catch (e) {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Invalid Credentials",
          val: true,
        });
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError({
        mainColor: "",
        secondaryColor: "",
        symbol: "",
        title: "",
        text: "",
        val: false,
      });
    }, 10000);
  }, [variants]);

  useEffect(() => {
    if (seeOTP) {
      setInput({
        email: "",
        password: "",
      });
    }
  }, [seeOTP]);

  return (
    <>
      <div className={style.mainDiv}>
        {/* Login */}
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
            {/* Email */}
            <div className={style.inputEP}>
              <label htmlFor="email">
                Email<span className="requiredSpan">*</span>
              </label>
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
                onClick={() => {
                  hideOTP(false);
                }}
              />
            </div>

            {/* Password */}
            <div className={style.inputEPass}>
              <label htmlFor="password">
                Password<span className="requiredSpan">*</span>
              </label>
              <br />
              <div className={style.passMDiv}>
                <input
                  type={see ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={input.password}
                  className={style.inpPass}
                  onChange={(e) => {
                    setInput({ ...input, password: e.target.value });
                  }}
                  onClick={() => {
                    hideOTP(false);
                  }}
                />

                {/* Show Password  */}
                <>
                  {see ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye"
                      className={style.btnpass}
                      onClick={() => hide(!see)}
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye-off"
                      className={style.btnpass}
                      onClick={() => hide(!see)}
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </svg>
                  )}
                </>
              </div>
            </div>
          </div>

          <div className={style.or}>Or</div>

          <OTP seeOTP={seeOTP} hideOTP={hideOTP} />

          <div className={style.loginDiv}>
            <button onClick={login}>{load ? <Load /> : "Log In"}</button>

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
          <img src={slider1} alt="" />
          <div className={style.pDiv}>
            <p className={style.head}>Retail Revolution</p>
            <p className={style.subHead}>
              Elevate Your Retail Game: Hexbit - Where Digital Selling Meets
              Success!
            </p>
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
