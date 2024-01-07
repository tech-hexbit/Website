import React, { useEffect } from "react";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";

export default function ForgotPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ForgetPassword />
    </div>
  );
}
