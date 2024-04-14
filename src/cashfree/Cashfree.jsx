import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/Load";

// axios
import axios from "axios";

// cashfree
import { load } from "@cashfreepayments/cashfree-js";

// css
import ChCss from "./Css/CashFree.module.css";

export default function Cashfree({ selectedItem, setreload, reload }) {
  const [loadState, setLoad] = useState(false);

  const authCtx = useContext(AuthContext);

  const getSessionId = async (e) => {
    setLoad(true);

    try {
      let data = {
        id: selectedItem[0]._id,
      };

      const response = await axios.post(
        "/api/payment/cashfree/add/Beneficiary",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully",
        });

        setreload(!reload);
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
    }
  };

  const transferStatus = async (e) => {
    setLoad(true);

    try {
      let data = {
        id: selectedItem[0]._id,
      };

      const response = await axios.post(
        "/api/payment/cashfree/tranfer/status",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        setreload(!reload);
      } else {
        setLoad(false);
      }
    } catch (error) {
      console.log(error);

      setLoad(false);
    }
  };

  const remBene = async (e) => {
    setLoad(true);

    try {
      let data = {
        id: selectedItem[0]._id,
        beneId: selectedItem[0].cashfree.beneId,
      };

      const response = await axios.post(
        "/api/payment/cashfree/remove/Beneficiary",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        setreload(!reload);
      } else {
        setLoad(false);
      }
    } catch (error) {
      console.log(error);

      setLoad(false);
    }
  };

  useEffect(() => {
    console.log(selectedItem[0].cashfree);
  }, [selectedItem]);

  return (
    <>
      {selectedItem[0].cashfree.status === "SUCCESS" ? (
        <>Payment Processed</>
      ) : (
        <>
          {selectedItem.length > 0 ? (
            <>
              {selectedItem[0].cashfree.beneId === "" ? (
                ""
              ) : (
                <>
                  <div className={ChCss.mDiv}>
                    <button onClick={remBene} className={ChCss.PayNowBtn}>
                      {loadState ? <Load /> : "Remove Beneficiary"}
                    </button>
                  </div>
                </>
              )}

              {selectedItem[0].cashfree.transferId === "" ? (
                <>
                  <div className={ChCss.mDiv}>
                    <button onClick={getSessionId} className={ChCss.PayNowBtn}>
                      {loadState ? <Load /> : "Pay Now"}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className={ChCss.mDiv}>
                    <button
                      onClick={transferStatus}
                      className={ChCss.PayNowBtn}
                    >
                      {loadState ? <Load /> : "Transfer Status"}
                    </button>
                  </div>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
