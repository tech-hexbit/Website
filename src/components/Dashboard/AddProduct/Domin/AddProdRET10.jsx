import React from "react";
import PropTypes from "prop-types";

//component
import Form from "./Form";

export default function AddProdRET10({ domain }) {
  return (
    <>
      <Form domain={domain} />
    </>
  );
}

AddProdRET10.propTypes = {
  domain: PropTypes.string.isRequired,
};
