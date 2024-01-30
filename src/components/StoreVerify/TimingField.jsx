import React from "react";
import PropTypes from "prop-types";

//css
import OfCss from "./Css/OndcField.module.css";
import TfCss from "./Css/TimingField.module.css";

export default function TimingField({ showData, setData }) {
  return (
    <div className={TfCss.timingLargeDiv}>
      <p className={OfCss.inputLabel}>Store Timing</p>
      <div className={TfCss.timingSmallDiv}>
        <input
          type="time"
          name="StoreTiming"
          value={showData.StoreTimingStart}
          id=""
          placeholder="0900"
          onChange={(e) => {
            setData({
              ...showData,
              StoreTimingStart: e.target.value,
            });
          }}
        />
        <input
          type="time"
          name="days"
          value={showData.StoreTimingEnd}
          id=""
          placeholder="1800"
          onChange={(e) => {
            setData({
              ...showData,
              StoreTimingEnd: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
}

TimingField.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
