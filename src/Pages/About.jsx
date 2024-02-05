import { useEffect } from "react";

// helmet
import { Helmet } from "react-helmet";

// Components
import Team from "../components/About/Team";
import AboutUs from "./../components/About/AboutUs";
import Business from "../components/About/Business";
import Blur from "./../components/About/Blur/ImageComponent";

// img
import image from "./../assets/AboutUS/abUsHeader.png";

export default function About() {
  return (
    <>
      <Helmet>
        <title>HexBit.io - About</title>
      </Helmet>

      <Blur src={image} blur="LHL;gVRl9FtQIBt8WBWB_KobWBRj" />
      <AboutUs />
      <Team />
      <Business />
    </>
  );
}
