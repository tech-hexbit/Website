import React, { useEffect } from "react";

// Components
import AboutUs from "./../components/About/AboutUs";
import MissionText from "./../components/About/MissionText";
import ContentBlock from "./../components/About/ContentBlock";
import Founders from "./../components/About/Founders";
import Advisors from "./../components/About/Advisors";

export default function About() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    //
  }, []);

  return (
    <div>
      <AboutUs />
      <MissionText />
      <ContentBlock />
      <Founders />
      <Advisors />
    </div>
  );
}
