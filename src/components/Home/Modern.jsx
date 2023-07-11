import React from "react";

// img
import Group23 from "./../../assets/Group 23.png";
import Android from "./../../assets/Group 114.png";
import Appstore from "./../../assets/Appstore.png";

// css
import MCss from "./Css/Modern.module.css";

export default function Modern() {
  return (
    <div className={MCss.mDiv}>
      <div className={MCss.contentDiv}>
        <p className={MCss.DigitalOcean}>Digital Ocean</p>
        <p className={MCss.Headline}>
          Headline of Modern and Digital Lending Platform
        </p>
        <p className={MCss.Nowadays}>
          Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital
          lending strategy to streamline the lending process Gorgeous
        </p>
        <div>
          <img src={Android} alt="Android" className={MCss.storeImg} />
          <img src={Appstore} alt="Appstore" className={MCss.storeImg} />
        </div>
      </div>
      <img src={Group23} alt="" className={MCss.mobilImg} />
    </div>
  );
}
