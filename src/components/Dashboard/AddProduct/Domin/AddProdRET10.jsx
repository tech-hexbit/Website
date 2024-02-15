import React from "react";

//component
import Form from "./Form";

export default function AddProdRET10() {
  return (
    <>
      <Form domain={domain} />
    </>
  );
}

AddProdRET10.propTypes = {
  domain: PropTypes.string.isRequired,
};
