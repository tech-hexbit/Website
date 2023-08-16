import { useEffect } from "react";

// Components
import AboutUs from "./../components/About/AboutUs";
import Team from "../components/About/Team";
import Business from "../components/About/Business";

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
      <AboutUs />
      <Team />
      <Business />
    </div>
  );
}
