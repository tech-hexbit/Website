import React, { useState, useEffect, useContext } from "react";

// MicroInteraction
import Load from "./../../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../../store/auth-context";

// axios
import axios from "axios";

// css
import odcss from "./../../Css/Orderdetails.module.css";

export default function Logistics({
  res,
  _id,
  setLoadDataState,
  loadDataState,
}) {
  const [load, setLoad] = useState(false);
  const [showEdit, setEdit] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });
  const [showData, setData] = useState({
    id: "",
    url: "",
    logisticsPatnerName: "",
    currentLocation: "",
    estimatedTATHR: "",
    estimatedTATMINS: "",
    agentName: "",
    agentNumber: "",
    vehicleCategory: "",
    vehicleSize: "",
    vehicleRegistration: "",
  });

  const authCtx = useContext(AuthContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const saveData = async () => {
    setLoad(true);

    if (
      showData.id === "" ||
      showData.currentLocation === "" ||
      showData.currentLocation === "" ||
      showData.estimatedTATHR === "" ||
      showData.estimatedTATMINS === ""
    ) {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please fill all the feilds",
        val: true,
      });
      return;
    } else {
      let data = { ...showData, _id };

      try {
        const response = await axios.post(
          "/api/common/order/save/logistics",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        if (response.data.success) {
          setLoad(false);

          setEdit(!showEdit);

          setLoadDataState(!loadDataState);

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Successfully Added",
            val: true,
          });
          console.log(response.data);
        } else {
          setLoad(false);

          setError({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "Unable to add",
            val: true,
          });
        }
      } catch (error) {
        console.log(error);

        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to add",
          val: true,
        });
      }
    }
  };

  return (
    <>
      <div className={odcss.overlapGroup}>
        <div className={odcss.textWrapper}>
          {res.logistics.id === "" ? "Logistics details" : "Logistics Info"}
          <span className={odcss.editIconSpan}>
            {showEdit ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-pencil"
                className={odcss.editIcon}
                onClick={() => {
                  setEdit(!showEdit);
                }}
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            )}
          </span>
        </div>

        {showEdit ? (
          <div className={odcss.formDiv}>
            {/* Traking ID */}
            <div>
              <label for="TrakingID" className={odcss.labelCl}>
                Traking ID
              </label>
              <input
                type="text"
                name="id"
                id="TrakingID"
                placeholder="58405917356"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Traking URL */}
            <div>
              <label for="TrakingURL" className={odcss.labelCl}>
                Traking URL
              </label>
              <input
                type="text"
                name="url"
                id="TrakingURL"
                placeholder="https://abcLogistic.com"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Logistics Patner Name */}
            <div>
              <label for="LogisticsPatner" className={odcss.labelCl}>
                Logistics Patner Name
              </label>
              <input
                type="text"
                name="logisticsPatnerName"
                id="LogisticsPatner"
                placeholder="Blue Dart"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Current Location */}
            <div>
              <label for="Location" className={odcss.labelCl}>
                Current Location
              </label>
              <input
                type="text"
                name="currentLocation"
                id="Location"
                placeholder="Abc, City"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/*  Estimated Time to Delivery */}
            <div>
              <label for="EstimatedTime" className={odcss.labelCl}>
                Estimated Time to Delivery
              </label>

              {/*Hr */}
              <input
                type="text"
                name="estimatedTATHR"
                id="EstimatedTime"
                placeholder="15 Hr"
                className={odcss.inpTag}
                onChange={handleChange}
              />

              {/* Min */}
              <input
                type="text"
                name="estimatedTATMINS"
                id=""
                placeholder="25 Mins"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/*  Agent Name */}
            <div>
              <label for="AgentName" className={odcss.labelCl}>
                Agent Name
              </label>
              <input
                type="text"
                name="agentName"
                id="AgentName"
                placeholder="Ramu"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Agent Number */}
            <div>
              <label for="AgentNumber" className={odcss.labelCl}>
                Agent Number
              </label>
              <input
                type="number"
                name="agentNumber"
                id="AgentNumber"
                placeholder="98XXXXXXXX60"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Vehicle Category */}
            <div>
              <label for="VehicleCategory" className={odcss.labelCl}>
                Vehicle Category
              </label>
              <input
                type="text"
                name="vehicleCategory"
                id="VehicleCategory"
                placeholder="mini-truck"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Vehicle Size */}
            <div>
              <label for="VehicleSize" className={odcss.labelCl}>
                Vehicle Size
              </label>
              <input
                type="text"
                name="vehicleSize"
                id="VehicleSize"
                placeholder="small"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Vehicle Registration */}
            <div>
              <label for="VehicleRegistration" className={odcss.labelCl}>
                Vehicle Registration
              </label>
              <input
                type="text"
                name="vehicleRegistration"
                id="VehicleRegistration"
                placeholder="2020"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            <button onClick={saveData} className={odcss.saveBtn}>
              {load ? <Load /> : "Save"}
            </button>
          </div>
        ) : (
          <>
            {res.logistics.id === "" ? (
              <>
                <p className={odcss.AddLogistics}>Add Logistics Info</p>
              </>
            ) : (
              <div className={odcss.logInfoStyle}>
                <div className={odcss.logInfopTag}>
                  <p>ID:</p> <p>{res.logistics.id}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>URL:</p> <p>{res.logistics.url}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>Logistics Patner:</p>
                  <p>{res.logistics.logisticsPatnerName}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>Current Location:</p>
                  <p>{res.logistics.currentLocation}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>Estimated Time to Delivery:</p>
                  <p>{res.logistics.estimatedTAT}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>Agent Name:</p>
                  <p>{res.logistics.agent.name}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>Agent Number:</p>
                  <p>{res.logistics.agent.number}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>Vehicle Category:</p>
                  <p>{res.logistics.vehicle.category}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>Vehicle Size:</p> <p>{res.logistics.vehicle.size}</p>
                </div>

                <div className={odcss.logInfopTag}>
                  <p>Vehicle Registration:</p>
                  <p>{res.logistics.vehicle.registration}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
