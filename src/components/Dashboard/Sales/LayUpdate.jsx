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

export default function LayUpdate(props) {
  const [edit, setEdit] = useState(false);
  const [Saveload, setSaveLoad] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const authCtx = useContext(AuthContext);

  const UpdateData = async (id, ItemId) => {
    setSaveLoad(true);
    try {
      if (selectedValue !== "" || selectedValue !== "Select") {
        let data = {
          value: selectedValue,
          ItemId,
          Id: id,
        };

        const response = await axios.post(
          "/api/common/Order/UpdateStateItem",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        if (response.data.success) {
          setSaveLoad(false);
          setSelectedValue("Select");

          props.setEdit(false);
          props.setLoadDataState(!props.loadDataState);

          setEdit(!edit);
        } else {
          setSaveLoad(false);
        }
      } else {
        setSaveLoad(false);
      }
    } catch (e) {
      setSaveLoad(false);

      console.log(e);
    }
  };

  const handleSelectChange = (event) => {
    if (props.state !== "Cancelled") {
      setSelectedValue(event.target.value);
    } else {
      console.log("cant");
    }
  };

  return (
    <>
      <td
        data-cell="Status"
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
      >
        {edit ? (
          <>
            {props.code >= 5 && props.code <= 7 && (
              <select
                name=""
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <option value="Select" selected hidden>
                  Select the Updated Status
                </option>
                <option value="RTO-Initiated">RTO-Initiated</option>
                <option value="RTO-Disposed">RTO-Disposed</option>
                <option value="RTO-Delivered">RTO-Delivered</option>
              </select>
            )}

            {props.code >= 0 && props.code <= 3 && (
              <>
                <select
                  name=""
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option value="Select" selected hidden>
                    Select the Updated Status
                  </option>
                  <option value="Accepted">Accepted</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </>
            )}

            {props.code >= 8 && props.code <= 14 && (
              <>
                <select
                  name=""
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option value="Select" selected hidden>
                    Select the Updated Status
                  </option>
                  <option value="Return_Initiated">Return_Initiated</option>
                  <option value="Return_Approved">Return_Approved</option>
                  <option value="Return_Pick_Failed">Return_Pick_Failed</option>
                  <option value="Return_Picked">Return_Picked</option>
                  <option value="Return_Delivered">Return_Delivered</option>
                  <option value="Return_Failed">Return_Failed</option>
                  <option value="Return_Rejected">Return_Rejected</option>
                </select>
              </>
            )}
          </>
        ) : (
          <>{props.state}</>
        )}

        {edit ? (
          <>
            {Saveload ? (
              <SmallLoad />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={osCss.lucidePencil}
                  onClick={() => {
                    if (props.state !== "Cancelled") {
                      UpdateData(props.id, props.ItemID);
                    } else {
                      authCtx.showAlert({
                        mainColor: "#FDEDED",
                        secondaryColor: "#F16360",
                        symbol: "error",
                        title: "Error",
                        text: "Once Order Is Cancelled, It Cannot Change Status",
                      });
                    }
                  }}
                >
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={osCss.lucideCancel}
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.9 4.9 14.2 14.2" />
                </svg>
              </>
            )}
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            // class="lucide lucide-pencil"
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
