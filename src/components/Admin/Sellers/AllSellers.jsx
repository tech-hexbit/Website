import React, { useState, useEffect } from "react";

// components
import SellersDetails from "./SellersDetails";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import SelCss from "./../Css/Sellers.module.css";

export default function AllSellers(props) {
  const [show, hide] = useState({ state: false, val: "" });

  return (
    <>
      <div className={SelCss.mDiv}>
        {props.load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <>
            {props.data ? (
              <>
                {props.data.map((val, key) => {
                  return (
                    <div
                      key={key}
                      className={SelCss.mapMDiv}
                      onClick={() => {
                        hide({ state: true, val: val });
                      }}
                    >
                      <div className={SelCss.conDelT}>
                        <p>
                          StoreID : <strong>{val.Store[0]?.StoreID} </strong>
                        </p>
                        <p>{val.BusinessName}</p>
                        <p>{val.GSTIN}</p>
                      </div>

                      <div className={SelCss.conDel}>
                        <>
                          {val.accountVerified ? (
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
                              class="lucide lucide-check-circle"
                              className={SelCss.statusIcons}
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <path d="m9 11 3 3L22 4" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 60 60"
                              fill="none"
                              stroke="#FF3D00"
                              stroke-width="2.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-badge-info"
                              className={SelCss.statusIcons}
                            >
                              <path d="M30 30V18.75M30 38.3386V38.4375M52.5 30C52.5 42.4264 42.4264 52.5 30 52.5C17.5736 52.5 7.5 42.4264 7.5 30C7.5 17.5736 17.5736 7.5 30 7.5C42.4264 7.5 52.5 17.5736 52.5 30Z" />
                            </svg>
                          )}
                        </>
                        <div className={SelCss.LeftData}>
                          <p>{val.Phone}</p>
                          <p>{val.Email}</p>
                          <p>{val.Phone}</p>
                          {/* <p>Seller since : </p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>

      <div className={show.state ? "yesProductsPage" : "noProductsPage"}>
        {show ? (
          <SellersDetails hide={hide} show={show} setLoad={props.setLoad} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
