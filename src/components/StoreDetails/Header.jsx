import React from "react";
import PropTypes from "prop-types";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";

// css
import HCss from "./Css/Header.module.css";

export default function Header({ load, onSubmit }) {
  return (
    <div>
      <div className={HCss.heading}>
        <p className={HCss.createYourStore}>KYC DATA</p>
        <div className={HCss.saveButtons}>
          <button className={HCss.saveButtonPurple} onClick={onSubmit}>
            {load ? <Load /> : "Save"}
          </button>
        </div>
      </div>

      <div className={HCss.subHeadline}>
        Please allow us 2-3 business days to review your KYC and approve your
        account.
      </div>
    </div>
  );
}

Header.propTypes = {
  load: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
