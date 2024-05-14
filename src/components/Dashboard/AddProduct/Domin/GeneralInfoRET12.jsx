import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

// Component
import InpTp1 from './Input/InpTp1';

// CSS
import PrCss from './Css/Lable.module.css';
import ItCss from './Input/Css/InputType1.module.css';

export default function GeneralInfoRET12({ setData, showData }) {
  const [colourHex, setColourHex] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setData({ ...showData, gender: value });
  };

  const handleColorChange = (color) => {
    const hexCode = color.hex;
    setData({ ...showData, colour: hexCode });
    setColourHex(hexCode);
    setShowColorPicker(false); // Close the color picker dropdown
  };

  return (
    <>
      <p className={PrCss.AboutYou}>General Info</p>

      {/* Manufacturer name */}
      <InpTp1
        type="text"
        Label="Manufacturer name"
        showData={showData}
        setData={setData}
        field="manufacturer_or_packer_name"
        placeholder="Adidas AG"
      />

      {/* Manufacturer or Packer Address */}
      <InpTp1
        type="text"
        Label="Manufacturer or Packer Address"
        showData={showData}
        setData={setData}
        field="manufacturer_or_packer_address"
        placeholder="123, xyz street, Bengaluru"
      />

      {/* Common or Generic Name of Commodity */}
      <InpTp1
        type="text"
        Label="Common or Generic Name of Commodity"
        showData={showData}
        setData={setData}
        field="common_or_generic_name_of_commodity"
        placeholder="Shoe"
      />

      {/* Brand name */}
      <InpTp1
        type="text"
        Label="Brand name"
        showData={showData}
        setData={setData}
        field="brand_name"
        placeholder="Adidas"
      />

      {/* MRP */}
      <InpTp1
        type="number"
        Label="Maximum Retail Price (MRP)"
        showData={showData}
        setData={setData}
        field="maximum_value"
        placeholder="₹ 121"
      />

      {/* Stock */}
      <InpTp1
        type="number"
        Label="In Stock"
        showData={showData}
        setData={setData}
        field="maximumCount"
        placeholder="12"
      />

      {/* Discounts */}
      <InpTp1
        type="number"
        Label="Discounts / Offers (in %)"
        showData={showData}
        setData={setData}
        field="Discounts"
        placeholder="12 %"
      />

      {/* Size Chart */}
      <InpTp1
        type="url"
        Label="Size Chart"
        showData={showData}
        setData={setData}
        field="size_chart"
        placeholder="https://example.com/size_chart.jpg"

      />

      {/* Size Value */}
      <InpTp1
        type="text"
        Label="Size"
        showData={showData}
        setData={setData}
        field="size"
        placeholder="UK 10"
      />

      {/* Color Picker with hex conversion */}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Colour</p>
        <div className={ItCss.colorPickerContainer}>
          <input
            type="text"
            className={ItCss.colorInput}
            value={colourHex}
            readOnly
            onClick={() => setShowColorPicker(!showColorPicker)}
            placeholder="Select color"
          />
          {showColorPicker && (
            <div className={ItCss.colorPicker}>
              <SketchPicker
                color={colourHex}
                onChange={handleColorChange}
                disableAlpha={true}
              />
            </div>
          )}
        </div>
      </div>

      {/* Fabric Type */}
      <InpTp1
        type="text"
        Label="Fabric Type"
        showData={showData}
        setData={setData}
        field="fabric"
        placeholder="Synthetic leather"
      />

      {/* Gender Type */}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Gender Type</p>

        <select
          name="gender"
          id=""
          className={ItCss.inp}
          onChange={handleSelectChange}
        >
          <option value="Selected" selected disabled hidden>
            Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>
      </div>
    </>
  );
}

GeneralInfoRET12.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
