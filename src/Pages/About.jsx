import { useState, useEffect } from "react";
// import { Blurhash } from "react-blurhash";

// Components
import Team from "../components/About/Team";
import AboutUs from "./../components/About/AboutUs";
import Business from "../components/About/Business";
import Blur from "./../components/About/Blur/ImageComponent";
import LoadingPage from "./../MicroInteraction/Loading";

// img
import image from "./../assets/AboutUS/HEXBITAbtUsHeader.png";

export default function About() {
  // const [show, load] = useState(true);
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* {show ? "Loading..." : "Done ✅"} */}

      {/* <p onClick={() => load(false)}>CLick</p> */}
      {/* {show ? (
        <LoadingPage />
      ) : (
        <> */}
      {/* <img src={image} alt="" width="100%" /> */}
      <Blur
        src={image}
        blur="LHL;gVRl9FtQIBt8WBWB_KobWBRj"
        // load={load}
        // show={show}
      />
      <AboutUs />
      <Team />
      <Business />
    </>
    // )}
    // {}
    // </>
  );
}
