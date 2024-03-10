import React, { useState, useEffect, useContext } from "react";

// MicroInteraction
import Load from "./../../../../MicroInteraction/Load";
import { Alert } from "./../../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../../store/auth-context";

// axios
import axios from "axios";

// css
import odcss from "./../../Css/Orderdetails.module.css";

export default function Logistics({ res, _id }) {
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

      const response = await axios.post(
        "/api/common/order/save/logistics",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      console.log(response.data);
    }
  };

  console.log(res.logistics.id);

  return (
    <>
      <div className={odcss["overlap-group"]}>
        <div className={odcss["text-wrapper"]}>
          Logistics details
          <span className={odcss.editIconSpan}>
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
          </span>
        </div>

        {showEdit ? (
          <>
            <label for="TrakingID">Traking ID</label>
            <input
              type="text"
              name="id"
              id="TrakingID"
              placeholder="58405917356"
              onChange={handleChange}
            />
            <br />
            <label for="TrakingURL">Traking URL</label>
            <input
              type="text"
              name="url"
              id="TrakingURL"
              placeholder="https://abcLogistic.com"
              onChange={handleChange}
            />
            <br />
            <label for="LogisticsPatner">Logistics Patner Name</label>
            <input
              type="text"
              name="logisticsPatnerName"
              id="LogisticsPatner"
              placeholder="Blue Dart"
              onChange={handleChange}
            />
            <br />
            <label for="Location">Current Location</label>
            <input
              type="text"
              name="currentLocation"
              id="Location"
              placeholder="Abc, City"
              onChange={handleChange}
            />
            <br />
            <label for="EstimatedTime">Estimated Time to Delivery</label>
            <input
              type="text"
              name="estimatedTATHR"
              id="EstimatedTime"
              placeholder="15 Hr"
              onChange={handleChange}
            />
            <input
              type="text"
              name="estimatedTATMINS"
              id=""
              placeholder="25 Mins"
              onChange={handleChange}
            />
            <br />
            <label for="AgentName">Agent Name</label>
            <input
              type="text"
              name="agentName"
              id="AgentName"
              placeholder="Ramu"
              onChange={handleChange}
            />
            <br />
            <label for="AgentNumber">Agent Number</label>
            <input
              type="number"
              name="agentNumber"
              id="AgentNumber"
              placeholder="98XXXXXXXX60"
              onChange={handleChange}
            />
            <br />
            <label for="VehicleCategory">Vehicle Category</label>
            <input
              type="text"
              name="vehicleCategory"
              id="VehicleCategory"
              placeholder="mini-truck"
              onChange={handleChange}
            />
            <br />
            <label for="VehicleSize">Vehicle Size</label>
            <input
              type="text"
              name="vehicleSize"
              id="VehicleSize"
              placeholder="small"
              onChange={handleChange}
            />
            <br />
            <label for="VehicleRegistration">Vehicle Registration</label>
            <input
              type="text"
              name="vehicleRegistration"
              id="VehicleRegistration"
              placeholder="2020"
              onChange={handleChange}
            />

            <br />
            <br />

            <button onClick={saveData}>Save</button>
          </>
        ) : (
          <>
            {res.logistics.id === "" ? (
              <>
                <p className={odcss.AddLogistics}>Add Logistics Info</p>
              </>
            ) : (
              <>
                <p>Logistics Info</p>
              </>
            )}
          </>
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
