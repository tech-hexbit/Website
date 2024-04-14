import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// state
import AuthContext from "../../../store/auth-context";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function DeleteBankInfo({ id, loadBankDetails }) {
  const [load, setLoad] = useState(false);

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

      if (response.data.success) {
        setLoad(false);

        loadBankDetails();

        authCtx.showAlert({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Deleted",
        });
      } else {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to delete",
        });
      }
    } catch (e) {
      setLoad(false);

      console.log("Error fetching bank details", e);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
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
    </div>
  );
}

DeleteBankInfo.propTypes = {
  id: PropTypes.string.isRequired,
  loadBankDetails: PropTypes.func.isRequired,
};
