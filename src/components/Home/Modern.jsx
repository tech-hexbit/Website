import React from "react";

// img
import phone from "../../assets/phone.png";
import Group23 from "./../../assets/Group 23.png";
import Android from "./../../assets/Group 114.png";
import Appstore from "./../../assets/Appstore.png";

// css
import MCss from "./Css/Modern.module.css";

export default function Modern() {
  return (
    <div className={MCss.mDiv}>
      <div className={MCss.contentDiv}>
        <p className={MCss.DigitalOcean}>Sellers Solution</p>
        <p className={MCss.Headline}>Start Selling Faster, Growing Faster.</p>
        <p className={MCss.Nowadays}>
          An Application With All The Features A seller Needs. <br />
          Available For Free On Google Appstore & Play Store.
        </p>
        <div className={MCss.downloadImages}>
          <img src={Android} alt="Android" className={MCss.storeImg} />
          <img src={Appstore} alt="Appstore" className={MCss.storeImg} />
        </div>
      </div>
      <div className={MCss.mobilImg}>
        <img src={phone} alt="" />
      </div>
    </div>
  );
}
