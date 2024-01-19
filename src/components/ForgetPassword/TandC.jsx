import React from "react";
import { Link } from "react-router-dom";

// css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function TandC() {
  return (
    <div className={fpstyle.tc}>
      By signing up, you are agreeing to our{" "}
      <Link to="/terms" className="LinkStyle" style={{ color: "#350B5E" }}>
        Terms & Conditions
      </Link>{" "}
      and{" "}
      <Link to="/privacy" className="LinkStyle" style={{ color: "#350B5E" }}>
        Privacy Policy
      </Link>
      .
    </div>
  );
}
