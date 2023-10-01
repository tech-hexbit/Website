import React from "react";

import BCss from "./Css/Business.module.css";

// import image from "./../../assets/AboutUS/contactUs.png";
import image from "./../../assets/AboutUS/Imagebusiness.png";
import { Link } from "react-router-dom";
import MissionBlurBusiness from "./Blur/MissionBlurBusiness";
export default function Business() {
  return (
    <div className={BCss.mainDiv}>
      <div className={BCss.businessText}>
        <div className={BCss.head}>Let’s talk, Business! </div>
        <div className={BCss.subHead}>
          You can ask us more questions about our platform , and we will be
          happy to answer you!
        </div>
        <div className={BCss.buttons}>
          <Link to="/contact">
            <button>Contact us</button>
          </Link>
          <Link to="/register">
            <button>Register for free</button>
          </Link>
        </div>
      </div>
      <div className={BCss.image}>
       <MissionBlurBusiness src={image} blur="LCFNB1W-8~w$+V.6xt4oV#M|xp%e"/>
        
      </div>
    </div>
  );
}
