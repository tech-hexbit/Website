import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function StoreInfo({
  supportEmail,
  supportNumber,
  cancelAmt,
  cancelPer,
  workingDays,
  radius,
  holidays,
  location,
  h1,
  h2,
}) {
  const [days, setDays] = useState([]);
  const dayNames = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    const arrayObj = workingDays.split(",").map(Number);

    setDays(arrayObj);
  }, [workingDays]);

  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.heading}>Store info</div>

      <div className={PICss.box}>
        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Support Email</div>
            <div className={PICss.infodiv}>{supportEmail}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Support Number</div>
            <p className={PICss.infodiv}>{supportNumber}</p>
          </div>
        </div>

        <br />

        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Cancellation Amount</div>
            <div className={PICss.infodiv}>₹ {cancelAmt}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Cancellation Percentage</div>
            <p className={PICss.infodiv}>{cancelPer} %</p>
          </div>
        </div>

        {days.length > 0 && (
          <>
            <div className={PICss.col0}>
              <div className={PICss.inputheading}>Working Days</div>
              <div className={PICss.infodiv}>
                {days.map((val, key) => {
                  return <span key={key}> {dayNames[val]},</span>;
                })}
              </div>
            </div>
          </>
        )}

        <br />

        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Radius</div>
            <div className={PICss.infodiv}>{radius}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Stroe Location</div>
            <p className={PICss.infodiv}>{location}</p>
          </div>
        </div>

        <br />

        <div className={PICss.col0}>
          <div className={PICss.inputheading}>Holidays</div>
          {holidays.length > 0 ? (
            <>
              <div className={PICss.infodiv}>holidays</div>
            </>
          ) : (
            <>
              <div className={PICss.infodiv}>No Holidays</div>
            </>
          )}
        </div>

        <br />

        <div className={PICss.inputheadingMain}>Working Hours</div>
        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.infodiv}>{h1}</div>
          </div>
          <div className={PICss.col1}>
            <p className={PICss.infodiv}>{h2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

StoreInfo.propTypes = {
  supportEmail: PropTypes.string.isRequired,
  supportNumber: PropTypes.string.isRequired,
  cancelAmt: PropTypes.number.isRequired,
  cancelPer: PropTypes.number.isRequired,
  workingDays: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  h2: PropTypes.string.isRequired,
};
