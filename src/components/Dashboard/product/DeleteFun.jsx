import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import DCss from "./Css/display.module.css";

export default function DeleteFun({ id, loadData, code }) {
  const [loadDel, setLoadDel] = useState(false);

  const authCtx = useContext(AuthContext);

  const deleteproduct = async () => {
    setLoadDel(true);

    try {
      const response = await axios.delete(`/api/common/product/delete/${id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.status === 200) {
        setLoadDel(false);

        loadData();
      } else {
        setLoadDel(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to Delete",
        });
      }
    } catch (error) {
      console.log(error);

      setLoadDel(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
    }
  };

  const deleteproductUndo = async () => {
    setLoadDel(true);

    try {
      const response = await axios.delete(
        `/api/common/product/delete/undo/${id}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.status === 200) {
        setLoadDel(false);

        loadData();
      } else {
        setLoadDel(false);

        console.log("error");

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to Add",
        });
      }
    } catch (error) {
      console.log(error);

      setLoadDel(false);

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
    <>
      <div className={DCss.dots}>
        <div
          className={DCss.deleteDiv}
          onClick={() => {
            code === 0 ? deleteproduct() : deleteproductUndo();
          }}
        >
          {loadDel ? (
            <Load />
          ) : (
            <>
              {code === 0 ? (
                <>
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
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </>
              ) : (
                <>
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
                    class="lucide lucide-rotate-ccw"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
