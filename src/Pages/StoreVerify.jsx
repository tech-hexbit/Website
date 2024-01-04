import React from "react";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  // Bank Name
  // City
  // Branch
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
          <input type="text" name="" id="" placeholder="2134XXXXXX1416" />
        </div>
      </div>
    </div>
  );
}
