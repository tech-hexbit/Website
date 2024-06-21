import PropTypes from "prop-types";

//component
import Form from "./Forms/FormRET12";

export default function AddProdRET12({ domain }) {
  return (
    <>
      <Form domain={domain} />
    </>
  );
}

AddProdRET12.propTypes = {
  domain: PropTypes.string.isRequired,
};
