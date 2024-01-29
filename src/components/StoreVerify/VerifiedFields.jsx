import React from "react";

//proptypes
import PropTypes from "prop-types";

// css
import SvCss from "../../../Pages/Css/StoreVerify.module.css";

function VerifiedFields(props) {
  return (
    <div className={SvCss.inpDiv}>
      <p className={SvCss.inputLabel}>{props.label}</p>
      <div className={SvCss.inputDivVerified}>
        <input
          disabled={props.disable.Pincode}
          type={props.type}
          name={props.name}
          value={props.showData[props.name]}
          id=""
          placeholder={props.placeholder}
          onChange={(e) => {
            props.setData({ ...props.showData, [props.name]: e.target.value });
          }}
        />

        {props.verifyPin ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-badge-check"
            className={SvCss.badgeIcon}
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
const GrpVerifiedFields = (props) => {
  return (
    <>
      <VerifiedFields
        label="City"
        disable={props.disable}
        type="text"
        name="City"
        showData={props.showData}
        setData={props.setData}
        placeholder="Your City"
        verifyPin={props.verifyPin}
      />
      <VerifiedFields
        label="State"
        disable={props.disable}
        type="text"
        name="State"
        showData={props.showData}
        setData={props.setData}
        placeholder="Your State"
        verifyPin={props.verifyPin}
      />
    </>
  );
};
VerifiedFields.propTypes = {
  props: PropTypes.shape({
    label: PropTypes.string,
    disable: PropTypes.object,
    type: PropTypes.string,
    name: PropTypes.string,
    showData: PropTypes.object,
    placeholder: PropTypes.string,
    verifyPin: PropTypes.bool,
  }),
};
export default GrpVerifiedFields;
