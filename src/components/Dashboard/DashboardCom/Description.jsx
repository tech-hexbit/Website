import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// components
import DesCard from "./DesCard";

// state
import AuthContext from "./../../../store/auth-context";

// css
import DCss from "./css/dashboard.module.css";

export default function Description(props) {
  const [perse, setPer] = useState([]);
  const [orderDel, setOrderDel] = useState({
    totalOrders: 0,
    totalAmount: 0,
    totalNewCustomers: 0,
  });

  useEffect(() => {
    loadData();
    prcentageData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    try {
      const response = await axios.get("/api/website/DashBoard/Data", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        let formattedNumber = formatNumberToIndianSystem(
          response.data.totalOrders
        );

        setOrderDel({
          totalOrders: formattedNumber,
          totalAmount: response.data.totalAmount,
          totalNewCustomers: response.data.totalNewCustomers,
        });
      } else {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const prcentageData = async () => {
    try {
      const response = await axios.get(
        "/api/website/DashBoard/DataPercentage",
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        let letObj = [];

        letObj.push(response.data.changeInOrders);
        letObj.push(response.data.ChangeInCustomer);
        letObj.push(response.data.ChangeInEarnings);

        setPer(letObj);
      } else {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  function formatNumberToIndianSystem(number) {
    const suffixes = [
      "",
      "k",
      "L",
      "Cr",
      "Arab",
      "Kharab",
      "Neel",
      "Padma",
      "Shankh",
    ];

    let suffixIndex = 0;
    while (number >= 1000) {
      number /= 1000;
      suffixIndex++;
    }

    // Use parseInt to remove decimal part if it's .0
    number = parseInt(number) === number ? parseInt(number) : number.toFixed(1);

    // Append the appropriate suffix from the suffixes array
    return number + suffixes[suffixIndex];
  }

  return (
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.profile}>
          <img className={DCss.image} src={authCtx.user.image} alt="" />
          <div className={DCss.des}>
            <div className={DCss.name}>Hello, {authCtx.user.BusinessName}</div>
            <div className={DCss.sub}>
              Here’s what’s happening with your business today
            </div>
          </div>
        </div>
      </div>

      {perse.length > 0 ? (
        <div className={DCss.bottom}>
          <DesCard
            heading="Total orders"
            value={orderDel.totalOrders}
            change={perse[0].change}
            arrow={perse[0].status}
            boxof="RecentOrders"
            defaultSet={props.defaultSet}
            setDefaultSet={props.setDefaultSet}
          />
          <DesCard
            heading="Total Earnings"
            value={orderDel.totalAmount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
            change={perse[1].change}
            arrow={perse[1].status}
            boxof="Revenue"
            defaultSet={props.defaultSet}
            setDefaultSet={props.setDefaultSet}
          />
          <DesCard
            heading="New customers"
            value={orderDel.totalNewCustomers}
            change={perse[2].change}
            arrow={perse[2].status}
            boxof="BestSellers"
            defaultSet={props.defaultSet}
            setDefaultSet={props.setDefaultSet}
          />
        </div>
      ) : (
        <div className={DCss.bottom}>
          <DesCard
            heading="Total orders"
            value={orderDel.totalOrders}
            boxof="RecentOrders"
            defaultSet={props.defaultSet}
            setDefaultSet={props.setDefaultSet}
          />
          <DesCard
            heading="Total Earnings"
            value={orderDel.totalAmount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
            boxof="Revenue"
            defaultSet={props.defaultSet}
            setDefaultSet={props.setDefaultSet}
          />
          <DesCard
            heading="New customers"
            value={orderDel.totalNewCustomers}
            boxof="BestSellers"
            defaultSet={props.defaultSet}
            setDefaultSet={props.setDefaultSet}
          />
        </div>
      )}
    </div>
  );
}
