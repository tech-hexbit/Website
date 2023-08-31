import { useState, useEffect } from "react";
// import { Blurhash } from "react-blurhash";

// Components
import Team from "../components/About/Team";
import AboutUs from "./../components/About/AboutUs";
import Business from "../components/About/Business";
import Blur from "./../components/About/Blur/ImageComponent";
import LoadingPage from "./../MicroInteraction/Loading";

// img
import image from "./../assets/AboutUS/abUsHeader.png";

export default function About() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Blur src={image} blur="LHL;gVRl9FtQIBt8WBWB_KobWBRj" />
      <AboutUs />
      <Team />
      <Business />
    </>
  );
}
