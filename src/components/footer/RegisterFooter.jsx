import React from "react";
import { Link } from "react-router-dom";

// css
import FCss from "./Css/RegisterFooter.module.css";

import image from "../../assets/RegisterFooter.png";

export default function RegisterFooter() {
  return (
    <div className={FCss.mDiv}>
      <div className={FCss.innerDiv}>
        <div className={FCss.regText}>
          <p className={FCss.topText}>
            Move to an incredibly <br />
            easy to use, <br />
            one-stop-shop platform
          </p>
          <div className={FCss.buttonDiv}>
            <button className={FCss.btnDiv}>
              <Link to="/register" className="LinkStyle">
                Register Now
              </Link>
            </button>
          </div>
        </div>
        <div className={FCss.regImage}>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
