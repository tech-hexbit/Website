import React, { useState, useEffect, useContext } from "react";

// components
import Header from "./MainParts/Header";
import UpdateDel from "./Sales/UpdateDel";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import odcss from "./Css/Orderdetails.module.css";

// img
import LogisticsGif from "./../../assets/Logistic/Logistics.gif";

const Orderdetails = (props) => {
  const [load, setLoad] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [res, setres] = useState(null);

  useEffect(() => {
    loadOrderdel(props.id);
  }, [props.id, loadData]);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [, loadData]);

  const authCtx = useContext(AuthContext);

  const loadOrderdel = async (id) => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/common/order/details/${id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoad(false);

        setres(response.data.OrderDetail);
      } else {
        setLoad(false);

        console.log("Error");
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  return (
    <>
      {/* Header */}
      <div className={odcss.header}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left"
          className={odcss.leftArrow}
          onClick={() => {
            props.setProductDel(false);
            props.setHideDel(!props.showDel);
          }}
        >
          <path d="m15 18-6-6 6-6" />
        </svg>

        <Header name="Order detail" />
      </div>

      {load ? (
        <div className="loadCenterDiv" id="loadPadding">
          <Load />
        </div>
      ) : (
        <>
          {res ? (
            <div className={odcss.orderdetails}>
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
                        <p className={odcss.pl1}>
                          Total amount : ₹ {res.amount}
                        </p>
                      </div>
                    </div>
                  </div>

                  <UpdateDel
                    setEdit={setEdit}
                    id={props.id}
                    setLoadDataState={setLoadData}
                    loadDataState={loadData}
                  />

                  <div className={odcss["text-content"]}>
                    <div className={odcss["overlap-group"]}>
                      <div className={odcss["text-wrapper"]}>
                        Logistics details
                      </div>
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
                        </div>
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
            <>
              <div className="loadCenterDiv" id="loadPadding">
                No Data to show
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Orderdetails;
