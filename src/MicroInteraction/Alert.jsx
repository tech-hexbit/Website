import React from "react";
import PropTypes from "prop-types";

// css
import "./Css/Alert.css";

export const Alert = ({ variant, val, email }) => {
  return (
    <div className="alert-mDiv" id={variant.val ? "show" : "hide"}>
      <div
        className="alert-container"
        style={{
          background: variant.mainColor,
          border: "0.1rem solid " + variant.secondaryColor,
        }}
      >
        <div
          className="symbol-container"
          style={{ background: variant.secondaryColor }}
        >
          <div>
            <span class="material-symbols-outlined symbol colorIcon">
              {variant.symbol}
            </span>
          </div>
        </div>
        <div className="description-container">
          <span className="description-title">{variant.title}:</span>
          <span className="description-text"> {variant.text}</span>
        </div>
        <a className="symbol-close-link" onClick={() => val({ val: false })}>
          <span class="material-symbols-outlined  colorIcon">close</span>
        </a>
      </div>
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.object.isRequired,
  val: PropTypes.func.isRequired,
};
