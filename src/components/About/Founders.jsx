import React from "react";

import TeamCss from "./Css/Founders.module.css";

import Title from "../Home/Title";
import TeamMemCard from "./TeamMemCard";

// img
import image1 from "../../assets/AboutUS/Team/AnujPrakash.png";
import image2 from "../../assets/AboutUS/Team/TathagatChoudhary.png";
import Timg1 from "./../../assets/AboutUS/Team/tathagatgr1.png";
import Aimg1 from "./../../assets/AboutUS/Team/anujgr1.png";
import Aimg2 from "./../../assets/AboutUS/Team/tathagatgr2.png";

export default function Team() {
  return (
    <div className={TeamCss.mainDiv}>
      <Title title="Our Team" />
      <div className={TeamCss.gridDiv}>
        <TeamMemCard
          image={image1}
          name="Anuj Prakash"
          designation="CEO & Co-founder"
          img1={Aimg1}
          img2={Aimg2}
        />
        <TeamMemCard
          image={image2}
          name="Tathagat Choudhary"
          designation="COO & Co-founder"
          img1={Timg1}
          img2={Aimg2}
        />
      </div>
    </div>
  );
}
