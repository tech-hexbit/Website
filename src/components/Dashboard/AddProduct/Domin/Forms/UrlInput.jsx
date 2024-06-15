import React from 'react';
import PropTypes from 'prop-types';
import ItCss from "../Input/Css/InputType1.module.css";

const UrlInput = ({
  label,
  value,
  placeholder,
  field,
  showData,
  setData
}) => {
  return (
    
  );
}

UrlInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string.isRequired,
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default UrlInput;
