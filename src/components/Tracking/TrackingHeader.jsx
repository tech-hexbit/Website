import React, { useState, useEffect } from "react";

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

      console.log(data.ONDCFulfillment[0][0].end.location.address);
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

          <div>
            <p>
              <b>Shipping Address</b>
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
            />
            <TrackList
              title="Order Accepted"
              des="Your order has been Accepted"
              currentState={data?.state}
              state="Accepted"
              val={1}
              stateVal={stateVal}
            />
            <TrackList
              title="Order In-Progress"
              des="Your order is In-progress"
              currentState={data?.state}
              state="In-progress"
              val={2}
              stateVal={stateVal}
            />
            <TrackList
              title="Delivered"
              des="Your order is delivered successfully"
              currentState={data?.state}
              state="Completed"
              val={3}
              stateVal={stateVal}
            />
            <TrackList
              title="Cancelled"
              des="Your order is cancelled"
              currentState={data?.state}
              state="Cancelled"
              val={4}
              stateVal={stateVal}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
