import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// MicroInteraction
import { Alert } from "./../../MicroInteraction/Alert";

// css
import DCss from "./Css/Des.module.css";

export default function UpdateLabel(props) {
  const [editDesState, setEditDes] = useState({ state: false, val: "" });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const changePost = async (value) => {
    setEdit(false);

    try {
      const input = {
        fieldName: value,
        changedValue: editDesState.val,
        itemID: props.id,
      };

      const response = await axios.post(
        "/api/common/product/EditProduct",
        input,
        {
          headers: {
            Authorization: `${authCtx.token}`,
          },
        }
      );

      if (response.data.success) {
        props.setChange(true);

        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Updated",
          val: true,
        });
      } else {
        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Update Failed",
          val: true,
        });
      }
    } catch (e) {
      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Poduct Addition Failed",
        val: true,
      });

      console.log(e);
    }
  };

  useEffect(() => {
    console.log(editDesState);
  }, [editDesState]);

  return (
    <div className={DCss.upLablemDiv}>
      <span className={DCss.desName}>{props.crrValue}</span>
      <span className={DCss.editBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-pencil"
          onClick={() => {
            setEditDes({ state: !editDesState.state });
          }}
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      </span>
    </div>
  );
}
