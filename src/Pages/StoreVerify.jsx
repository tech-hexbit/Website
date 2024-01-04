import React, { useContext, useState, useEffect } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/Load";
import { Alert } from "./../MicroInteraction/Alert";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState({
    gps: "19.114424,72.867943",
    StartTime: "",
    days: "",
    EndTime: "",
    phone: "",
    email: "",
    holidays: "",
    percentage: "",
    radiusValue: "",
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const onSubmit = async () => {
    setLoad(true);

    if (
      showData.StartTime == "" ||
      showData.EndTime == "" ||
      showData.phone == "" ||
      showData.email == "" ||
      showData.holidays == "" ||
      showData.percentage == "" ||
      showData.radiusValue == ""
    ) {
      setLoad(false);

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
        let data = {
          gps: showData.gps,
          days: showData.days,
          times: [],
          phone: showData.phone,
          email: showData.email,
          holidays: [],
          percentage: showData.percentage,
          radiusValue: showData.radiusValue,
          amountValue: showData.amountValue,
        };

        data.times.push(String(showData.StartTime));
        data.times.push(String(showData.EndTime));
        data.holidays = showData.holidays.split(",");

        const response = await axios.post(
          "/api/common/Store/CreateStore",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        if (response.data.success) {
        } else {
          setLoad(false);

          console.log(e);
        }
      } catch (e) {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    }
  };

  return (
    <>
      <div className={SvCss.mDiv}>
        <p className={SvCss.CreateYourStore}>Create Your Store</p>

        <div>
          <div className={SvCss.InpDiv}>
            <p>Days</p>
            <input
              type="text"
              name="days"
              value={showData.days}
              id=""
              placeholder="1,2,3,4,5"
              onChange={(e) => {
                setData({ ...showData, days: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>Times</p>
            <input
              type="number"
              name="StartTime"
              value={showData.StartTime}
              id=""
              placeholder="0900"
              onChange={(e) => {
                setData({ ...showData, StartTime: e.target.value });
              }}
            />

            <input
              type="number"
              name="EndTime"
              value={showData.EndTime}
              id=""
              placeholder="1800"
              onChange={(e) => {
                setData({ ...showData, EndTime: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>Phone</p>
            <input
              type="number"
              name="phone"
              value={showData.phone}
              id=""
              placeholder="+91 99XXXXXX21"
              onChange={(e) => {
                setData({ ...showData, phone: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>email</p>
            <input
              type="email"
              name="email"
              value={showData.email}
              id=""
              placeholder="example@example.com"
              onChange={(e) => {
                setData({ ...showData, email: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>holidays</p>
            <input
              type="text"
              name="holidays"
              value={showData.holidays}
              id=""
              placeholder="2024-02-15"
              onChange={(e) => {
                setData({ ...showData, holidays: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>Percentage</p>
            <input
              type="number"
              name="percentage"
              value={showData.percentage}
              id=""
              placeholder="20"
              onChange={(e) => {
                setData({ ...showData, percentage: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>Radius</p>
            <input
              type="number"
              name="radiusValue"
              value={showData.radiusValue}
              id=""
              placeholder="150"
              onChange={(e) => {
                setData({ ...showData, radiusValue: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>Amount</p>
            <input
              type="number"
              name="amountValue"
              value={showData.amountValue}
              id=""
              placeholder="210"
              onChange={(e) => {
                setData({ ...showData, amountValue: e.target.value });
              }}
            />
          </div>
        </div>

        <button className={SvCss.SubmitBtn} onClick={onSubmit}>
          Submit
        </button>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
