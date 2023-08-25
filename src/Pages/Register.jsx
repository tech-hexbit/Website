import React, { useEffect } from "react";

// components
import RegisterMain from "../components/Register/RegisterMain";

export default function Register() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <RegisterMain />
    </div>
  );
}
