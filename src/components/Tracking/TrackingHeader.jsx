import React, { useState } from "react";

import TrackList from "./TrackList";
import axios from "axios";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackingHeader(props) {
  const [DonlUrl, setDonlUrl] = useState("");
  const Download = async (e) => {
    const response = await axios.post("/api/common/invoice/Download/Invoice");

    console.log(response.data);
    setDonlUrl(response.data);

    const pdfBlob = new Blob([response.data], { type: "application/pdf" });

    // Create a Blob URL
    const blobUrl = URL.createObjectURL(pdfBlob);

    // Open a new tab with the Blob URL
    window.open(blobUrl, "_blank");
  };
  return (
    <>
      <div>
        <p className={THCss.titlePTag}>
          Order ID : <span>{props.id}</span>
        </p>
        <p onClick={Download}>Download Invoice</p>
      </div>

      <div className={THCss.listTrackingDiv}>
        <div className={THCss.trackingDiv}>
          <div className={THCss.trackingDivMain}>
            <div className={THCss.trackinglineDiv}></div>
          </div>
        </div>

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
