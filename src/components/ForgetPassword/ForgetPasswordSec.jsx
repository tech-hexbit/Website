import React, { useEffect, useState } from "react";
import style from "./CSS/ForgetPassword.module.css"
import { Link } from "react-router-dom";
import Load from "../../MicroInteraction/Load";

export default function ForgetPasswordSec(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [input, setInput] = useState({ newpwd: "", confirmpwd: ""});
    const [load, setLoad] = useState(false);

    return(
        <>
            <div className={style.mainDiv}>
                <div className={style.left}>
                    <h1 className={style.forgot}>Forgot Password?</h1>
                    <p className={style.dont}>Don't worry. We can help.</p>
                    {/* Email */}
                    <div className={style.inputEP}>
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
                    <div className={style.inputPO}>
                        <label htmlFor="password">
                            Confirm New Password<span style={{ color: "#350B5E" }}>*</span>
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

                    <div className={style.loginDiv}>
                            <button><Link to="/changepwd" style={{textDecoration:'none',color:"white"}}>{load ? <Load /> :"Continue"}</Link></button>

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
                    <h1 className={style.headline}>Sell Smarter <br/> Sell Faster <br/> At HEXBIT</h1>
                    <div className={style.impCont}>
                       <h3 className={style.imp}>Important information:</h3>
                       <p className={style.line}>Please read the information below and then kindly share the requested information. </p>
                       <ul>
                            <li>Use AlphaNumeric passwords.</li>
                            <li>Your Login ID. and security answer are required</li>
                            <li>Login IDs are case sensitive.</li>
                            <li>Do not reveal your password to anybody</li>
                            <li>Do not reuse passwords</li>
                       </ul>
                    </div>
                    <h2 className={style.termss}>Terms and conditions | FAQs | Contact us</h2>
                </div>
            </div>
        </>
    )
}

