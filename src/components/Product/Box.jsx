import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import BCss from "./Css/Box.module.css";

export default function Box(props) {
  const [editDesState, setEditDes] = useState("");
  const [edit, setEdit] = useState(false);

  const authCtx = useContext(AuthContext);

  const changePost = async (value) => {
    if (editDesState === "") {
      setEdit(false);

      authCtx.showAlert({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
      });

      return;
    }

    setEdit(false);

    try {
      const input = {
        fieldName: value,
        changedValue: editDesState,
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

      console.log(response.data);

      if (response.data.success) {
        props.setChange(true);

        authCtx.showAlert({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Added",
        });
      } else {
        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Poduct Addition Failed",
        });
      }
    } catch (e) {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Poduct Addition Failed",
      });

      console.log(e);
    }
  };

  return (
    <>
      <div className={BCss.mDiv}>
        <p className={BCss.title}>
          {props.title}
          <span
            onClick={() => {
              setEdit(!edit);
            }}
            className={BCss.editBtn}
          >
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
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </span>
        </p>

        {edit ? (
          <>
            <input
              type="number"
              name=""
              id=""
              className={BCss.inpTag}
              placeholder={props.placeholderLabel}
              onChange={(e) => {
                setEditDes(e.target.value);
              }}
            />

            <button
              className={BCss.submitBtn}
              onClick={() => {
                changePost(props.up);
              }}
            >
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
                class="lucide lucide-save"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
            </button>
          </>
        ) : (
          <p className={BCss.value}>{props.value}</p>
        )}
      </div>
    </>
  );
}
