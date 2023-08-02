import React from "react";

import TeamCss from "./Css/Founders.module.css";

import Title from "../Home/Title";
import TeamMemCard from "./TeamMemCard";

import image1 from "../../assets/AboutUs/Team/AnujPrakash.png";
import image2 from "../../assets/AboutUs/Team/TathagatChoudhary.png";

export default function Team() {
  return (
    <div className={TeamCss.mainDiv}>
      <Title title="Our Team" />
      <div className={TeamCss.gridDiv}>
        <TeamMemCard
          image={image1}
          name="Anuj Prakash"
          designation="CEO & Co-founder"
        />
        <TeamMemCard
          image={image2}
          name="Tathagat Choudhary"
          designation="COO & Co-founder"
        />
      </div>
    </div>
  );
}
