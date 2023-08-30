import React, { useEffect } from "react";

// components
import UserSideBar from "../../components/userLoggedIn/UserSideBar";
import BestSellers from "../../components/userLoggedIn/dashboard/BestSellers";
import Description from "../../components/userLoggedIn/dashboard/Description";
import RecentOrders from "../../components/userLoggedIn/dashboard/RecentOrders";
import Revenue from "../../components/userLoggedIn/dashboard/Revenue";

// Css
import PCss from "./../Css/Profile.module.css";

export default function Dashboard() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ display: "flex", backgroundColor: "#F7F8FA" }}>
      <UserSideBar />
      <div className={PCss.CDiv}>
        <Description />
        <Revenue />
        <RecentOrders />
        <BestSellers />
      </div>
    </div>
  );
}
