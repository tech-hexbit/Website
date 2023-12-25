import React from "react";

// css
import hdc from "./Css/HelpDeskContent.module.css";

export default function HelpDeskContent() {
  return (
    <div className={hdc.main}>
      <p className={hdc.para}>
        In case of any questions drop as an email with subject as the TICKET ID
      </p>
      <p className={hdc.para}>
        (#Hx00000), and our support team will revert on the same
      </p>
      <p className={hdc.para}>within 48 hrs. </p>
    </div>
  );
}
