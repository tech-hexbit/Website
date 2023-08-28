import React, { useEffect } from "react";

// components
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
      <div className={PCss.CDiv}>Profile</div>
    </div>
  );
}
