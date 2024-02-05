import React from "react";
import PropTypes from "prop-types";

// css
import PrCss from "./Css/InputType1.module.css";

export default function InputType1({
  Label,
  type,
  field,
  placeholder,
  showData,
  setData,
}) {
  return <div>InputType1</div>;
}

InputType1.propTypes = {
  Label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  showData: PropTypes.object.isRequired,
};
