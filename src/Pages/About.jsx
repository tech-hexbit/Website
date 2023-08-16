import { useEffect } from "react";
// import { Blurhash } from "react-blurhash";

// Components
import Team from "../components/About/Team";
import AboutUs from "./../components/About/AboutUs";
import Business from "../components/About/Business";
import Blur from "./../components/About/Blur/ImageComponent";

// img
import image from "./../assets/AboutUS/HEXBIT.png";

export default function About() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img src={image} alt="" width="100%" />
      <Blur src={image} blur={props.mem.blur} />
      <AboutUs />
      <Team />
      <Business />
    </div>
  );
}
