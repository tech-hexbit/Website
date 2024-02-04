import React, { useState, useEffect, useContext } from "react";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";
import { Alert } from "./../../MicroInteraction/Alert";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// components
import PaymentList from "./PayDetails/PaymentList";
import PaymentTable from "./PayDetails/PaymentTable";

// css
import Gate from "./../Dashboard/PayDetails/Css/PayDetails.module.css";

export default function PayDetails() {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState([]);
  const [showlist, setList] = useState({
    payment: 0,
    Amount: 0,
    Rejected: 0,
    transactions: {
      completed: 0,
      raised: 0,
      pending: 0,
    },
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

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        "/api/common/Payment/Order/Request/List",
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        console.log(response.data);

        setData(response.data.reqList);
        setList(response.data.listData);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });

      console.log(e);
    }
  };

  // scroll to top
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className={Gate.main}>
        <PaymentList showlist={showlist} />
        <PaymentTable showData={showData} />
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
