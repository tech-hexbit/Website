import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// Css
import OLCss from "./Css/OrderLayUpdate.module.css";

export default function RToinfo({ setReturn, rtoReturn, res }) {
  const authCtx = useContext(AuthContext);

  const returnRTO = async () => {
    console.log("RTO Request Send");

    try {
      let data = {
        OrderID: res._id,
        BuyerOrderID: res.OrderID,
      };

      const response = await axios.post(
        "/api/common/Order/order/cancel/rto",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);

      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to Update",
      });
    }
  };

  return (
    <div>
      <p onClick={returnRTO}>RTO Info</p>
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
        onClick={() => {
          setReturn(false);
        }}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </div>
  );
}

RToinfo.propTypes = {
  setReturn: PropTypes.func.isRequired,
  rtoReturn: PropTypes.bool.isRequired,
};
