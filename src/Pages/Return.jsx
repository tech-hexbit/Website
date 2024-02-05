import React from "react";

// css
import styles from "./../components/terms/TermsContent.module.css";

export default function Return() {
  return (
    <div className={styles.wrapper}>
      <h1>Cancellation & Refund Policy</h1>
      <p>
        At Hexbit.io, we prioritize customer satisfaction and have established a
        flexible cancellation policy:
      </p>
      <p>
        1. <b>Cancellation Policy:</b>
      </p>
      <ul>
        <li>
          Cancellations are honored if requested immediately after placing an
          order.
        </li>
        <li>
          However, cancellation requests may not be entertained once orders are
          communicated to vendors/merchants, and the shipping process has begun.
        </li>
        <li>
          Perishable items such as flowers and eatables are non-cancellable, but
          refunds/replacements are possible if the product quality is
          unsatisfactory.
        </li>
      </ul>

      <br />
      <br />

      <p>
        2. <b>Damaged or Defective Items:</b>
      </p>
      <ul>
        <li>
          Report damaged or defective items to our Customer Service team within
          7 days of receipt.
        </li>
        <li>
          The request will be processed after verification by the merchant.
        </li>
        <li>
          Notify us within 7 days if the received product differs from the
          site's depiction or your expectations.
        </li>
      </ul>

      <br />
      <br />

      <p>
        3. <b>Warranty Claims:</b>
      </p>
      <ul>
        <li>
          For products with manufacturer warranties, direct complaints to the
          respective manufacturers.
        </li>
      </ul>

      <br />
      <br />

      <p>
        3. <b>Refunds:</b>
      </p>
      <ul>
        <li>
          Refunds approved by BTA TECH SOLUTIONS PRIVATE LIMITED take 9-15 days
          for processing.
        </li>
        <li>
          If a refund is applicable, it will be credited to the customer's
          account.
        </li>
      </ul>

      <br />
      <br />

      <p>
        Our Customer Service Team is dedicated to resolving your concerns. We
        appreciate your cooperation and understanding.
      </p>
    </div>
  );
}
