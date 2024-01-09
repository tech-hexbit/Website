import React from "react";

export default function TopDetails() {
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
              <p className={odcss.adl1}>Name: {res.ONDCBilling.address.name}</p>
              <p className={odcss.adl1}>
                Building: {res.ONDCBilling.address.building}
              </p>
              <p className={odcss.adl1}>
                Locality: {res.ONDCBilling.address.locality}
              </p>
              <p className={odcss.adl1}>City: {res.ONDCBilling.address.city}</p>
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
              {res.payment["@ondc/org/settlement_details"][0].beneficiary_name}
            </p>
            <p className={odcss.pl1}>
              Card number/ UPI ID :{" "}
              {
                res.payment["@ondc/org/settlement_details"][0]
                  .settlement_bank_account_no
              }
            </p>
            <p className={odcss.pl1}>Total amount : ₹ {res.amount}</p>
          </div>
        </div>
      </div>
    </>
  );
}
