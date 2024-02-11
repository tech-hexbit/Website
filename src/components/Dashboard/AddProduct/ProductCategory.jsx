import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";
import TxtArea from "./Input/TxtArea";

// css
import PrCss from "./Css/Lable.module.css";
import ItCss from "./Input/Css/InputType1.module.css";

export default function ProductCategory({ setData, showData }) {
  const handleSelectChange = (e) => {
    const value = e.target.value;

    value
      ? setData({ ...showData, veg: true, non_veg: false })
      : setData({ ...showData, veg: false, non_veg: true });
  };

  return (
    <>
      <p className={PrCss.AboutYou}>Publish Info</p>

      {/* Category */}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Category</p>

        <select
          name="Category"
          id=""
          className={ItCss.inp}
          onChange={handleSelectChange}
        >
          <option value="Selected" selected disabled hidden>
            Select
          </option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
    </>
  );
}

ProductCategory.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
