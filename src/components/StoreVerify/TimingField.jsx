// import SvCss from "../Css/StoreVerify.module.css";

import SvCss from "../../Pages/Css/StoreVerify.module.css";
const TimingField = ({ showData, setData }) => {
  return (
    <div className={SvCss.timing_large_div}>
      <p className={SvCss.input_label}>Store Timing</p>
      <div className={SvCss.timing_small_div}>
        <input
          type="time"
          name="Store_Timing"
          value={showData.StoreTimingStart}
          id=""
          placeholder="0900"
          onChange={(e) => {
            setData({ ...showData, StoreTimingStart: e.target.value });
          }}
        />
        <input
          type="time"
          name="days"
          value={showData.StoreTimingEnd}
          id=""
          placeholder="1800"
          onChange={(e) => {
            setData({ ...showData, StoreTimingEnd: e.target.value });
          }}
        />
      </div>
    </div>
  );
};
export default TimingField;
