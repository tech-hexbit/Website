import React from "react";

// css
import odcss from "./Css/Orderdetails.module.css";

// img
import LogisticsGif from "./../../assets/Logistic/Logistics.gif";

export default function Logistics() {
  return (
    <>
      <div className={odcss["overlap-group"]}>
        <div className={odcss["text-wrapper"]}>Logistics details</div>
        <div className={odcss["logistic-img"]}>
          <img src={LogisticsGif} alt="" className={odcss.LogisticsGif} />
        </div>
      </div>

      <div className={odcss["text-l"]}>
        <div className={odcss.name}>
          <div className={odcss.div}>Soon To be Alloted</div>
        </div>
      </div>
    </>
  );
}
