import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// // components
// import UserSideBar from "../../components/userLoggedIn/UserSideBar";
// import BestSellers from "../../components/userLoggedIn/dashboard/BestSellers";
// import Description from "../../components/userLoggedIn/dashboard/Description";
// import RecentOrders from "../../components/userLoggedIn/dashboard/RecentOrders";
// import Revenue from "../../components/userLoggedIn/dashboard/Revenue";

import DashboardMain from "./../../components/Dashboard/DashboardMain";
import Categories from "./../../components/Dashboard/Categories";

// Css
import PCss from "./../Css/Profile.module.css";

export default function Dashboard() {
  const [currTab, setCurrTab] = useState("me");
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ display: "flex", backgroundColor: "#F7F8FA" }}>
      <UserSideBar setCurrTab={setCurrTab} currTab={currTab} />
      <div className={PCss.CDiv}>
        <Description />
        <Revenue />
        <RecentOrders />
        <BestSellers />
      </div>
    </div>
  );
}
