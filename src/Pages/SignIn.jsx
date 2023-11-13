import React, { useEffect } from "react";

// components
import SignInForm from "../components/signIn/SignInForm";

export default function SignIn() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SignInForm />
    </div>
  );
}
