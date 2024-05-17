import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import InpTp1 from './Input/InpTp1';

import AuthContext from "../../../../store/auth-context";

import PrCss from './Css/Lable.module.css';
import ItCss from './Input/Css/InputType1.module.css';
import { set } from 'react-ga';

export default function GeneralInfoRET12({ setData, showData, isChecked, onCheckChange }) {
  const authCtx = useContext(AuthContext);
  const [colourHex, setColourHex] = useState('#fff');
  const [showColourPicker, setShowColourPicker] = useState(false);
  const [variants, setVariants] = useState([{ size: '', colour: '' }]);
  const [activeColourPicker, setActiveColourPicker] = useState(null);
  const [index, setIndex] = useState(0);
  console.log(index);

  const handleAddVariant = () => {
    setVariants([...variants, { size: '', colour: '' }]);
    setIndex(index + 1)
  };

  const handleRemoveVariant = () => {
    if (variants.length > 1) {
      const newVariants = [...variants];
      newVariants.pop();
      setVariants(newVariants);
      setIndex(index - 1);
    }
  };

  const handleSaveVariant = () => {
    if (variants.length > 1) {
      setData({ ...showData, variants: variants});
      authCtx.showAlert({
        mainColor: "#EDFEEE",
        secondaryColor: "#5CB660",
        symbol: "check_circle",
        title: "Success",
        text: "Successfully Added",
      });
      console.log(showData.variants);

    } else {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Add at least 1 variant to save",
      });
    }
  };

  const handleConfirm = () => {
    
    if (variants[0].size !== '' && variants[0].colour !== '' && variants.length === 1) {
      setData({ ...showData, variants: variants});
      authCtx.showAlert({
        mainColor: "#EDFEEE",
        secondaryColor: "#5CB660",
        symbol: "check_circle",
        title: "Success",
        text: "Confirmed",
      });
    }

    else {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please Fill All The Details",
      });
    }
  };

  const handleSizeChange = (index, field, value) => {
    if (index === 0) {
      const newVariants = [...variants];
      newVariants[index][field] = value;
      setVariants(newVariants);

    } else {
      const newVariants = [...variants];
      newVariants[index][field] = value;
      setVariants(newVariants);
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setData({ ...showData, gender: value });
  };

  const handleColourChange = (colour, index) => {
    const hexCode = colour.hex;
    if (index === 0) {
      const newVariants = [...variants];
      newVariants[index].colour = hexCode;
      setColourHex(hexCode); 
      setVariants(newVariants);

    } else {
      const newVariants = [...variants];
      setVariants(newVariants);
      newVariants[index].colour = hexCode;
      setColourHex(hexCode);
      setVariants(newVariants);
    }
  };

  const toggleColourPicker = (index) => {
    setActiveColourPicker(activeColourPicker === index ? null : index );
  };

  const handleCheckBox = (e) => {
    onCheckChange(e.target.checked);
    console.log(index);
  }
  
  return (
    <>
      <p className={PrCss.AboutYou}>General Info</p>

      {/* Checkbox for isParent */}
      <label className={ItCss.inpCheckbox}>
        Parent Item :
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckBox} 
          style={{ width: '16px', height: '16px', cursor: 'pointer' }}
        />
      </label>

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

      {/* Measure Unit */}
      <InpTp1
        type="text"
        Label="Measure Unit"
        showData={showData}
        setData={setData}
        field="measureUnit"
        placeholder="pair"
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

      {/* Size Chart */}
      <InpTp1
        type="url"
        Label="Size Chart"
        showData={showData}
        setData={setData}
        field="size_chart"
        placeholder="https://example.com/size_chart.jpg"
      />

      {/*Parent Size*/}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Size</p>
        <input        
          type="text"
          placeholder="UK 10"
          onChange={(e) =>
            handleSizeChange(0, 'size', e.target.value)
          }      
        />
      </div>

      {/* Parent Color */}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Colour</p>
        <div className={ItCss.colourPickerContainer}>
          <input
            type="text"
            className={ItCss.colourInput}
            value={colourHex}
            readOnly
            onClick={() => setShowColourPicker(!showColourPicker)}
            placeholder="Select color"
          />
          {showColourPicker && (
            <div className={ItCss.colourPicker}>
              <SketchPicker
                color={colourHex}
                onChange={(colour) => handleColourChange(colour, 0)}
                disableAlpha={true}
              />
            </div>
          )}
        </div>
      </div>

      {/* Variant Placeholders */}
      {isChecked && index >= 1 && 
        variants.slice(1).map((variant, index) => (
          <div key={index}>
            <div className={ItCss.inpDiv}>
              <p className={ItCss.inputLabel}>{`Size of Variant ${index + 1}`}</p>
              <input
                type="text"
                value={variant.size}
                onChange={(e) =>
                  handleSizeChange(index + 1, 'size', e.target.value)
                }
              />
            </div>
            <div className={ItCss.inpDiv}>
              <p className={ItCss.inputLabel}>{`Colour of Variant ${index + 1}`}</p>
              <div className={ItCss.colourPickerContainer}>
                <input
                  type="text"
                  className={ItCss.colourInput}
                  value={variant.colour}
                  readOnly
                  onClick={() => toggleColourPicker(index + 1)}
                  placeholder="Select color"
                />
                {activeColourPicker === index + 1 && (
                  <div className={ItCss.colourPicker}>
                    <SketchPicker
                      colour={variant.colour}
                      onChange={(colour) => handleColourChange(colour, index + 1)}
                      disableAlpha={true}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      }
      
      {isChecked ? (
        <div className={ItCss.VariantBtnDiv}>
          <p className={ItCss.AddVariantBtn} onClick={handleSaveVariant}>
            {'Save'}
          </p>
          <p className={ItCss.AddVariantBtn} onClick={handleAddVariant}>
            {'Add variant'}
          </p>
          <p className={ItCss.RemoveVariantBtn} onClick={handleRemoveVariant}>
            {'Remove variant'}
          </p>
        </div>
      ) : (
        <div className={ItCss.inpDiv}>
          <p className={ItCss.inputLabel}>Confirm if Item has No Variant</p>
          <div className={ItCss.VariantBtnDiv}>
            <p className={ItCss.AddVariantBtn} onClick={handleConfirm}>
              {'Confirm'}
            </p>
          </div>
        </div>
      )}
      
    </>
  );
}

GeneralInfoRET12.propTypes = {
  showData: PropTypes.object.isRequired,
  onCheckChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
