import React from "react";

export default function OTP() {
  return (
    <>
      {/* OTP and Phone Number */}
      <div className={style.phoneOTP}>
        <div className={style.inputPO}>
          <label htmlFor="phone">
            Phone<span className="requiredSpan">*</span>
          </label>
          <br />
          <div className={style.phoneInputs}>
            <input
              type="text"
              placeholder="+91"
              disabled
              id={style.countryCode}
            />
            <input
              type="number"
              placeholder="XXXXX-XXXXX"
              id="phone"
              className={style.phone}
            />
          </div>
        </div>
        <div className={style.inputPO}>
          <label htmlFor="otp">
            Enter OTP<span className="requiredSpan">*</span>
          </label>
          <br />
          <div className={style.otpInputs}>
            <input type="text" placeholder="Enter the otp" id="otp" />
            <button>Resend OTP</button>
          </div>
        </div>
      </div>
    </>
  );
}
