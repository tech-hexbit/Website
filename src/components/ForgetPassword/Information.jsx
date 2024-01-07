import React from "react";

//css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function Information() {
  return (
    <>
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
    </>
  );
}
