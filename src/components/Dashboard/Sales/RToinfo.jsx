import React from "react";
import PropTypes from "prop-types";

export default function RToinfo({ setReturn, rtoReturn }) {
  return (
    <div
      onClick={() => {
        setReturn(false);
      }}
    >
      RToinfo
    </div>
  );
}

RToinfo.propTypes = {
  setReturn: PropTypes.func.isRequired,
  rtoReturn: PropTypes.bool.isRequired,
};
