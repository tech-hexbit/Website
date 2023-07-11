import React from "react";

// components
import SellLine from "./SellLine";
import Title from "./Title";

// css
import SCss from "./Css/Sell.module.css";

export default function Sell() {
  return (
    <div className={SCss.mDiv}>
      <Title title="Sell Smarter, Sell Faster" />
      <div className={SCss.contDiv}>
        <SellLine line="Streamline Your Online Sales With HEXBIT.Io's All-In-One Solution." />
        <SellLine line="Plug Into ONDC - Register Your Presence On The Huge ONDC Network" />
        <SellLine line="Make Your Products Discoverable By Customers Across India" />
      </div>
    </div>
  );
}
