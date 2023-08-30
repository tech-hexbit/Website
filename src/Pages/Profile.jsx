import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// components
import UserSideBar from "./../components/userLoggedIn/UserSideBar";
import Dashboard from "./../components/Dashboard/DashboardMain";
import Categories from "./../components/Dashboard/Categories";
import ProfileMain from "./../components/Dashboard/Profile";

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
        </Routes>
      </div>
    </div>
  );
}
