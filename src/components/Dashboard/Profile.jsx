import React, { useEffect } from "react";

// components
import Header from "./Profile/Header";
import StoreVerify from "./../../Pages/StoreVerify";

export default function Profile() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <StoreVerify />
    </>
  );
}
