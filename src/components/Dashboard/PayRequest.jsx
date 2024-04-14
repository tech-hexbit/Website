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
  const [imageUpload, setImageUpload] = useState([]);
  const [showList, setList] = useState({
    transactions: {
      completed: 0,
      raised: 0,
      pending: 0,
    },
  });
  const [showSel, setSel] = useState({
    total: 0,
    amount: 0,
    bank: "",
    order: [],
  });

  const authCtx = useContext(AuthContext);

  const raiseReq = async () => {
    setLoad(true);

    if (imageUpload.length !== showSel.order.length) {
      console.log("Invoice Check");

      setLoad(false);

      authCtx.showAlert({
        mainColor: "#E5F6FD",
        secondaryColor: "#1AB1F5",
        symbol: "info",
        title: "Information",
        text: "Invoice Required",
      });
      return;
    }

    if (showSel.bank === "") {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#E5F6FD",
        secondaryColor: "#1AB1F5",
        symbol: "info",
        title: "Information",
        text: "Select any Bank before proceeding",
      });
      return;
    }

    if (
      showSel.total === 0 ||
      showSel.amount === 0 ||
      showSel.order.length === 0
    ) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#E5F6FD",
        secondaryColor: "#1AB1F5",
        symbol: "info",
        title: "Information",
        text: "Select any Order before proceeding",
      });
      return;
    }

    if (!imageUpload) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please select an Image",
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

      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (imageUpload) {
        for (let i = 0; i < imageUpload.length; i++) {
          formData.append("images", imageUpload[i]);
        }
      }

      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }

      const response = await axios.post(
        "/api/common/Payment/Order/Request/Up",
        formData,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        setloadData(!loadData);
        setImageUpload([]);

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

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to Raise the Request. Try Again",
      });
    }
  };

  return (
    <>
      <div className={Payt.main}>
        <PaymentList showList={showList} />
        <PaymentQuote />
        <PaymentTable
          setSel={setSel}
          showSel={showSel}
          setList={setList}
          loadDataSave={loadData}
          imageUpload={imageUpload}
          setImageUpload={setImageUpload}
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
    </>
  );
}
