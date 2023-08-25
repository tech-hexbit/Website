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
        const response = await axios.post("/api/website/auth/login/", input);

        console.log(response);
        // redirect("/user/dashboard");
        // setError("");

        // await authCtx.login(
        //   response.data.user.ShopName,
        //   response.data.user.Email,
        //   response.data.user.image,
        //   response.data.token,
        //   10800000
        // );
      } catch (e) {
        setError("Inavlid Credentials");
      } finally {
        setLoad(false);
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
      {load ? (
        <>
          <LoadingPage />
        </>
      ) : (
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
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={(e) => {
                      setInput({ ...input, password: e.target.value });
                    }}
                  />
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
                <div className="error">{error}</div>
                <button onClick={login}>Log In</button>
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
        </>
      )}
    </>
  );
}
