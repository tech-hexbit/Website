import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// MicroInteraction
import LoadingPage from "../../MicroInteraction/Loading";
import { Alert } from "./../../MicroInteraction/Alert";
import Load from "../../MicroInteraction/Load";

// state
import AuthContext from "../../store/auth-context";

// css
import style from "./SignInForm.module.css";

// img
import slider1 from "../../assets/slider/Group3.png";

export default function SignInForm() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [see, hide] = useState(false);
  const [load, setLoad] = useState(false);
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

          redirect("/me");

          console.log(response.data);

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
            response.data.user[0].Store,
            response.data.user[0].Store[0].StoreID,
            response.data.token,
            10800000
          );
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

  return (
    <>
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
            <div className={style.inputEP}>
              <label htmlFor="password">
                Password<span style={{ color: "#350B5E" }}>*</span>
              </label>
              <br />
              <input
                type={see ? "text" : "password"}
                placeholder="Password"
                id="password"
                name="password"
                value={input.password}
                onChange={(e) => {
                  setInput({ ...input, password: e.target.value });
                }}
              />
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
                  onClick={() => hide(!see)}
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              )}
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

      <Alert variant={variants} val={setError} />
    </>
  );
}
