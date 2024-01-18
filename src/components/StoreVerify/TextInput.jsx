// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import PropTypes from "prop-types";
import SvCss from "../../Pages/Css/StoreVerify.module.css";

const TextInput = (props) => {
  return (
    <div className={SvCss.inpDiv}>
      <p className={SvCss.input_label}>{props.Label}</p>
      <input
        type={props.type}
        name="days"
        value={props.showData[props.field]}
        id=""
        placeholder={props.placeholder}
        onChange={(e) => {
          props.setData({ ...props.showData, [props.field]: e.target.value });
        }}
      />
    </div>
  );
};
TextInput.propTypes = {
  Label: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string,
  placeholder: PropTypes.string,
  showData: PropTypes.object,
};
export default TextInput;
