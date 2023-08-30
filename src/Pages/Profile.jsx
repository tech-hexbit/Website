import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// components
import UserSideBar from "./../components/userLoggedIn/UserSideBar";
// import Header from "./../components/Profile/Header";

// Css
import PCss from "./Css/Profile.module.css";

export default function Profile() {
  const [currTab, setCurrTab] = useState("me");

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={PCss.mDiv}>
      <UserSideBar currTab={currTab} setCurrTab={setCurrTab} />
      <div className={PCss.CDiv}>
        <Routes></Routes>
        {/* <Header /> */}
      </div>
    </div>
  );
}
