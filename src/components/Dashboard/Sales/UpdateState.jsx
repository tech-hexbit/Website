import React, { useState, useContext } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// components
import OrderLayUpdate from "./OrderLayUpdate";

// axios
import axios from "axios";

// MicroInteraction
import SmallLoad from "./../../../MicroInteraction/SmallLoad";

// Css
import osCss from "./Css/overallSales.module.css";

export default function UpdateState(props) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <td
        data-cell="DELIVERY STATUS"
        style={{
          color:
            props.state == "Created"
              ? "#7925c7"
              : props.state == "Accepted"
              ? "#FEC107"
              : props.state == "In-progress"
              ? "#3F81E0"
              : props.state == "Completed"
              ? "#4bb543"
              : "#D0342C",
        }}
        className={osCss.tdStateBlock}
      >
        <>{props.state}</>

        {edit ? (
          <OrderLayUpdate
            setEdit={setEdit}
            id={props.id}
            state={props.state}
            setLoadDataState={props.setLoadDataState}
            loadDataState={props.loadDataState}
          />
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
            className={osCss.lucidePencil}
            onClick={() => {
              setEdit(!edit);
            }}
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>
        )}
      </td>
    </>
  );
}
