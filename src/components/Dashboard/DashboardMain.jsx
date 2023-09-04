import React, { useState, useEffect } from "react";

// components
import Revenue from "./DashboardCom/Revenue";
import Description from "./DashboardCom/Description";
import BestSellers from "./DashboardCom/BestSellers";
import RecentOrders from "./DashboardCom/RecentOrders";

// css
import DBCss from "./Css/DashB.module.css";

export default function DashboardMain() {
  const [defaultSet, setDefaultSet] = useState("RecentOrders");

  return (
    <>
      <Description defaultSet={defaultSet} setDefaultSet={setDefaultSet} />

      {/* <div className={DBCss.containDiv}> */}
      {defaultSet === "Revenue" && <Revenue />}
      {defaultSet === "RecentOrders" && <RecentOrders />}
      {defaultSet === "BestSellers" && <BestSellers />}
      {/* </div> */}
    </>
  );
}
