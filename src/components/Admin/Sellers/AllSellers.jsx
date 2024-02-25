import React, { useState, useEffect } from "react";

// components
import SellersDetails from "./SellersDetails";
import SellerDetail from "./Seller Main/SellerDetail";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import SelCss from "./../Css/Sellers.module.css";

export default function AllSellers(props) {
  console.log("porp", props);
  const [show, hide] = useState({ state: false, val: "" });

  return (
    <>
      {show ? (
        <SellerDetail hide={hide} show={show} setLoad={props.setLoad} />
      ) : (
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
                          <div className={SelCss.Verifyingicons}>
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
                          </div>
                          <div className={SelCss.Datas}>
                            <div className={SelCss.conDelT}>
                              <p>
                                StoreID :{" "}
                                <strong>{val.Store[0]?.StoreID} </strong>
                              </p>
                              <p>
                                {" "}
                                <div className={SelCss.labelDiv}>
                                  <p>Business Name : </p>
                                </div>{" "}
                                {val.BusinessName}
                              </p>
                              <p>
                                {" "}
                                <div className={SelCss.labelDiv}>
                                  <p>GST : </p>
                                </div>{" "}
                                {val.GSTIN}
                              </p>
                            </div>

                            <div className={SelCss.conDel}>
                              <p>
                                {" "}
                                <div className={SelCss.labelDiv}>
                                  <p>Phone : </p>
                                </div>{" "}
                                {val.Phone}
                              </p>
                              <p>
                                {" "}
                                <div className={SelCss.labelDiv}>
                                  <p>Email : </p>
                                </div>{" "}
                                {val.Email}
                              </p>
                              <p>
                                {" "}
                                <div className={SelCss.labelDiv}>
                                  <p>Shop Name : </p>
                                </div>{" "}
                                {val.ShopName}
                              </p>
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
        </>
      )}
    </>
  );
}
