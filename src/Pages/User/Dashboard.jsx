import React, { useEffect } from "react";

import UserSideBar from "../../components/userLoggedIn/UserSideBar";
import BestSellers from "../../components/userLoggedIn/dashboard/BestSellers";
import Description from "../../components/userLoggedIn/dashboard/Description";
import RecentOrders from "../../components/userLoggedIn/dashboard/RecentOrders";
import Revenue from "../../components/userLoggedIn/dashboard/Revenue";

export default function Dashboard() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ display: "flex", backgroundColor: "#F7F8FA" }}>
      <UserSideBar />
      <div
        style={{
          width: "80%",
          padding: "30px 25px 50px 0px",
          display: "grid",
          gap: "40px",
        }}
      >
        <Description />
        <Revenue />
        <RecentOrders />
        <BestSellers />
      </div>
    </div>
  );
}
