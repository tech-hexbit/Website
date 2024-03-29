import React, { useState } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// components
import OrderLayUpdate from "./OrderLayUpdate";

// Css
import osCss from "./Css/overallSales.module.css";

export default function UpdateState(props) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <td data-cell="DELIVERY STATUS" className={osCss.tdStateBlock}>
        {edit ? (
          <OrderLayUpdate
            setEdit={setEdit}
            id={props.id}
            state={props.state}
            setLoadDataState={props.setLoadDataState}
            loadDataState={props.loadDataState}
          />
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
              class="lucide lucide-external-link"
              className={osCss.lucidePencil}
              onClick={() => {
                setEdit(!edit);
              }}
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
          </>
        )}
      </td>
    </>
  );
}
