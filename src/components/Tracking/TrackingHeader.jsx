import { useState, useEffect } from "react";
import PropTypes from "prop-types"

// components
import TrackList from "./TrackList";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackingHeader({ data }) {
  const [stateVal, setStateVal] = useState();

  useEffect(() => {
    if (data) {
      if (data.state === "Created") {
        setStateVal(0);
      } else if (data.state === "Accepted") {
        setStateVal(1);
      } else if (data.state === "In-progress") {
        setStateVal(2);
      } else if (data.state === "Completed") {
        setStateVal(3);
      } else if (data.state === "Cancelled") {
        setStateVal(4);
      }
    }
  }, [data]);

  return (
    <>
      {data ? (
        <>
          <div className={THCss.titleDiv}>
            <div className={THCss.TitleDiv}>
              <p className={THCss.titlePTag}>
                <b>Order ID</b> : <span>{data.OrderID}</span>
              </p>
              <p>
                <span
                  style={{
                    color: data.status === "PAID" ? "#4BB543" : "#9e6a03",
                  }}
                >
                  {data.status}
                </span>
                ||
                <a href={data.invoice.URL} className={THCss.openPDF}>
                  Open PDF
                </a>
              </p>
            </div>
          </div>

          <div className={THCss.ordDelMDiv}>
            {/* Shipping */}
            <div>
              <p className={THCss.shippLabelPTag}>
                <b>Shipping Address</b>

                <a
                  href={`https://www.google.com/maps?q=${data.ONDCFulfillment[0][0].end.location.gps}`}
                  target="_blank"
                  className="LinkStyle"
                  id={THCss.navi} rel="noreferrer"
                >
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
                    className="lucide lucide-navigation"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                </a>
              </p>
              <p>{data.ONDCFulfillment[0][0].end.location.address.name}</p>
              <p>
                {data.ONDCFulfillment[0][0].end.location.address.building},{" "}
                {data.ONDCFulfillment[0][0].end.location.address.locality}
              </p>
              <p>
                {data.ONDCFulfillment[0][0].end.location.address.city},{" "}
                {data.ONDCFulfillment[0][0].end.location.address.state},{" "}
                {data.ONDCFulfillment[0][0].end.location.address.country}
              </p>
            </div>

            {/* Logistics */}
            {data.logistics.id == "" || data.logistics.logisticsPatnerName == "" ?
              null :
              (
                <div>
                  {console.log(data.logistics.id)}
                  <p className={THCss.shippLabelPTag}>
                    <b>Logistics</b>

                    <a
                      href={data.logistics.url}
                      target="_blank"
                      className="LinkStyle"
                      id={THCss.navi} rel="noreferrer"
                    >
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
                        className="lucide lucide-navigation"
                      >
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                    </a>
                  </p>
                  <p className={THCss.infoPTag}>
                    ID: <span>{data.logistics.id}</span>
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
                      className="lucide lucide-clipboard"
                      id={THCss.copyClip}
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    </svg>
                  </p>

                  <p>
                    Logistics Patner:{" "}
                    <span>{data.logistics.logisticsPatnerName}</span>
                  </p>
                </div>
              )
            }
          </div>

          <div className={THCss.listTrackingDiv}>
            <div className={THCss.trackingDiv}>
              <div className={THCss.trackingDivMain}>
                <div className={THCss.trackinglineDiv}></div>
              </div>
            </div>

            <TrackList
              title="Order Created"
              des="We have received your order"
              currentState={data?.state}
              state="Created"
              val={0}
              stateVal={stateVal}
              data={data}
            />
            <TrackList
              title="Order Accepted"
              des="Your order has been Accepted"
              currentState={data?.state}
              state="Accepted"
              val={1}
              stateVal={stateVal}
              data={data}
            />
            <TrackList
              title="Order In-Progress"
              des="Your order is In-progress"
              currentState={data?.state}
              state="In-progress"
              val={2}
              stateVal={stateVal}
              data={data}
            />
            <TrackList
              title="Delivered"
              des="Your order is delivered successfully"
              currentState={data?.state}
              state="Completed"
              val={3}
              stateVal={stateVal}
              data={data}
            />
            <TrackList
              title="Cancelled"
              des="Your order is cancelled"
              currentState={data?.state}
              state="Cancelled"
              val={4}
              stateVal={stateVal}
              data={data}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

TrackingHeader.propTypes = {
  data: PropTypes.shape({
    OrderID: PropTypes.string,
    state: PropTypes.string,
    status: PropTypes.string,
    invoice: PropTypes.shape({
      URL: PropTypes.string,
    }),
    ONDCFulfillment: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          end: PropTypes.shape({
            location: PropTypes.shape({
              gps: PropTypes.string,
              address: PropTypes.shape({
                name: PropTypes.string,
                building: PropTypes.string,
                locality: PropTypes.string,
                city: PropTypes.string,
                state: PropTypes.string,
                country: PropTypes.string,
              }),
            }),
          })
        })
      )
    ),
    logistics: PropTypes.shape({
      id: PropTypes.string,
      logisticsPatnerName: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
};