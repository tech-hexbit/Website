import React from "react";
import PropTypes from "prop-types";

// css
import HCss from "./Css/Header.module.css";

export default function Header({ name }) {
  return <h1 className={HCss.heading}>{name}</h1>;
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
