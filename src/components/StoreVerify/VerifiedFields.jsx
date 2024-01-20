// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import SvCss from "../../Pages/Css/StoreVerify.module.css";
import PropTypes from "prop-types";
import { BadgeCheck } from "lucide-react";

const VerifiedFields = (props) => {
  return (
    <div className={SvCss.inpDiv}>
      <p className={SvCss.input_label}>{props.label}</p>
      <div className={SvCss.input_div_verified}>
        <input
          disabled={props.disable}
          type={props.type}
          name={props.name}
          value={props.showData[props.name]}
          id=""
          placeholder={props.placeholder}
          onChange={(e) => {
            props.setData({ ...props.showData, [props.name]: e.target.value });
          }}
        />
        {props.verifyPin ? <BadgeCheck className={SvCss.badge_icon} /> : ""}
      </div>
    </div>
  );
};
VerifiedFields.propTypes = {
  label: PropTypes.string,
  disable: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  showData: PropTypes.object,
  placeholder: PropTypes.string,
  verifyPin: PropTypes.bool,
};
export default VerifiedFields;
