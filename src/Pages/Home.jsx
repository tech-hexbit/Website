import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// components
import WhyUs from "./../components/Home/WhyUs";
import Modern from "./../components/Home/Modern";
import Header from "./../components/Home/Header";
import WhoAreWe from "../components/Home/WhoAreWe";
import RegisterFooter from "./../components/Home/RegisterFooter";

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
        <WhoAreWe />
        <WhyUs />
        <RegisterFooter />
        <Modern />
      </div>
    </>
  );
}
