import React from "react";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  // Ifsc Code
  return (
    <div className={SvCss.mDiv}>
      <p>Create Your Store</p>

      <div>
        <div className={SvCss.InpDiv}>
          <p>Account Holder Name</p>
          <input type="text" name="" id="" placeholder="Chandler Muriel Bing" />
        </div>

        <div className={SvCss.InpDiv}>
          <p>Account Number</p>
          <input type="text" name="" id="" placeholder="2134XXXXXX1416" />
        </div>

        <div className={SvCss.InpDiv}>
          <p>Bank Name</p>
          <input type="text" name="" id="" placeholder="State Bank of India" />
        </div>

        <div className={SvCss.InpDiv}>
          <p>Branch</p>
          <input type="text" name="" id="" placeholder="Jamtara Bazar" />
        </div>

        <div className={SvCss.InpDiv}>
          <p>IFSC Code</p>
          <input type="text" name="" id="" placeholder="SBINXXXXXX5" />
        </div>

        <div className={SvCss.InpDiv}>
          <p>City</p>
          <input type="text" name="" id="" placeholder="Jamtara" />
        </div>
      </div>
    </div>
  );
}
