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
  const [Saveload, setSaveLoad] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const authCtx = useContext(AuthContext);

  const UpdateData = async (id) => {
    setSaveLoad(true);
    try {
      if (selectedValue !== "" || selectedValue !== "Select") {
        let data = {
          value: selectedValue,
          Id: id,
        };

        const response = await axios.post(
          "/api/common/Order/UpdateState",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        if (response.data.success) {
          setSaveLoad(false);
          setSelectedValue("Select");

          props.setLoadDataState(!props.loadDataState);

          setEdit(!edit);
        } else {
          setSaveLoad(false);
        }
      } else {
        setSaveLoad(false);
      }
    } catch (e) {
      setLoad(false);
      setSaveLoad(false);

      console.log(e);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
        {/* {edit ? ( */}
        {/* // <>
          //   <select name="" value={selectedValue} onChange={handleSelectChange}>
          //     <option value="Select" selected hidden>
          //       Select the Updated Status
          //     </option>
          //     <option value="Accepted">Accepted</option>
          //     <option value="In-progress">In-progress</option>
          //     <option value="Completed">Completed</option>
          //     <option value="Cancelled">Cancelled</option>
          //   </select>
          // </>
        // ) : ( */}
        <>{props.state}</>
        {/* )} */}

        {edit ? (
          <OrderLayUpdate setEdit={setEdit} id={props.id} state={props.state} />
        ) : (
          // <>
          //   {Saveload ? (
          //     <SmallLoad />
          //   ) : (
          //     <>
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         width="16"
          //         height="16"
          //         viewBox="0 0 24 24"
          //         fill="none"
          //         stroke="currentColor"
          //         stroke-width="2"
          //         stroke-linecap="round"
          //         stroke-linejoin="round"
          //         class="lucide lucide-save"
          //         className={osCss.lucidePencil}
          //         onClick={() => {
          //           UpdateData(props.id);
          //         }}
          //       >
          //         <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          //         <polyline points="17 21 17 13 7 13 7 21" />
          //         <polyline points="7 3 7 8 15 8" />
          //       </svg>
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         width="16"
          //         height="16"
          //         viewBox="0 0 24 24"
          //         fill="none"
          //         stroke="currentColor"
          //         stroke-width="2"
          //         stroke-linecap="round"
          //         stroke-linejoin="round"
          //         class="lucide lucide-ban"
          //         className={osCss.lucideCancel}
          //         onClick={() => {
          //           setEdit(!edit);
          //         }}
          //       >
          //         <circle cx="12" cy="12" r="10" />
          //         <path d="m4.9 4.9 14.2 14.2" />
          //       </svg>
          //     </>
          //   )}
          // </>
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
