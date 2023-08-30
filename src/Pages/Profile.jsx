import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// components
import Sales from "./../components/Dashboard/Sales";
import Gateway from "../components/Dashboard/Gateway";
import Products from "./../components/Dashboard/Products";
import ProfileMain from "./../components/Dashboard/Profile";
import Categories from "./../components/Dashboard/Categories";
import Dashboard from "./../components/Dashboard/DashboardMain";
//          || SideBar
import UserSideBar from "./../components/userLoggedIn/UserSideBar";

// Css
import PCss from "./Css/Profile.module.css";

export default function Profile() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={PCss.mDiv}>
      <UserSideBar />
      <div className={PCss.CDiv}>
        <Routes>
          <Route path="/" element={<ProfileMain />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/gateway" element={<Gateway />} />
        </Routes>
      </div>
    </div>
  );
}
