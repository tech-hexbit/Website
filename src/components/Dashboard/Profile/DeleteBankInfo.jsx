import React, { useEffect, useState, useContext } from "react";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../store/auth-context";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function DeleteBankInfo({ id }) {
  const [load, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const deleteData = async () => {
    setLoad(true);

    try {
      console.log("Delete - " + id);

      let data = {
        id,
      };

      const response = await axios.post(
        "/api/common/bank/BankInfo/Delete",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      console.log(response.data);

      if (response.data.success) {
        setLoad(false);
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      console.log("Error fetching bank details", e);

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

  return (
    <div className={PICss.delteIcon}>
      {load ? (
        <Load />
      ) : (
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
          class="lucide lucide-trash-2"
          className={PICss.delteIconSvg}
          onClick={deleteData}
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      )}

      <Alert variant={variants} val={setError} />
    </div>
  );
}
