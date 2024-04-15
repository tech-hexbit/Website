import React, { useState } from "react";

// components
import Revenue from "./DashboardCom/Revenue";
import Description from "./DashboardCom/Description";
import BestSellers from "./DashboardCom/BestSellers";
import RecentOrders from "./DashboardCom/RecentOrders";

export default function DashboardMain() {
  const [defaultSet, setDefaultSet] = useState("RecentOrders");

  return (
    <>
      <Description defaultSet={defaultSet} setDefaultSet={setDefaultSet} />

      {defaultSet === "Revenue" && <Revenue />}
      {defaultSet === "BestSellers" && <BestSellers />}
      {defaultSet === "RecentOrders" && <RecentOrders />}
    </>
  );
}
