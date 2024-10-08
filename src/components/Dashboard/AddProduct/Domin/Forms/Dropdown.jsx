import PropTypes from "prop-types";
import ItCss from "../Input/Css/InputType1.module.css";

const Dropdown = ({ options, fieldName, name, value, onChange }) => {
  const handleSelectChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className={ItCss.inpDiv}>
      <p className={ItCss.inputLabel}>{fieldName}</p>
      <select
        name={name}
        className={ItCss.inp}
        value={value}
        onChange={handleSelectChange}
      >
        <option value="Selected" selected hidden>
          Select
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  fieldName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
