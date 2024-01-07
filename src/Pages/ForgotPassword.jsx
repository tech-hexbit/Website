import React, { useEffect } from "react";

// components
import ForgetPassword from "./../components/ForgetPassword/ForgetPassword";

export default function ForgotPassword() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ForgetPassword />
    </div>
  );
}
