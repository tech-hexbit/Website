import React from "react";

import TrackList from "./TrackList";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackingHeader(props) {
  const handleOpenPDF = async (e) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/common/invoice/Download/Invoice"
      );

      const blob = await response.blob();

      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank");
    } catch (error) {
      console.error("Error fetching or displaying the PDF:", error);
    }
  };

  console.log(props);

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
                <a onClick={handleOpenPDF} className={THCss.openPDF}>
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
            />
            <TrackList title="Order Packed" des="Your order has been packed" />
            <TrackList
              title="Order Shipped"
              des="Your order has been shipped"
            />
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
      ) : (
        ""
      )}
    </>
  );
}
