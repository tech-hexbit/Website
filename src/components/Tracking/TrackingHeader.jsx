import React from "react";

import TrackList from "./TrackList";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackingHeader(props) {
  return (
    <>
      <p className={THCss.titlePTag}>
        Order ID : <span>{props.id}</span>
      </p>

      <div className={THCss.listTrackingDiv}>
        <TrackList title="Order Created" des="We have received your order" />
        <TrackList title="Order Packed" des="Your order has been packed" />
        <TrackList title="Order Shipped" des="Your order has been shipped" />
        <TrackList
          title="Ready for Delivery"
          des="Your order is out for delivery"
        />
        <TrackList
          title="Delivered"
          des="Your order is delivered successfully"
        />
        <TrackList title="Cancelled" des="Your order is cancelled" />
      </div>
    </>
  );
}
