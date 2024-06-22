import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types"

// MicroInteraction
import Load from "./../../../../MicroInteraction/LoadBlack";

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
  setIsLogisticsFormFilled
}) {
  const [load, setLoad] = useState(false);
  const [showEdit, setEdit] = useState(false);
  const [showData, setData] = useState({
    id: res?.logistics?.id ?? "",
    url: res?.logistics?.url ?? "",
    logisticsPatnerName: res?.logistics?.logisticsPatnerName ?? "",
    currentLocation: res?.logistics?.currentLocation ?? "",
    estimatedTATHR: res?.logistics?.estimatedTATHR ?? "",
    estimatedTATMINS: res?.logistics?.estimatedTATMINS ?? "",
    agentName: res?.logistics?.agent?.name ?? "",
    agentNumber: res?.logistics?.agent?.number ?? "",
    vehicleCategory: res?.logistics?.vehicle?.category ?? "",
    vehicleSize: res?.logistics?.vehicle?.size ?? "",
    vehicleRegistration: res?.logistics?.vehicle?.registration ?? "",
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

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please fill all the feilds",
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

          authCtx.showAlert({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Successfully Added",
          });
          console.log(response.data);
        } else {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "Unable to add",
          });
        }
      } catch (error) {
        console.log(error);

        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to add",
        });
      }
    }
  };

  useEffect(() => {
    if(res.logistics.id){
      setIsLogisticsFormFilled(true);
    }
  }, [res.logistics.id, setIsLogisticsFormFilled])

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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ban"
                onClick={() => {
                  setEdit(!showEdit);
                }}
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                // class="lucide lucide-pencil"
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
              <label htmlFor="TrakingID" className={odcss.labelCl}>
                Traking ID
              </label>
              <input
                type="text"
                name="id"
                id="TrakingID"
                value={showData.id}
                placeholder="58405917356"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Tracking URL */}
            <div>
              <label htmlFor="TrakingURL" className={odcss.labelCl}>
                Traking URL
              </label>
              <input
                type="text"
                name="url"
                id="TrakingURL"
                placeholder="https://abcLogistic.com"
                value={showData.url}
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Logistics Patner Name */}
            <div>
              <label htmlFor="LogisticsPatner" className={odcss.labelCl}>
                Logistics Patner Name
              </label>
              <input
                type="text"
                name="logisticsPatnerName"
                id="LogisticsPatner"
                placeholder="Blue Dart"
                className={odcss.inpTag}
                onChange={handleChange}
                value={showData.logisticsPatnerName}
              />
            </div>

            {/* Current Location */}
            <div>
              <label htmlFor="Location" className={odcss.labelCl}>
                Current Location
              </label>
              <input
                type="text"
                name="currentLocation"
                id="Location"
                placeholder="Abc, City"
                className={odcss.inpTag}
                value={showData.currentLocation}
                onChange={handleChange}
              />
            </div>

            {/*  Estimated Time to Delivery */}
            <div>
              <label htmlFor="EstimatedTime" className={odcss.labelCl}>
                Estimated Time to Delivery
              </label>

              {/*Hr */}
              <input
                type="text"
                name="estimatedTATHR"
                id="EstimatedTime"
                placeholder="15 Hr"
                value={showData.estimatedTATHR}
                className={odcss.inpTag}
                onChange={handleChange}
              />

              {/* Min */}
              <input
                type="text"
                name="estimatedTATMINS"
                id=""
                placeholder="25 Mins"
                value={showData.estimatedTATMINS}
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/*  Agent Name */}
            <div>
              <label htmlFor="AgentName" className={odcss.labelCl}>
                Agent Name
              </label>
              <input
                type="text"
                name="agentName"
                id="AgentName"
                placeholder="Ramu"
                value={showData.agentName}
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Agent Number */}
            <div>
              <label htmlFor="AgentNumber" className={odcss.labelCl}>
                Agent Number
              </label>
              <input
                type="number"
                name="agentNumber"
                id="AgentNumber"
                placeholder="98XXXXXXXX60"
                value={showData.agentNumber}
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Vehicle Category */}
            <div>
              <label htmlFor="VehicleCategory" className={odcss.labelCl}>
                Vehicle Category
              </label>
              <input
                type="text"
                name="vehicleCategory"
                id="VehicleCategory"
                value={showData.vehicleCategory}
                placeholder="mini-truck"
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Vehicle Size */}
            <div>
              <label htmlFor="VehicleSize" className={odcss.labelCl}>
                Vehicle Size
              </label>
              <input
                type="text"
                name="vehicleSize"
                id="VehicleSize"
                placeholder="small"
                value={showData.vehicleSize}
                className={odcss.inpTag}
                onChange={handleChange}
              />
            </div>

            {/* Vehicle Registration */}
            <div>
              <label htmlFor="VehicleRegistration" className={odcss.labelCl}>
                Vehicle Registration
              </label>
              <input
                type="text"
                name="vehicleRegistration"
                id="VehicleRegistration"
                placeholder="2020"
                value={showData.vehicleRegistration}
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
    </>
  );
}

Logistics.propTypes = {
  res: PropTypes.object.isRequired,
  _id: PropTypes.string.isRequired,
  setLoadDataState: PropTypes.func.isRequired,
  loadDataState: PropTypes.bool.isRequired,
  setIsLogisticsFormFilled: PropTypes.bool.isRequired
}