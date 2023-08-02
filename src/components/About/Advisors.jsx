import React from "react";

import AdvisorCard from "./AdvisorCard";

// Css
import ACss from "./Css/Advisors.module.css";

//images
import advisor1 from "../../assets/AboutUs/advisors/advisor1.png";
import advisor2 from "../../assets/AboutUs/advisors/advisor2.png";
import advisor3 from "../../assets/AboutUs/advisors/advisor3.png";
import advisor4 from "../../assets/AboutUs/advisors/advisor4.png";
import company1 from "../../assets/AboutUs/advisors/advisor1company.png";
import company2 from "../../assets/AboutUs/advisors/advisor2company.png";
import company3 from "../../assets/AboutUs/advisors/advisor3company.png";
import company4 from "../../assets/AboutUs/advisors/advisor4company.png";

export default function Advisors() {
  return (
    <div className={ACss.mainDiv}>
      <div>
        <div className={ACss.heading}>Our Back-Bone</div>
        <div className={ACss.subHeading}>Advisors</div>
      </div>
      <div>
        <div className={ACss.advisorHead}>Our Board Of Advisors.</div>
        <div className={ACss.advisorList}>
          <AdvisorCard
            image={advisor1}
            name="Badrinath Mishra"
            company={company1}
          />
          <AdvisorCard
            image={advisor2}
            name="Dharmender Khanna"
            company={company2}
          />
          <AdvisorCard
            image={advisor3}
            name="Kapil Pathak"
            company={company3}
          />
          <AdvisorCard
            image={advisor4}
            name="Mayank Tiwari"
            company={company4}
          />
        </div>
      </div>
    </div>
  );
}
