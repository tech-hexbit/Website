import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// Css
import osCss from "./Css/overallSales.module.css";
import { Update } from "@mui/icons-material";

export default function OverallSales() {
  const [orderDel, setOrderDel] = useState([]);
  const [edit, setEdit] = useState(false);
  const [load, setLoad] = useState(false);
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

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/Order/all", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setOrderDel(response.data.orderList);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  const UpdateData = async () => {
    setEdit(!edit);
  };

  return (
    <div className={osCss.mainDiv}>
      <div className={osCss.top}>
        <div>Overall Sales</div>
        <div className={osCss.filters}>
          <div className={osCss.select}>
            <div className={osCss.selectInner}>
              <select>
                <option hidden>Ecommerce</option>
              </select>
            </div>
            <div className={osCss.selectInner}>
              <select>
                <option hidden>Status</option>
              </select>
            </div>
          </div>
          <div className={osCss.search}>
            <input type="text" placeholder="Search order" />
          </div>
        </div>
      </div>
      <div className={osCss.middle}>
        {/* <div className={osCss.tabMain}>
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
        </div> */}
        <div className={osCss.table}>
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
              {/* <th>
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
              </th> */}
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
                Buyer
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

            {orderDel?.length > 0 ? (
              <>
                {orderDel.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>#{val._id.slice(-4)}</td>
                      <td>
                        <Link
                          to={`/me/orderdetails/${val._id}`}
                          className="LinkStyle"
                        >
                          {val.ONDCBilling.name}
                        </Link>
                      </td>
                      <td>{val.amount}</td>
                      <td>{val.when.date}</td>
                      <td>{val.status}</td>

                      <td
                        style={{
                          color:
                            val.state == "Accepted"
                              ? "#4BB543"
                              : val.state == "In-progress"
                              ? "#3F81E0"
                              : "#D0342C",
                        }}
                      >
                        {edit ? (
                          <>
                            <select name="" id="">
                              <option value="none" selected hidden>
                                Select the Updated Status
                              </option>
                              <option value="Accepted">Accepted</option>
                              <option value="In-progress">In-progress</option>
                              <option value="Completed">Completed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </>
                        ) : (
                          <>{val.state}</>
                        )}

                        {edit ? (
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
                            class="lucide lucide-save"
                            onClick={UpdateData}
                          >
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                            <polyline points="17 21 17 13 7 13 7 21" />
                            <polyline points="7 3 7 8 15 8" />
                          </svg>
                        ) : (
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
                            onClick={UpdateData}
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                          </svg>
                        )}
                      </td>
                      <td>{val.buyer}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <p>No Orders</p>
            )}
          </table>
        </div>
      </div>
      <div className={osCss.bottom}>
        <div></div>
        <div className={osCss.pages}>
          <div className={osCss.arrow}>{`<<`}</div>
          <div className={osCss.numbers}>
            <div className={osCss.active}>1</div>
            <div className={osCss.inactive}>2</div>
            <div className={osCss.inactive}>3</div>
          </div>
          <div className={osCss.arrow}>{`>>`}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
