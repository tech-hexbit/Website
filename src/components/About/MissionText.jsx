import React from "react";

// Css
import MTCss from "./Css/MissionText.module.css";

export default function MissionText() {
  return (
    <div className={MTCss.mDiv}>
      <p className={MTCss.Mission}>Mission</p>
      <p className={MTCss.EmpoweringMSMEs}>
        Empowering MSMEs for digital success
        <br />
        in India's changing marketplace
      </p>
    </div>
  );
}
