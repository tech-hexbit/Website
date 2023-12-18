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
  const [edit, setEdit] = useState(false);
  const [editDesState, setEditDes] = useState("");
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

    if (editDesState === "") {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    } else {
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
    }
  };

  return (
    <>
      <div className={DCss.upLablemDiv}>
        {edit ? (
          <>
            {props.type === "select" ? (
              <>
                <select name="" id="">
                  <option value="placeholder" selected disabled hidden>
                    {props.placeholder}
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </>
            ) : (
              ""
            )}
            {props.type === "text" ? (
              <>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={props.placeholder}
                  onChange={(e) => {
                    setEditDes(e.target.value);
                  }}
                />
              </>
            ) : (
              ""
            )}

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
              onClick={() => {
                changePost(props.fieldName);
              }}
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </>
        ) : (
          <span className={DCss.desName}>
            {props.type === "select" ? (
              <>{props.crrValue ? "True" : "False"}</>
            ) : (
              ""
            )}
            {props.type === "text" ? <>{props.crrValue}</> : ""}
          </span>
        )}

        <span
          className={DCss.editBtn}
          onClick={() => {
            setEdit(!edit);
          }}
        >
          {edit ? (
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
              class="lucide lucide-ban"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m4.9 4.9 14.2 14.2" />
            </svg>
          ) : (
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
          )}
        </span>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
