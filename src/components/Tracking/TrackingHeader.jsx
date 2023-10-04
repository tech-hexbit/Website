import React, { useState, useEffect } from "react";

// components
import TrackList from "./TrackList";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackingHeader(props) {
  const [stateVal, setStateVal] = useState();

  useEffect(() => {
    if (props.data) {
      if (props.data.state === "Created") {
        setStateVal(0);
      } else if (props.data.state === "Accepted") {
        setStateVal(1);
      } else if (props.data.state === "In-progress") {
        setStateVal(2);
      } else if (props.data.state === "Compeleted") {
        setStateVal(3);
      } else if (props.data.state === "Cancelled") {
        setStateVal(4);
      }
    }
  }, [props]);
  return (
    <>
      {props.data ? (
        <>
          <div className={THCss.titleDiv}>
            <div className={THCss.TitleDiv}>
              <p className={THCss.titlePTag}>
                <b>Order ID</b> : <span>{props.data.OrderID}</span>
              </p>
              <p>
                <span
                  style={{
                    color: props.data.status === "PAID" ? "#4BB543" : "#9e6a03",
                  }}
                >
                  {props.data.status}
                </span>{" "}
                ||
                <a href={props.data?.Invoice} className={THCss.openPDF}>
                  Open PDF
                </a>
              </p>
            </div>
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
              currentState={props.data?.state}
              state="Created"
              val={0}
              stateVal={stateVal}
            />
            <TrackList
              title="Order Accepted"
              des="Your order has been Accepted"
              currentState={props.data?.state}
              state="Accepted"
              val={1}
              stateVal={stateVal}
            />
            <TrackList
              title="Order In-Progress"
              des="Your order is In-progress"
              currentState={props.data?.state}
              state="In-progress"
              val={2}
              stateVal={stateVal}
            />
            <TrackList
              title="Delivered"
              des="Your order is delivered successfully"
              currentState={props.data?.state}
              state="Compeleted"
              val={3}
              stateVal={stateVal}
            />
            <TrackList
              title="Cancelled"
              des="Your order is cancelled"
              currentState={props.data?.state}
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
