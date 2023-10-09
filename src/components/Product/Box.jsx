import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import BCss from "./Css/Box.module.css";

export default function Box(props) {
  const [editDesState, setEditDes] = useState("");
  const [edit, setEdit] = useState(false);

  const { id } = useParams();

  const authCtx = useContext(AuthContext);

  return (
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
            onChange={(e) => {
              setEditDes(e.target.value);
            }}
          />

          <button
            onClick={() => {
              changePost("descriptor.short_desc");
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <p className={BCss.value}>{props.value}</p>
      )}
    </div>
  );
}
