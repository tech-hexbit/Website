import { useState, useEffect } from "react";
// import { Blurhash } from "react-blurhash";

// Components
import Team from "../components/About/Team";
import AboutUs from "./../components/About/AboutUs";
import Business from "../components/About/Business";
import Blur from "./../components/About/Blur/ImageComponent";
import LoadingPage from "./../MicroInteraction/Loading";

// img
import image from "./../assets/AboutUS/HEXBIT.png";

export default function About() {
  const [show, load] = useState(true);
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <>
      {show ? "" : ""}
      {/* {show ? (
        <LoadingPage />
      ) : (
        <> */}
      {/* <img src={image} alt="" width="100%" /> */}
      <Blur src={image} blur="LHL;gVRl9FtQIBt8WBWB_KobWBRj" load={load} />
      <AboutUs />
      <Team />
      <Business />
      {/* </>
      )} */}
      {}
    </>
  );
}
