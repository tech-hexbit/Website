import React from "react";

// css
import odcss from "./../../Css/Orderdetails.module.css";

// img
import LogisticsGif from "./../../../../assets/Logistic/Logistics.gif";

export default function Logistics({ res }) {
  // console.log(res.state);
  return (
    <>
      <div className={odcss["overlap-group"]}>
        <div className={odcss["text-wrapper"]}>Logistics details</div>
        <div className={odcss["logistic-img"]}>
          <img src={LogisticsGif} alt="" className={odcss.LogisticsGif} />
        </div>

        <div className={odcss["text-l"]}>
          <div className={odcss.name}>
            <div className={odcss.div}>
              {res.state === "Created" || res.state === "In-progress" ? (
                <>Soon To be Alloted</>
              ) : (
                <>Details of logistics</>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
