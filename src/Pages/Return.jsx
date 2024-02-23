import React from "react";

// css
import styles from "./../components/terms/TermsContent.module.css";

export default function Return() {
  return (
    <div className={styles.wrapper}>
      <h1>Refund and Cancellation Policy</h1>

      <p>
        At Hexbit.io, we strive to ensure a seamless and satisfactory shopping
        experience for our customers. Our refund and cancellation policy is
        designed to provide clarity and transparency regarding the processes
        involved. Please review the following guidelines carefully:
      </p>

      <h3>🌟 Refund Eligibility and Timeframes:</h3>

      <ul>
        <li>
          Refund requests must be made within a specified timeframe, typically
          within 7 days of the purchase date. (may differ product to product)
        </li>
        <li>Approved refunds are processed within 9 business days.</li>
      </ul>

      <br />
      <br />

      <h3>🔄 Return and Replace Request Process:</h3>

      <ul>
        <li>
          Customers requesting a return or replacement must initiate the process
          through the Buyer app they have bought the product.
        </li>
        <li>
          Our team will review the request and provide further instructions for
          the return process.
        </li>
      </ul>

      <br />
      <br />

      <h3>🚫 Non-Refundable and Non-Cancellable Products/Services:</h3>

      <ul>
        <li>
          Certain products or services may be designated as non-refundable or
          non-cancellable.
        </li>
        <li>
          Examples of non-refundable/non-cancellable items include personalized
          or customized products, perishable goods, and digital downloads.
        </li>
        <li>
          Please review the product/service description carefully before making
          a purchase to ascertain its refund/cancellation status.
        </li>
      </ul>

      <br />
      <br />

      <h3>🛑 Cancellation Procedures, Fees, and Requirements:</h3>

      <ul>
        <li>
          Cancellation requests are honored if submitted immediately after
          placing an order, provided the order has not been processed or
          shipped.
        </li>

        <li>
          Once an order has been communicated to vendors/merchants and the
          shipping process has commenced, cancellation requests may not be
          accommodated.
        </li>
        <li>
          Products/services deemed non-cancellable are exempt from cancellation
          requests.
        </li>
        <li>
          Hexbit.io reserves the right to impose cancellation fees or
          requirements, particularly for orders that have already been processed
          or customized.
        </li>
      </ul>
    </div>
  );
}
