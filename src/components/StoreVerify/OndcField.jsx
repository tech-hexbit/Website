// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import SvCss from "../../Pages/Css/StoreVerify.module.css";

const Ondc_Details = (props) => {
  const handleSelectChangeReturn = (event) => {
    const selectedValue = event.target.value;
    props.setData({
      ...props.showData,
      Returnable: selectedValue,
    });
  };
  const handleSelectChangeCancel = (event) => {
    const selectedValue = event.target.value;
    props.setData({
      ...props.showData,
      Cancellable: selectedValue,
    });
  };

  return (
    <div className={SvCss.nested_field_large_div}>
      <div>ONDC DETAILS</div>
      <div className={SvCss.nested_field_small_div}>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>Time to ship</div>
          <select name="languages" id="lang">
            <option value="select">Select Shipping Time</option>
            <option>8 AM - 12 PM</option>
            <option>12 PM - 4 PM</option>
            <option>4 PM - 8 PM</option>
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>Cancellable</div>
          <select
            name="languages"
            id="lang"
            onChange={handleSelectChangeCancel}
          >
            <option>Choose option</option>
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>Returnable</div>
          <select
            name="languages"
            id="lang"
            onChange={handleSelectChangeReturn}
          >
            <option>Choose option</option>
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <p className={SvCss.input_label}>Contact Details For Consumer Care</p>
          <input
            type="number"
            name="Contact Details For Customer Care"
            value={props.showData.ContactDetailsForConsumerCare}
            id=""
            placeholder="Consumer Care Contact Details"
            onChange={(e) => {
              props.setData({
                ...props.showData,
                ContactDetailsForConsumerCare: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Ondc_Details;
