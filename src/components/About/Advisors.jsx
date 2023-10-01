import React from "react";

import AdvisorCard from "./AdvisorCard";
import MissionBlur from "./Blur/MissionBlur";
// Css
import ACss from "./Css/Advisors.module.css";

//images
import advisor1 from "./../../assets/AboutUS/advisors/advisor1.png";
import advisor2 from "./../../assets/AboutUS/advisors/advisor2.png";
import advisor3 from "./../../assets/AboutUS/advisors/advisor3.png";
import advisor4 from "./../../assets/AboutUS/advisors/advisor4.png";
import company1 from "./../../assets/AboutUS/advisors/advisor1company.png";
import company2 from "./../../assets/AboutUS/advisors/advisor2company.png";
import company3 from "./../../assets/AboutUS/advisors/advisor3company.png";
import company4 from "./../../assets/AboutUS/advisors/advisor4company.png";

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
            blur="L6FrS10N00~U00t6P;R53Z}?00Nb"
            name="Badrinath Mishra"
            company={company1}
          />
          <AdvisorCard
            image={advisor2}
            blur="LWI5c8R*x]s:_4ogRjRP00oL8^kC"
            name="Dharmender Khanna"
            company={company2}
          />
          <AdvisorCard
            image={advisor4}
            blur="LWCsmz9FRj%M_4IURi%MRPxuM{xu"
            name="Mayank Tiwari"
            company={company4}
          />
        </div>
      </div>
    </div>
  );
}
