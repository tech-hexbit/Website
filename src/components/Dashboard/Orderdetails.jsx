import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// axios
import axios from "axios";

// css
import odcss from "./Css/Orderdetails.module.css";

// state
import AuthContext from "../../store/auth-context";

const Orderdetails = () => {
  const [res, setres] = useState();

  const { id } = useParams();

  useEffect(() => {
    loadOrderdel();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadOrderdel = async () => {
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

  useEffect(() => {
    console.log(res);
  }, [res]);
  return (
    <div className={odcss.orderdetails}>
      <div className={odcss.header}>
        <div className={odcss["header-child"]} />
        <div className={odcss.sales1}>
          <div className={odcss["sales-child"]} />
          <b className={odcss["order-detail"]}>Order detail</b>
          <hr />
        </div>
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
                      <div className={odcss.mail}>{res.ONDCBilling.email}</div>
                    </div>
                    <div className={odcss.mobile}>
                      {/* <Phone /> */}
                      <div className={odcss.phone}>{res.ONDCBilling.phone}</div>
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
                  <div className={odcss.phone1}>{res.ONDCBilling.phone}</div>
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
                    <div className={odcss.transactions}>
                      <div className={odcss["payment-method"]}>
                        Transactions :
                      </div>
                      <div className={odcss["t-id"]}>2312414</div>
                    </div>
                    <div className={odcss.transactions}>
                      <div className={odcss["payment-method"]}>
                        Payment method :
                      </div>
                      <div className={odcss["p-method"]}>
                        {res.payment.tl_method}
                      </div>
                    </div>
                    <div className={odcss.transactions}>
                      <div className={odcss["payment-method"]}>
                        Card holder name :
                      </div>
                      <div className={odcss["c-holdername"]}>
                        Sergio Regullion
                      </div>
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
              <div className={odcss["product-details1"]}>Product details:</div>
              <div className={odcss["products-table"]}>
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
              </div>
            </div>
          </div>

          <div className={odcss["text-content"]}>
            <div className={odcss["overlap-group"]}>
              <div className={odcss["text-wrapper"]}>Logistics details</div>
              <div className={odcss["logistic-img"]}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/bbac/f931/7712ade3835dbe65a300f6fb805345dc?Expires=1696204800&Signature=iNLUfDuEOEJ154BGcFfHKVkddx3WJEUKTjbofUgJtSYNid8llA0amue2MRF-qja~o9set5ajq5pOrbqaOBMkUVCbbZFphPQwTrf011yk8Wf-sTtgEw8YyKP~iZwjaqGny3afO~4nKxJCv1OgQWrm6d4qj4K0pjkuY7PkBXTsABrvf~bvs4NQ317YIw70YIPKUkDoPcbSdp6gcLoSsghVDCxu3jABOiGvj89-TVGcMrFqzLkGHHcSFYXRzWgM4HJ4XnNDGcyYd1pYIxHl35560Oj8OSnKiipEq1MEXsoQO1Jt7AzhtrlyQurKRyFMaZvdfZ2py7x6i4h~Zka2Wu3SQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div className={odcss["text-l"]}>
                <div className={odcss.name}>
                  <div className={odcss.div}>ABX Logistics</div>
                  <div className={odcss.product_rating}>
                    {Array(4)
                      .fill()
                      .map((_, i) => (
                        <p>⭐</p>
                      ))}
                  </div>
                </div>
                <div className={odcss["details-l"]}>
                  <div className={odcss["text-wrapper-2"]}>11</div>
                  <div className={odcss["text-wrapper-2"]}>11</div>
                  <div className={odcss["text-wrapper-2"]}>Id : 3</div>
                  <div className={odcss["text-wrapper-2"]}>
                    Amount charged : ₹ 65
                  </div>
                  <div className={odcss["text-wrapper-2"]}>
                    Payment method : ff
                  </div>
                </div>
              </div>
            </div>
            <div className={odcss["total-bill"]}>
              <div className={odcss.tbtext}>Total bill</div>

              <div className={odcss["total-billdetails"]}>
                <div className={odcss.dt1}>
                  {" "}
                  Subtotal:
                  <div className={odcss.amt1}>28</div>
                </div>
                <div className={odcss.dt1}>
                  Discounts:
                  <div className={odcss.amt2}>29</div>
                </div>
                <div className={odcss.dt1}>
                  Logistics:
                  <div className={odcss.amt3}>29</div>
                </div>
                <div className={odcss.dt1}>
                  Tax:
                  <div className={odcss.amt4}>29</div>
                </div>
              </div>
              <div className={odcss["total-amt"]}>
                <div className={odcss.amttext}>Total amount:</div>

                <div className={odcss.amtbold}>2324</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default Orderdetails;
