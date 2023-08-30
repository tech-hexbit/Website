import React, { useEffect } from "react";

// components
import Header from "./../components/Profile/Header";
import Header from "./Profile/Header";

export default function Profile() {
  return (
    <>
      <Header />
    </>
  );
}

// import React, { useEffect } from "react";

// // components
// import UserSideBar from "./../components/userLoggedIn/UserSideBar";
// import Header from "./../components/Profile/Header";

// // Css
// import PCss from "./Css/Profile.module.css";

// export default function Profile() {
//   // scroll to top
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className={PCss.mDiv}>
//       <UserSideBar />
//       <div className={PCss.CDiv}>
//         <Header />
//       </div>
//     </div>
//   );
// }
