import React from "react";
import PropTypes from "prop-types";

//component
import Form from "./Forms/FormRET13";

export default function AddProdRET13({ domain }) {
  return (
    <>
      <Form domain={domain} />
    </>
  );
}

AddProdRET13.propTypes = {
  domain: PropTypes.string.isRequired,
};
