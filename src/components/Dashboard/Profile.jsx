import React, { useEffect, useContext } from "react";

// components
import Header from "./Profile/Header";
import StoreVerify from "./../../Pages/StoreVerify";

// state
import AuthContext from "./../../store/auth-context";

export default function Profile() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.user.Store[0].StoreID.validation ? <Header /> : <StoreVerify />}
    </>
  );
}
