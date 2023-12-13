import React, { useState } from "react";

// components
import Load from "./../../../MicroInteraction/Load";
import { Alert } from "./../../../MicroInteraction/Alert";

// css
import "./Css/common.css";
import SDCss from "./Css/SellersDetails.module.css";

export default function SellersDetails(props) {
  const [showVer, setVer] = useState(false);

  const saveVer = async () => {
    // setVer(false);

    console.log("first");
  };

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

        <div className={SDCss.rowDiv}>
          <div className={SDCss.sellerdelDiv}>
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

          <div className={SDCss.verDiv}>
            {props.show.val.accountVerified ? (
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
                class="lucide lucide-shield-check"
                className={SDCss.ver}
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              <>
                {showVer ? (
                  <>
                    <div class="checkbox-wrapper-3">
                      <input type="checkbox" id="cbx-3" onClick={saveVer} />
                      <label for="cbx-3" class="toggle">
                        <span></span>
                      </label>
                    </div>
                  </>
                ) : (
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
                    class="lucide lucide-badge-help"
                    className={SDCss.notVer}
                    onClick={() => {
                      setVer(true);
                    }}
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" x2="12.01" y1="17" y2="17" />
                  </svg>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
