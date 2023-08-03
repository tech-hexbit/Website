import React, { useEffect } from "react";

// components
import RegisterHeader from "../components/Register/RegisterHeader";
import RegisterForm from "../components/Register/RegisterForm";

export default function Register() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="registerDivMain">
      <RegisterHeader />
      <RegisterForm />
    </div>
  );
}
