import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// Css
import OLCss from "./Css/OrderLayUpdate.module.css";

export default function OrderLayUpdate(props) {
  const [load, setLoad] = useState(false);
  return (
    <>
      <div className={OLCss.mDiv}>
        <div className={OLCss.contendDiv}>
          <p className={OLCss.UpdateOrderPTag}>UPDATE ORDER STATUS</p>

          {/* Close Btn */}
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
            class="lucide lucide-x"
            className={OLCss.closeBtn}
            onClick={() => {
              props.setEdit(false);
            }}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>

          <div className={OLCss.BtnDivMain}>
            <div className={OLCss.BtnDiv} id={OLCss.Accept}>
              Accept
            </div>
            <div className={OLCss.BtnDiv} id={OLCss.InProgress}>
              In-progress
            </div>
            <div className={OLCss.BtnDiv} id={OLCss.Completed}>
              Completed
            </div>
            <div className={OLCss.BtnDiv} id={OLCss.Cancelled}>
              Cancelled
            </div>
          </div>

          <div className={OLCss.ProductDelTableDiv}>
            <p className={OLCss.ProductDelPTag}>Product details</p>

            <div id="wrap" className={OLCss.tableCat}>
              {load ? (
                <div className="loadCenterDiv">
                  <Load />
                </div>
              ) : (
                <>
                  <table
                    className={OLCss.tableCatTTag}
                    style={{ borderCollapse: "collapse" }}
                  ></table>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
