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

  // console.log(res.state);

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
            <label>Traking ID</label>
            <input
              type="text"
              name="id"
              id=""
              placeholder="58405917356"
              onChange={handleChange}
            />
            <br />
            <label>Traking URL</label>
            <input
              type="text"
              name="url"
              id=""
              placeholder="https://abcLogistic.com"
              onChange={handleChange}
            />
            <br />
            <label>Logistics Patner Name</label>
            <input
              type="text"
              name="logisticsPatnerName"
              id=""
              placeholder="Blue Dart"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="">Current Location</label>
            <input
              type="text"
              name="currentLocation"
              id=""
              placeholder="Abc, City"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="">Estimated Time to Delivery</label>
            <input
              type="text"
              name="estimatedTATHR"
              id=""
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
            <label htmlFor="">Agent Name</label>
            <input
              type="text"
              name="agentName"
              id=""
              placeholder="Ramu"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="">Agent Number</label>
            <input
              type="number"
              name="agentNumber"
              id=""
              placeholder="98XXXXXXXX60"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="">Vehicle Category</label>
            <input
              type="text"
              name="vehicleCategory"
              id=""
              placeholder="mini-truck"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="">Vehicle Size</label>
            <input
              type="text"
              name="vehicleSize"
              id=""
              placeholder="small"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="">Vehicle Registration</label>
            <input
              type="text"
              name="vehicleRegistration"
              id=""
              placeholder="2020"
              onChange={handleChange}
            />

            <br />
            <br />

            <button onClick={saveData}>Save</button>
          </>
        ) : (
          <>
            <div className={odcss.logisticImg}>
              <img
                src="https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="logistic_Img"
                className={odcss.LogisticsGif}
              />
            </div>

            <div className={odcss["text-l"]}>
              <div className={odcss.name}>
                <div className={odcss.div}>
                  {res.state === "Created" || res.state === "In-progress" ? (
                    <>Soon To be Alloted</>
                  ) : (
                    <>Details of logistics</>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
