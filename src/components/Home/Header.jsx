import React from "react";

// components
import SellLine from "./SellLine";

// css
import HCss from "./Css/Header.module.css";
import SCss from "./Css/Sell.module.css";

// img
import img1 from "./../../assets/Group 112.png";
import logoheader from "./../../assets/logo/logoheader.png";

export default function Header() {
  return (
    <div className={HCss.mDiv}>
      <img src={img1} alt="" className={HCss.imgTag} />
      <div className={SCss.contDiv}>
        <div className={HCss.headerTitle}>
          Sell Smarter, Sell Faster at HEXBIT.io
          {/* <img src={logoheader} alt="" className={HCss.logoheaderImg} /> */}
        </div>
        <SellLine line="Streamline Your Online Sales With HEXBIT.Io's All-In-One Solution." />
        <SellLine line="Plug Into ONDC - Register Your Presence On The Huge ONDC Network" />
        <SellLine line="Make Your Products Discoverable By Customers Across India" />
      </div>
    </div>
  );
}
