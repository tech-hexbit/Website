import React from "react";
import { Link } from "react-router-dom";

// css
import FCss from "./Css/RegisterFooter.module.css";

export default function RegisterFooter() {
  return (
    <div className={FCss.mDiv}>
      <p className={FCss.topText}>
        <b>Move to an incredibly easy to use, one-stop-shop platform</b>
      </p>
      <div className={FCss.resDiv}>
        <div className={FCss.innnerDiv}>
          <p className={FCss.bottomText}>
            Get built-in tools to migrate products from your current ecommerce
            platform with minimum involvement
          </p>
          <div className={FCss.btnDiv}>
            <button className={FCss.RegisterBtn}>
              <Link to="/register" className="LinkStyle">
                Register Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
