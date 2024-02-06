import React from "react";
import PropTypes from "prop-types";

//css
import OfCss from "./Css/OndcField.module.css";
import TfCss from "./Css/TimingField.module.css";

export default function TimingField({ showData, setData }) {
  const handleStartTimeChange = (e) => {
    const timing = e.target.value;
    const militaryTiming = timing.replace(":", "");
    setData((prevData) => ({
      ...prevData,
      times: [militaryTiming, prevData.times[1]],
    }));
  };

  const handleEndTimeChange = (e) => {
    const timing = e.target.value;
    const militaryTiming = timing.replace(":", "");
    setData((prevData) => ({
      ...prevData,
      times: [prevData.times[0], militaryTiming],
    }));
  };

  return (
    <div className={TfCss.timingLargeDiv}>
      <p className={OfCss.inputLabel}>Store Timing</p>
      <div className={TfCss.timingSmallDiv}>
        <input
          type="time"
          name="StoreTiming"
          id=""
          placeholder="0900"
          onChange={(e) => {
            const timing = e.target.value;
            const militaryTiming = timing.replace(":", "");

            console.log(militaryTiming);
            setData({
              ...showData,
              times: [militaryTiming, showData.times[1]],
            });
          }}
        />
        <input
          type="time"
          name="days"
          id=""
          placeholder="1800"
          onChange={(e) => {
            const timing = e.target.value;
            const militaryTiming = timing.replace(":", "");
            setData({
              ...showData,
              times: [showData.times[0], militaryTiming],
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
