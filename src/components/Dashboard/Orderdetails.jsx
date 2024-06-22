import { useState, useEffect, useContext } from "react";

// components
import Header from "./MainParts/Header";
import UpdateDel from "./Sales/UpdateDel";
import Logistics from "./Sales/Details/Logistics";
import TopDetails from "./Sales/Details/TopDetails";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import odcss from "./Css/Orderdetails.module.css";

const Orderdetails = (props) => {
  const [res, setres] = useState(null);
  const [load, setLoad] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loadData, setLoadData] = useState(false);


  const [isLogisticsFormFilled, setIsLogisticsFormFilled] = useState(false);

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

  useEffect(() => {
    loadOrderdel(props.id);
  }, [props.id, loadData]);

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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={odcss.leftArrow}
          onClick={() => {
            props.setProductDel(false);
            props.setHideDel(!props.showDel);
          }}
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        {res ? (
          <>
            <Header name={`Order ID : #${res._id.slice(-4)}`} />
          </>
        ) : (
          ""
        )}
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
                  {/* Customer || Shipping || Payment */}
                  <TopDetails del={res} />

                  {/* Accepted || In-Progress || Completed || Cancelled || Return RTO */}
                  <UpdateDel
                    setEdit={setEdit}
                    id={props.id}
                    setLoadDataState={setLoadData}
                    loadDataState={loadData}
                    allowInProgressEdit={isLogisticsFormFilled}
                  />

                  <div className={odcss.textContent}>
                    {/* Logistics Form */}
                    <Logistics
                      res={res}
                      _id={res._id}
                      setLoadDataState={setLoadData}
                      loadDataState={loadData}
                      setIsLogisticsFormFilled={setIsLogisticsFormFilled}
                    />
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
