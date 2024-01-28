import React, { useState, useEffect, useContext } from "react";

// components
import PaymentTable from "./../Dashboard/PayDetails/PaymentTable";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";
import { Alert } from "./../../MicroInteraction/Alert";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

export default function Payment() {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState([]);
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

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PaymentTable showData={showData} />

      <Alert variant={variants} val={setError} />
    </>
  );
}
