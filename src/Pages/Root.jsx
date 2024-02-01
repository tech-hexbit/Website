import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modern from "./../components/Home/Modern";
import MobileHeader from "../components/header/MobileHeader";
import RegisterFooter from "../components/footer/RegisterFooter";

const Root = () => {
  const [show, set] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/AboutUs") {
      set(true);
    } else {
      set(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <MobileHeader />
      <Outlet />
      {show ? <RegisterFooter /> : ""}
      {show ? <Modern /> : ""}
      <Footer />
    </>
  );
};

export default Root;
