import React from "react";

// components
import UserSideBar from "./../components/userLoggedIn/UserSideBar";

// Css
import PCss from "./Css/Profile.module.css";

export default function Profile() {
  return (
    <div className={PCss.mDiv}>
      <UserSideBar />
      <div className={PCss.CDiv}>Profile s</div>
    </div>
  );
}
