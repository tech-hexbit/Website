// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import PropTypes from "prop-types";
import SvCss from "../../Pages/Css/StoreVerify.module.css";
const TimingField = (props) => {
  return (
    <div className={SvCss.timingLargeDiv}>
      <p className={SvCss.inputLabel}>Store Timing</p>
      <div className={SvCss.timingSmallDiv}>
        <input
          type="time"
          name="Store_Timing"
          value={props.showData.StoreTimingStart}
          id=""
          placeholder="0900"
          onChange={(e) => {
            props.setData({
              ...props.showData,
              StoreTimingStart: e.target.value,
            });
          }}
        />
        <input
          type="time"
          name="days"
          value={props.showData.StoreTimingEnd}
          id=""
          placeholder="1800"
          onChange={(e) => {
            props.setData({
              ...props.showData,
              StoreTimingEnd: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};
TimingField.propTypes = {
  props: PropTypes.shape({
    showData: PropTypes.object,
  }),
};
export default TimingField;
