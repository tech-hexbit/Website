import PropTypes from "prop-types";
//component
import InpTp1 from "../Input/InpTp1";
// css
import PrCss from "../Css/Lable.module.css"

export default function GeneralInfo({ setData, showData }) {
  // const handleSelectChange = (e) => {
  //   const value = e.target.value;

  //   value
  //     ? setData({ ...showData, veg: true, non_veg: false })
  //     : setData({ ...showData, veg: false, non_veg: true });
  // };

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

      {/* Veg */}
      {/* <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Veg</p>

        <select
          name="veg"
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
      </div> */}
    </>
  );
}

GeneralInfo.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired
};
