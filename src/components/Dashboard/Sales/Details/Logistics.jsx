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
        <div className={odcss["text-wrapper"]}>
          Logistics details
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-pencil"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </span>
        </div>
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
