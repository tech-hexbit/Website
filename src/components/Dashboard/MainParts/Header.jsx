import React from "react";
import PropTypes from "prop-types";

// css
import HCss from "./Css/Header.module.css";

export default function Header({ name }) {
  return <div>{name}</div>;
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
