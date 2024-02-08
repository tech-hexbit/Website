import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//css
import OfCss from "./Css/OndcField.module.css";
import TfCss from "./Css/TimingField.module.css";

export default function TimingField({ showData, setData }) {
  const [storeTime, setStoreTime] = useState({
    start: "",
    end: "",
  });

  const handleStartTimeChange = (e) => {
    const timing = e.target.value;
    const militaryTiming = timing.replace(":", "");

    const times = showData.times || ["", ""];

    setData((prevData) => ({
      ...prevData,
      times: [militaryTiming, times[1]],
    }));

    setStoreTime({
      ...storeTime,
      start: e.target.value,
    });
  };

  const handleEndTimeChange = (e) => {
    const timing = e.target.value;
    const militaryTiming = timing.replace(":", "");

    // Initialize times array if it's undefined
    const times = showData.times || ["", ""];

    setData((prevData) => ({
      ...prevData,
      times: [times[0], militaryTiming],
    }));

    setStoreTime({
      ...storeTime,
      end: e.target.value,
    });
  };

  return (
    <div className={TfCss.timingLargeDiv}>
      <p className={OfCss.inputLabel}>Store Timing</p>
      <div className={TfCss.timingSmallDiv}>
        {/* Start Time */}
        <input
          type="time"
          name="StoreTiming"
          id=""
          placeholder="0900"
          onChange={handleStartTimeChange}
          value={storeTime.storeTime}
        />

        {/* End Time */}
        <input
          type="time"
          name="days"
          id=""
          placeholder="1800"
          onChange={handleEndTimeChange}
          value={storeTime.end}
        />
      </div>
    </div>
  );
}

TimingField.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
