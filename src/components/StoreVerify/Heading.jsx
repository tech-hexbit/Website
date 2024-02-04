import React from "react";

// css
import HCss from "./Css/Heading.module.css";

export default function Heading({ load, onSubmit }) {
  return (
    <div className={HCss.heading}>
      <p className={HCss.createYourStore}>KYC DATA</p>
      <div className={HCss.saveButtons}>
        <button className={HCss.saveButtonPurple}>Save</button>
        <button className={HCss.saveButtonGreen}>Save & Next</button>
      </div>
    </div>
  );
}
