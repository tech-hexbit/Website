import React, { useEffect } from "react";

// components
// import RegisterHeader from "../components/Register/RegisterHeader";
import RegisterMain from "../components/Register/RegisterMain";

export default function Register() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <RegisterHeader /> */}
      <RegisterMain />
    </div>
  );
}
