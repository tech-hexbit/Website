import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modern from "./../components/Home/Modern";
import RegisterFooter from "../components/footer/RegisterFooter";

const Root = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, set] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/AboutUs" ||
      location.pathname === "/contact"
    ) {
      set(true);
    } else {
      set(false);
    }
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      {show ? <RegisterFooter /> : ""}
      {show ? <Modern /> : ""}
      <Footer />
    </>
  );
};

export default Root;
