import React, { useEffect } from "react";

// helmet
import { Helmet } from "react-helmet";

// components
import WhyUs from "./../components/Home/WhyUs";
import Modern from "./../components/Home/Modern";
import Header from "./../components/Home/Header";
import WhoAreWe from "../components/Home/WhoAreWe";
import RegisterFooter from "./../components/Home/RegisterFooter";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HEXBit.io - Empowering Global Commerce</title>
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
