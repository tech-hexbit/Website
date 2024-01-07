import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import odcss from "./Css/Orderdetails.module.css";

// img
import LogisticsGif from "./../../assets/Logistic/Logistics.gif";

const Orderdetails = (props) => {
  const [res, setres] = useState(null);

  useEffect(() => {
    loadOrderdel(props.id);
  }, [props.id]);

  const authCtx = useContext(AuthContext);

  const loadOrderdel = async (id) => {
    try {
      const response = await axios.get(`/api/common/order/details/${id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setres(response.data.OrderDetail);
      } else {
        console.log("Error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {res ? (
        <div className={odcss.orderdetails}>
          {/* Header */}
          <div className={odcss.header}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-left"
                className={odcss.leftArrow}
                onClick={() => {
                  props.setProductDel(false);
                  props.setHideDel(!props.showDel);
                }}
              >
                <path d="M6 8L2 12L6 16" />
                <path d="M2 12H22" />
              </svg>
            </span>
            <b>Order detail</b>
          </div>

          {res ? (
            <>
              <div className={odcss["order-id"]}>
                <div className={odcss["order-id1"]}>
                  <div className={odcss["od-1"]}>Order id :</div>
                  <div className={odcss["od-1"]}>#{res._id.slice(-4)}</div>
                </div>
              </div>

              {/* Customer || Shipping || Payment */}
              <div className={odcss.details}>
                {/* Customer */}
                <div className={odcss.BlockSub} id={odcss.customerDetails}>
                  <div className={odcss.SubHeading}>Customer details</div>
                  <div className={odcss.ContentDels}>
                    {/* Name */}
                    <div className={odcss.name}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-circle-user-round"
                        className={odcss.particuarsSvg}
                      >
                        <path d="M18 20a6 6 0 0 0-12 0" />
                        <circle cx="12" cy="10" r="4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>

                      {res.ONDCBilling.name}
                    </div>

                    {/* <Mail /> */}
                    <div className={odcss.name}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-mail"
                        className={odcss.particuarsSvg}
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      {res.ONDCBilling.email}
                    </div>

                    {/* <Phone /> */}
                    <div className={odcss.name}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-phone"
                        className={odcss.particuarsSvg}
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {res.ONDCBilling.phone}
                    </div>
                  </div>
                </div>

                {/* Shipping */}
                <div className={odcss.BlockSub} id={odcss.shippingDetails}>
                  <div className={odcss.SubHeading}>Shipping address</div>
                  <div className={odcss.ContentDels}>
                    <div className={odcss.adress}>
                      <p className={odcss.adl1}>
                        Name: {res.ONDCBilling.address.name}
                      </p>
                      <p className={odcss.adl1}>
                        Building: {res.ONDCBilling.address.building}
                      </p>
                      <p className={odcss.adl1}>
                        Locality: {res.ONDCBilling.address.locality}
                      </p>
                      <p className={odcss.adl1}>
                        City: {res.ONDCBilling.address.city}
                      </p>
                      <p className={odcss.adl1}>
                        State: {res.ONDCBilling.address.state}
                      </p>
                      <p className={odcss.adl1}>
                        Country: {res.ONDCBilling.address.country}
                      </p>
                      <p className={odcss.adl1}>
                        Area Code: {res.ONDCBilling.address.area_code}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className={odcss.BlockSub} id={odcss.paymentDetails}>
                  <div className={odcss.SubHeading}>Payment details</div>
                  <div className={odcss.ContentDels}>
                    <p className={odcss.pl1}>
                      Transaction ID : {res.payment.params.transaction_id}
                    </p>
                    <p className={odcss.pl1}>
                      Payment method : {res.payment.tl_method}
                    </p>
                    <p className={odcss.pl1}>
                      Card holder name :{" "}
                      {
                        res.payment["@ondc/org/settlement_details"][0]
                          .beneficiary_name
                      }
                    </p>
                    <p className={odcss.pl1}>
                      Card number/ UPI ID :{" "}
                      {
                        res.payment["@ondc/org/settlement_details"][0]
                          .settlement_bank_account_no
                      }
                    </p>
                    <p className={odcss.pl1}>Total amount : ₹ {res.amount}</p>
                  </div>
                </div>
              </div>

              <div className={odcss["product-details"]}>
                <div className={odcss["text-content"]}>
                  <p className={odcss["product-details1"]}>Product details:</p>
                  {/* <br /> */}
                  {/* <div className={odcss["products-table"]}>
                     <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Product Id</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={odcss.list1}>
                          <td className={odcss.imgtext}>
                            <td>
                              <img src="" alt="ff" />
                            </td>
                            <td>
                              <div className={odcss["prod-imgn"]}>Shoes</div>
                            </td>
                          </td>
                          <td>
                            <div className={odcss["prod-idn"]}>22</div>
                          </td>
                          <td>
                            <div className={odcss["price-n"]}>22</div>
                          </td>
                          <td>
                            <div className={odcss.quantity}>2</div>
                          </td>
                          <td>
                            <div className={odcss["t-amount"]}>222</div>
                          </td>
                        </tr>

                        <tr className={odcss.list1}>
                          <td className={odcss.imgtext}>
                            <td>
                              <img src="" alt="ff" />
                            </td>
                            <td>
                              <div className={odcss["prod-imgn"]}>Shoes</div>
                            </td>
                          </td>
                          <td>
                            <div className={odcss["prod-idn"]}>22</div>
                          </td>
                          <td>
                            <div className={odcss["price-n"]}>22</div>
                          </td>
                          <td>
                            <div className={odcss.quantity}>2</div>
                          </td>
                          <td>
                            <div className={odcss["t-amount"]}>222</div>
                          </td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>*/}
                  <p>
                    Total Number of Products = <b>{res.Items.length}</b>
                  </p>
                </div>
              </div>

              <div className={odcss["text-content"]}>
                <div className={odcss["overlap-group"]}>
                  <div className={odcss["text-wrapper"]}>Logistics details</div>
                  <div className={odcss["logistic-img"]}>
                    <img
                      src={LogisticsGif}
                      alt=""
                      className={odcss.LogisticsGif}
                    />
                  </div>
                  <div className={odcss["text-l"]}>
                    <div className={odcss.name}>
                      <div className={odcss.div}>Soon To be Alloted</div>
                      {/* <div className={odcss.div}>ABX Logistics</div> */}
                      {/* <div className={odcss.product_rating}>
                        {Array(4)
                          .fill()
                          .map((_, i) => (
                            <p>⭐</p>
                          ))}
                      </div> */}
                    </div>
                    {/* <div className={odcss["details-l"]}>
                      <div className={odcss["text-wrapper-2"]}>11</div>
                      <div className={odcss["text-wrapper-2"]}>11</div>
                      <div className={odcss["text-wrapper-2"]}>Id : 3</div>
                      <div className={odcss["text-wrapper-2"]}>
                        Amount charged : ₹ 65
                      </div>
                      <div className={odcss["text-wrapper-2"]}>
                        Payment method : ff
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className={odcss.mapDivBU}>
                  <h2 className={odcss.gt}>Total bill</h2>
                  {res.breakup.map((val, key) => {
                    return (
                      <div key={key}>
                        <p className={odcss.dt1}>
                          <span className={odcss.titleVal}>
                            {val[0].title}:
                          </span>{" "}
                          <span className={odcss.amt1}>
                            ₹ {Number(val[0].price.value).toFixed(2)}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                  <h3 className={odcss.gt}>
                    Grand Total:{" "}
                    <span className={odcss.amt1}>
                      ₹ {res.amount.toFixed(2)}
                    </span>
                  </h3>
                </div>
              </div>
            </>
          ) : (
            <p>No Data</p>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Orderdetails;
