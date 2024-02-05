import React from "react";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";

// css
import HCss from "./Css/Heading.module.css";

export default function Heading({ load, onSubmit }) {
  return (
    <div className={HCss.heading}>
      <p className={HCss.createYourStore}>KYC DATA</p>
      <div className={HCss.saveButtons}>
        <button className={HCss.saveButtonPurple} onClick={onSubmit}>
          {load ? <Load /> : "Save"}
        </button>
      </div>
    </div>
  );
}
