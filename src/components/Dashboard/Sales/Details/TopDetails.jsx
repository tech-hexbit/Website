import React from "react";
import PropTypes from "prop-types";

// css
import odcss from "./../../Css/Orderdetails.module.css";

export default function TopDetails({ del }) {
  return (
    <>
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

              {del.ONDCBilling.name}
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
              {del.ONDCBilling.email}
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
              {del.ONDCBilling.phone}
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className={odcss.BlockSub} id={odcss.paymentDetails}>
          <div className={odcss.SubHeading}>Payment details</div>
          <div className={odcss.ContentDels}>
            <p className={odcss.pl1}>Total amount : ₹ {del.amount}</p>
            <p className={odcss.pl1}>Status : {del.payment.status}</p>
            <p className={odcss.pl1}>
              Collected By : {del.payment.collected_by}
            </p>
          </div>
        </div>

        {/* Shipping */}
        <div className={odcss.BlockSub} id={odcss.shippingDetails}>
          <div className={odcss.SubHeading}>Shipping address</div>
          <div className={odcss.ContentDels}>
            <div className={odcss.adress}>
              <p className={odcss.adl1}>{del.ONDCBilling.address.name}</p>
              <p>
                {del.ONDCBilling.address.building},{" "}
                {del.ONDCBilling.address.locality},{" "}
                {del.ONDCBilling.address.city}, {del.ONDCBilling.address.state}
              </p>
              <p>
                {del.ONDCBilling.address.area_code},{" "}
                {del.ONDCBilling.address.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

TopDetails.propTypes = {
  del: PropTypes.object.isRequired,
};
