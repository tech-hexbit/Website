import React from "react";
import PropTypes from "prop-types";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/Load";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../store/auth-context";

export default function FixValues({ setData, showData }) {
  const authCtx = useContext(AuthContext);

  return <div>FixValues</div>;
}

FixValues.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
