import React, { useContext } from "react";
import PropTypes from "prop-types";

// store
import AuthContext from "./../../store/auth-context";

// css
import SvCss from "../../Pages/Css/StoreVerify.module.css";

export const FssaiField = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {" "}
      {authCtx.user.category.find(
        (val) => val.name === "Food & Beverage" || val.name === "Grocery"
      ) ? (
        <TextInput
          type="number"
          Label="FSSAI Licence NO"
          showData={props.showData}
          setData={props.setData}
          field="FssaiLicence"
          placeholder="14-digit FSSAI Licence Number"
        />
      ) : (
        ""
      )}
    </>
  );
};

export const GrpTextInput = (props) => {
  return (
    <>
      <TextInput
        type="text"
        Label="First Name"
        showData={props.showData}
        setData={props.setData}
        field="FirstName"
        placeholder="John"
      />{" "}
      <TextInput
        type="text"
        Label="Last Name"
        showData={props.showData}
        setData={props.setData}
        field="LastName"
        placeholder="David"
      />{" "}
      <TextInput
        type="text"
        Label="Legal Name"
        showData={props.showData}
        setData={props.setData}
        field="LegalName"
        placeholder="John David"
      />
      <TextInput
        type="email"
        Label="Email ID"
        showData={props.showData}
        setData={props.setData}
        field="EmailID"
        placeholder="Enter your email"
      />{" "}
      <TextInput
        type="date"
        Label="DOB"
        showData={props.showData}
        setData={props.setData}
        field="DOB"
      />
    </>
  );
};

const TextInput = (props) => {
  return (
    <div className={SvCss.inpDiv}>
      <p className={SvCss.inputLabel}>{props.Label}</p>
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
  props: PropTypes.shape({
    Label: PropTypes.string,
    type: PropTypes.string,
    field: PropTypes.string,
    placeholder: PropTypes.string,
    showData: PropTypes.object,
  }),
};

export default TextInput;
