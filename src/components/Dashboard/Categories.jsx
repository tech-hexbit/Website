import React, { useState } from "react";

// components
import CategoriesTabs from "./Categories/CategoriesTabs";

// css
import Ccss from "./Css/Categories.module.css";
import osCss from "./Sales/Css/overallSales.module.css";

export default function Categories() {
  const [current, setCurrent] = useState("Ecommerce");
  const [active, setActive] = useState({
    pdt: true,
    fashion: false,
    grocery: false,
    furniture: false,
  });

  const data = [
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Delivered",
    },
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Delivered",
    },
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Pending",
    },
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Delivered",
    },
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Returned",
    },
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Pending",
    },
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Delivered",
    },
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Delivered",
    },
    {
      orderId: "#617GF",
      customer: "Jonathan James",
      product: "Adidas Mens Restound M Running Shoe",
      price: "₹ 1,699",
      order: "10-04-2023",
      payment: "Paytm",
      status: "Returned",
    },
  ];
  return (
    <div>
      <div className={Ccss.mDIvTabs}>
        <CategoriesTabs
          name="Ecommerce"
          setCurrent={setCurrent}
          current={current}
        />
        <CategoriesTabs
          name="Service providers"
          setCurrent={setCurrent}
          current={current}
        />
        <CategoriesTabs
          name="Education"
          setCurrent={setCurrent}
          current={current}
        />
        <CategoriesTabs name="Food" setCurrent={setCurrent} current={current} />
        <CategoriesTabs
          name="Automobile"
          setCurrent={setCurrent}
          current={current}
        />
      </div>

      <div className={osCss.middle}>
        <div className={osCss.tabMain}>
          <div className={osCss.tabs}>
            <div
              style={{
                color: active.pdt ? "#4BB543" : "black",
                fontWeight: active.pdt ? "700" : "400",
                borderBottom: active.pdt ? "2px solid #4BB543" : "none",
              }}
              onClick={() => {
                setActive({
                  pdt: true,
                  fashion: false,
                  grocery: false,
                  furniture: false,
                });
              }}
            >
              All products
            </div>
            <div
              style={{
                color: active.fashion ? "#4BB543" : "black",
                fontWeight: active.fashion ? "700" : "400",
                borderBottom: active.fashion ? "2px solid #4BB543" : "none",
              }}
              onClick={() => {
                setActive({
                  pdt: false,
                  fashion: true,
                  grocery: false,
                  furniture: false,
                });
              }}
            >
              Fashion
            </div>
            <div
              style={{
                color: active.grocery ? "#4BB543" : "black",
                fontWeight: active.grocery ? "700" : "400",
                borderBottom: active.grocery ? "2px solid #4BB543" : "none",
              }}
              onClick={() => {
                setActive({
                  pdt: false,
                  fashion: false,
                  grocery: true,
                  furniture: false,
                });
              }}
            >
              Grocery
            </div>
            <div
              style={{
                color: active.furniture ? "#4BB543" : "black",
                fontWeight: active.furniture ? "700" : "400",
                borderBottom: active.furniture ? "2px solid #4BB543" : "none",
              }}
              onClick={() => {
                setActive({
                  pdt: false,
                  fashion: false,
                  grocery: false,
                  furniture: true,
                });
              }}
            >
              Furniture
            </div>
          </div>
          <div></div>
        </div>
        <div id="wrap" className={osCss.table}>
          <table style={{ borderCollapse: "collapse" }}>
            <tr>
              <th></th>
              <th className="sticky-col">
                Order id{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                    fill="#777777"
                  />
                  <path
                    d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                    fill="#777777"
                  />
                </svg>
              </th>
              <th>
                Customer{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                    fill="#777777"
                  />
                  <path
                    d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                    fill="#777777"
                  />
                </svg>
              </th>
              <th>
                Product{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                    fill="#777777"
                  />
                  <path
                    d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                    fill="#777777"
                  />
                </svg>
              </th>
              <th>
                Price{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                    fill="#777777"
                  />
                  <path
                    d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                    fill="#777777"
                  />
                </svg>
              </th>
              <th>
                Ordered on{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                    fill="#777777"
                  />
                  <path
                    d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                    fill="#777777"
                  />
                </svg>
              </th>
              <th className={osCss.payment}>
                Payment method{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                    fill="#777777"
                  />
                  <path
                    d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                    fill="#777777"
                  />
                </svg>
              </th>
              <th className={osCss.payment}>
                Delivery status{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                    fill="#777777"
                  />
                  <path
                    d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                    fill="#777777"
                  />
                </svg>
              </th>
              <th>
                Action{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                    fill="#777777"
                  />
                  <path
                    d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                    fill="#777777"
                  />
                </svg>
              </th>
            </tr>
            {data.map((element, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{element.orderId}</td>
                    <td>{element.customer}</td>
                    <td>{element.product}</td>
                    <td>{element.price}</td>
                    <td>{element.order}</td>
                    <td>{element.payment}</td>
                    <td
                      style={{
                        color:
                          element.status == "Delivered"
                            ? "#4BB543"
                            : element.status == "Pending"
                            ? "#3F81E0"
                            : "#D0342C",
                      }}
                    >
                      {element.status}
                    </td>
                    <td>
                      <div className={osCss.dots}>
                        <div style={{ marginTop: "-5px" }}>...</div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
