import PropTypes from "prop-types";
//component
import InpTp1 from "../Input/InpTp1";
// css
import PrCss from "../Css/Lable.module.css";
import { useState, useEffect } from "react";

export default function GeneralInfo({ setData, showData }) {
  // Initialize state for finalPrice using useState hook
  const [finalPrice, setFinalPrice] = useState(0);

  // Function to calculate the final price based on MRP and Discount
  const calculateFinalPrice = (mrp, discount) => {
    if (!mrp || !discount) return mrp || 0; // If MRP or Discount is not entered, return MRP or 0
    const discountValue = (mrp * discount) / 100;
    return (mrp - discountValue).toFixed(2); // Return the final price rounded to 2 decimal places
  };

  // Effect hook to calculate the final price whenever MRP or Discount changes
  useEffect(() => {
    // console.log("Calculating final price...");
    // console.log("MRP:", showData["maximum_value"], "Discount:", showData["Discounts"]);
    
    const mrp = showData["maximum_value"] || 0;
    const discount = showData["Discounts"] || 0;
  
    const calculatedFinalPrice = calculateFinalPrice(mrp, discount);
    // console.log("Final Price:", calculatedFinalPrice);
  
    setFinalPrice(calculatedFinalPrice);
    
    setData(prevData => ({
      ...prevData,
      finalPrice: calculatedFinalPrice,
    }));
  }, [showData["maximum_value"], showData["Discounts"]]);

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
        placeholder="H&M Group, ASOS"
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
        value={showData["maximum_value"] || 0} // Default to 0 if MRP is not entered
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
        value={showData["Discounts"] || 0} // Default to 0 if Discount is not entered
      />

      {/* Final Price */}
      <InpTp1
        type="number"
        Label="Final Price"
        showData={showData}
        setData={setData}
        field="finalPrice"
        value={finalPrice || 0} // Show calculated final price, default to 0
        readOnly // Final price is read-only
        placeholder="₹ 0"
      />
    </>
  );
}

GeneralInfo.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};
