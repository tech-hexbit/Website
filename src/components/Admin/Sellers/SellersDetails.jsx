import React from "react";

// css
import SDCss from "./Css/SellersDetails.module.css";

export default function SellersDetails(props) {
  return (
    <div className={SDCss.mDiv}>
      <div className={SDCss.titleDiv}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-left"
          className={SDCss.leftArrow}
          onClick={() => {
            props.hide(false);
          }}
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
        SellersDetails
      </div>

      <div className={SDCss.infoDiv}>
        <p>
          <b>Info</b>
        </p>

        <div>
          <p>
            Business Name: <span>{props.show.val.BusinessName}</span>
          </p>
          <p>
            Email: <span>{props.show.val.Email}</span>
          </p>
          <p>
            Phone Number: <span>+91 {props.show.val.Phone}</span>
          </p>
          <p>
            Importer License: <span>{props.show.val.ImporterLicense}</span>
          </p>
          <p>
            GSTIN: <span>{props.show.val.GSTIN}</span>
          </p>
          <p>
            ShopName: <span>{props.show.val.ShopName}</span>
          </p>
          <p>
            Address: <span>{props.show.val.Address}</span>
          </p>
          <p>
            State: <span>{props.show.val.State}</span>
          </p>
          <p>
            City: <span>{props.show.val.City}</span>
          </p>
          <p>
            Pincode: <span>{props.show.val.Pincode}</span>
          </p>

          <p>
            Additional Info: <span>{props.show.val.AdditionalInfo}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
