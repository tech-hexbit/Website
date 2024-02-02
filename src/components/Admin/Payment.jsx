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
      const response = await axios.get("/api/website/admin/Payment/look", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setData(response.data.reqList);

        setLoad(false);
      } else {
        console.log(e);

        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };

  // scroll to top
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <PaymentTable showData={showData} />

      <Alert variant={variants} val={setError} />
    </>
  );
}
