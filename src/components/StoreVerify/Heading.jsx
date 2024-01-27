// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import SvCss from "../../Pages/Css/StoreVerify.module.css";
const Heading = () => {
  return (
    <div className={SvCss.heading}>
      <p className={SvCss.createYourStore}>KYC DATA</p>
      <div className={SvCss.saveButtons}>
        <button className={SvCss.saveButtonPurple}>Save</button>
        <button className={SvCss.saveButtonGreen}>Save & Next</button>
      </div>
    </div>
  );
};
export default Heading;
