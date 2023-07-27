import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// components
import Header from "./../components/Home/Header";
import WhoAreWe from "../components/Home/WhoAreWe";
import WhyUs from "./../components/Home/WhyUs";
import Modern from "./../components/Home/Modern";
import MobileHeader from "../components/header/MobileHeader";

export default function Home() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>HexBit.io - Home</title>
      </Helmet>
      <div>
        <Header />
        <MobileHeader />
        <WhoAreWe />
        <WhyUs />
      </div>
    </>
  );
}
