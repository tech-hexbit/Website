import React from "react";
import PropTypes from "prop-types";

//component
import FormRET12 from "./Forms/RET12";

export default function AddProdRET12({ domain }) {
  return (
    <>
      <FormRET12 domain={domain} />
    </>
  );
}

AddProdRET12.propTypes = {
  domain: PropTypes.string.isRequired,
};
