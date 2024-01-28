import React from "react";

//proptypes
import PropTypes from "prop-types";

//css
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
    <div className={SvCss.nestedFieldLargeDiv}>
      <div>ONDC DETAILS</div>
      <div className={SvCss.nestedFieldSmallDiv}>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.inputLabel}>Time to ship</div>
          <select name="languages" id="lang">
            <option value="select">Shipping Time</option>
            <option>8 AM - 12 PM</option>
            <option>12 PM - 4 PM</option>
            <option>4 PM - 8 PM</option>
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.inputLabel}>Cancellable</div>
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
          <div className={SvCss.inputLabel}>Returnable</div>
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
          <p className={SvCss.inputLabel}>Contact Details For Consumer Care</p>
          <input
            type="number"
            name="Contact Details For Customer Care"
            value={props.showData.ContactDetailsForConsumerCare}
            id=""
            placeholder="Contact Details"
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
Ondc_Details.propTypes = {
  props: PropTypes.shape({
    showData: PropTypes.object,
  }),
};
export default Ondc_Details;
