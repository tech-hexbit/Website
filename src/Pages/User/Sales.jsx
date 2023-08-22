// import React from 'react'

import UserSideBar from "../../components/userLoggedIn/UserSideBar";
import OverallSales from "../../components/userLoggedIn/sales/OverallSales";

import SCss from "./css/sales.module.css";

export default function Sales() {
  return (
    <div style={{ display: "flex", backgroundColor: "#F7F8FA" }}>
      <UserSideBar />
      <div className={SCss.mainDiv}>
        <div className={SCss.heading}>Sales</div>
        <OverallSales />
      </div>
    </div>
  );
}
