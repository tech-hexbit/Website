// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import SvCss from "../../Pages/Css/StoreVerify.module.css";
const Heading = () => {
  return (
    <div className={SvCss.heading}>
      <p className={SvCss.createYourStore}>KYC DATA</p>
      <div className={SvCss.save_buttons}>
        <button className={SvCss.save_button_1}>Save</button>
        <button className={SvCss.save_button_2}>Save & Next</button>
      </div>
    </div>
  );
};
export default Heading;
