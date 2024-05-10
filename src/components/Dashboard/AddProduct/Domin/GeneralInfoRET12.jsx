import React, {useState} from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";

// css
import PrCss from "./Css/Lable.module.css";
import ItCss from "./Input/Css/InputType1.module.css";

const colourMap = {

  // Basic colors
  White: "#FFFFFF",
  Black: "#000000",
  Red: "#FF0000",
  Green: "#008000",
  Blue: "#0000FF",
  Yellow: "#FFFF00",
  Cyan: "#00FFFF",
  Magenta: "#FF00FF",
  Gray: "#808080",

  // Additional colors
  LightGray: "#D3D3D3",
  DarkGray: "#A9A9A9",
  Orange: "#FFA500",
  Purple: "#800080",
  Brown: "#A52A2A",
  Pink: "#FFC0CB",
  Gold: "#FFD700",
  Silver: "#C0C0C0",
  Indigo: "#4B0082",
  Olive: "#808000",
  Maroon: "#800000",
  Navy: "#000080",
  Teal: "#008080",
  Coral: "#FF7F50",
  Lavender: "#E6E6FA",
  Slate: "#708090",
  Turquoise: "#40E0D0",
  Tomato: "#FF6347",
  Orchid: "#DA70D6",
  Sienna: "#A0522D",
  SkyBlue: "#87CEEB",
  Salmon: "#FA8072",
  Khaki: "#F0E68C",
  Lime: "#00FF00",
  Beige: "#F5F5DC",
  Crimson: "#DC143C",
  DarkSlateGray: "#2F4F4F",
  ForestGreen: "#228B22",
  DarkViolet: "#9400D3",
  RosyBrown: "#BC8F8F",
  MidnightBlue: "#191970",
  DarkOrange: "#FF8C00",
  DeepPink: "#FF1493",
  MediumPurple: "#9370DB",
  OliveDrab: "#6B8E23",
};


export default function GeneralInfo({ setData, showData }) {

  const [colourHex, setColourHex] = useState(""); 
  const handleSelectChange = (e) => {
    const value = e.target.value;

    setData({ ...showData, gender: value });
  };

  const handleColourChange = (e) => {
    const colourName = e.target.value;
    const hexCode = colourMap[colourName] || ""; 
    setData({ ...showData, colour: hexCode }); 
    setColourHex(hexCode); 
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
        placeholder="Frito-Lay, INC."
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

      {/* Maximum Stock */}
      <InpTp1
        type="number"
        Label="Maximum Stock"
        showData={showData}
        setData={setData}
        field="maximumCount"
        placeholder="50"
      />

      {/* Available Stock */}
      <InpTp1
        type="number"
        Label="Available Stock"
        showData={showData}
        setData={setData}
        field="availableCount"
        placeholder="20"
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

      {/* Measure Unit */}
      <InpTp1
        type="text"
        Label="Measure Unit"
        showData={showData}
        setData={setData}
        field="measureUnit"
        placeholder="pairs"
      />

      {/* Measure Value */}
      <InpTp1
        type="number"
        Label="Measure Value"
        showData={showData}
        setData={setData}
        field="measureValue"
        placeholder="1"
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

      {/* Color dropdown with hex conversion */}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Colour</p>
        <select
          name="colour"
          id=""
          className={ItCss.inp}
          onChange={handleColourChange}
        >
          <option value="" selected disabled hidden>
            Select
          </option>
          {Object.keys(colourMap).map((colour) => (
            <option key={colour} value={colour}>
              {colour}
            </option>
          ))}
        </select>
      </div>

      {/* Colour Final hex Value */}
      <InpTp1
        type="text"
        Label="Colour Hex Value"
        showData={showData}
        setData={setData}
        field="colour"
        placeholder="#FFFFFF"
      />

      {/* Fabric Type */}
      <InpTp1
        type="text"
        Label="Fabric Type"
        showData={showData}
        setData={setData}
        field="fabric"
        placeholder="Synthetic leather"
      />

      {/* Size Chart */}
      <InpTp1
        type="text"
        Label="Size Chart"
        showData={showData}
        setData={setData}
        field="size_chart"
        placeholder="standard"
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

GeneralInfo.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
