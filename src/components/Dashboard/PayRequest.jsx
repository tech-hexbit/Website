import React, { useState, useEffect, useContext, useRef } from "react";

// state
import AuthContext from "./../../store/auth-context";

// components
import PaymentList from "./Payment/PaymentList";
import PaymentTable from "./Payment/PaymentTable";
import PaymentQuote from "./Payment/PaymentQuote";
import SelectedBlock from "./Payment/SelectedBlock";
import PaymentRequest from "./Payment/PaymentRequest";

// axios
import axios from "axios";

// MicroInteraction
import { Alert } from "./../../MicroInteraction/Alert";

// css
import pr from "./Payment/Css/PaymentRequest.module.css";
import Payt from "../Dashboard/Payment/Css/Payment.module.css";

export default function PayRequest() {
  const [load, setLoad] = useState(false);
  const [loadData, setloadData] = useState(false);
  const [showSel, setSel] = useState({
    total: 0,
    amount: 0,
    bank: "",
    order: [],
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const raiseReq = async () => {
    setLoad(true);

    if (showSel.bank === "") {
      setLoad(false);

      setError({
        mainColor: "#E5F6FD",
        secondaryColor: "#1AB1F5",
        symbol: "info",
        title: "Information",
        text: "Select any Bank before proceeding",
        val: true,
      });
      return;
    }

    if (
      showSel.total === 0 ||
      showSel.amount === 0 ||
      showSel.order.length === 0
    ) {
      setLoad(false);

      setError({
        mainColor: "#E5F6FD",
        secondaryColor: "#1AB1F5",
        symbol: "info",
        title: "Information",
        text: "Select any Order before proceeding",
        val: true,
      });
      return;
    }

    try {
      let data = {
        bank: showSel.bank,
        count: showSel.total,
        order: showSel.order,
        amount: showSel.amount,
      };

      const response = await axios.post(
        "/api/common/Payment/Order/Request/Up",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        setloadData(!loadData);

        setSel({
          ...showSel,
          total: 0,
          amount: 0,
          bank: "",
          order: [],
        });
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Invalid Credentials",
        val: true,
      });
    }
  };

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={Payt.main}>
        <PaymentList />
        <PaymentQuote />
        <PaymentTable
          setSel={setSel}
          showSel={showSel}
          loadDataSave={loadData}
        />

        <div className={pr.main}>
          <h3>Confirm Account Details For Payment Request </h3>
          <div className={pr.detailWrapper}>
            <PaymentRequest setSel={setSel} showSel={showSel} />
            <SelectedBlock
              total={showSel.total}
              amount={showSel.amount}
              raiseReq={raiseReq}
              loadState={load}
            />
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
