import React, { useContext } from "react";

import PropTypes from "prop-types";

import AuthContext from "../../../store/auth-context";

//component
import TextInput from "./TextInput";

const FssaiField = ({ showData, setData }) => {
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
          showData={showData}
          setData={setData}
          field="FssaiLicence"
          placeholder="14-digit FSSAI Licence Number"
        />
      ) : (
        ""
      )}
    </>
  );
};
FssaiField.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
export default FssaiField;
