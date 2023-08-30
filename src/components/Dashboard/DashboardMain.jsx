import React from "react";

// components
import Revenue from "./DashboardCom/Revenue";
import Description from "./DashboardCom/Description";
import BestSellers from "./DashboardCom/BestSellers";
import RecentOrders from "./DashboardCom/RecentOrders";

export default function DashboardMain() {
  return (
    <>
      <Description />
      <Revenue />
      <RecentOrders />
      <BestSellers />
    </>
  );
}
