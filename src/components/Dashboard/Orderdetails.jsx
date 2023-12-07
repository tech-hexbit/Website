import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";

// axios
import axios from "axios";

// css
import odcss from "./Css/Orderdetails.module.css";

// state
import AuthContext from "../../store/auth-context";

// img
import LogisticsGif from "./../../assets/Logistic/Logistics.gif";

const Orderdetails = (props) => {
  const [res, setres] = useState(null);

  // const { id } = useParams();

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
                }}
              >
                <path d="M6 8L2 12L6 16" />
                <path d="M2 12H22" />
              </svg>
            </span>
            {/* <div className={odcss.sales1}> */}
            {/* <div className={odcss["sales-child"]} /> */}
            <b className={odcss["order-detail"]}>Order detail</b>
            {/* </div> */}
          </div>

          {res ? (
            <>
              <div className={odcss["order-id"]}>
                <div className={odcss["order-id1"]}>
                  <div className={odcss["od-1"]}>Order id :</div>
                  <div className={odcss["od-1"]}>#{res._id.slice(-4)}</div>
                </div>
              </div>

              <div className={odcss.details}>
                <div className={odcss["customer-details"]}>
                  <div className={odcss["texxt-content"]}>
                    <div className={odcss["customer-details1"]}>
                      Customer details
                    </div>
                    <div className={odcss["texxt-content-child"]} />
                    <div className={odcss["name-text"]}>
                      <div className={odcss.name}>
                        <div className={odcss["c-name"]}>
                          {res.ONDCBilling.name}
                        </div>
                      </div>
                      <div className={odcss.dettails}>
                        <div className={odcss.email}>
                          {/* <Mail /> */}
                          <div className={odcss.mail}>
                            {res.ONDCBilling.email}
                          </div>
                        </div>
                        <div className={odcss.mobile}>
                          {/* <Phone /> */}
                          <div className={odcss.phone}>
                            {res.ONDCBilling.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={odcss["shipping-address"]}>
                  <div className={odcss["texxt-content"]}>
                    <div className={odcss["customer-details1"]}>
                      Shipping address
                    </div>
                    <div className={odcss.addressdetails}>
                      <div className={odcss.name}>{res.ONDCBilling.name}</div>
                      <div className={odcss.phone1}>
                        {res.ONDCBilling.phone}
                      </div>
                      <div className={odcss.adress}>
                        <p className={odcss.adl1}>{res.ShippingAddress}</p>
                        <p className={odcss.adl2}></p>
                        <p className={odcss.adl3}></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={odcss["payment-details"]}>
                  <div className={odcss["cust-details"]}>
                    <div className={odcss["texxt-content"]}>
                      <div className={odcss["customer-details1"]}>
                        Payment details
                      </div>
                      <div className={odcss["details-list"]}>
                        <div className={odcss.transactions}></div>
                        <div className={odcss.transactions}>
                          <p className={odcss["payment-method"]}>
                            Payment method :{" "}
                            <span className={odcss["p-method"]}>
                              {res.payment.tl_method}
                            </span>
                          </p>
                        </div>
                        <div className={odcss.transactions}>
                          <p className={odcss["payment-method"]}>
                            Card holder name :{" "}
                            <span className={odcss["c-holdername"]}>
                              {
                                res.payment["@ondc/org/settlement_details"][0]
                                  .beneficiary_name
                              }
                            </span>
                          </p>
                        </div>
                        <div className={odcss.transactions}>
                          <div className={odcss["payment-method"]}>
                            Card number :
                          </div>
                          <div className={odcss.cno}>afaf</div>
                        </div>
                        <div className={odcss.transactions}>
                          <div className={odcss["payment-method"]}>
                            Total amount :
                          </div>
                          <div className={odcss.div3}>{res.amount}</div>
                        </div>
                      </div>
                    </div>
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
