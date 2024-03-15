import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/Load";
import { Alert } from "./../MicroInteraction/Alert";

// axios
import axios from "axios";

// cashfree
import { load } from "@cashfreepayments/cashfree-js";

// css
import ChCss from "./Css/CashFree.module.css";

export default function Cashfree({ selectedItem, setreload, reload }) {
  const [loadState, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

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

      if (response.success) {
        setLoad(false);

        setreload(!reload);
      }
    } catch (error) {
      console.log(error);

      setLoad(false);
    }
  };

  useEffect(() => {
    console.log(selectedItem[0].cashfree.beneId);
  }, [selectedItem]);

  return (
    <>
      {selectedItem.length > 0 ? (
        <>
          {selectedItem[0].cashfree.beneId === "" ? (
            ""
          ) : (
            <>
              <p>Remove Beneficiary</p>
            </>
          )}

          <div className={ChCss.mDiv}>
            <button onClick={getSessionId} className={ChCss.PayNowBtn}>
              {loadState ? <Load /> : "Pay Now"}
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
