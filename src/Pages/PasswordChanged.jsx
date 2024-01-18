import React, { useEffect } from "react";

//components
import PwdChanged from "./../components/ForgetPassword/PwdChanged";

export default function PasswordChanged() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PwdChanged />
    </div>
  );
}
