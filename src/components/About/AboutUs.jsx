import React from "react";

// Css
import AbCss from "./Css/AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={AbCss.mDiv}>
      <p className={AbCss.Mission}>About Us</p>
      <p className={AbCss.SolutionEnabling}>
        Hexbit.io is a full-stack solution enabling
        <br />
        sellers across the globe to sell online
        <br />
        across platforms and networks
      </p>
    </div>
  );
}
