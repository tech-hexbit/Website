import React from "react";

// css
import styles from "./../components/terms/TermsContent.module.css";

export default function Return() {
  return (
    <div className={styles.wrapper}>
      <h1>Cancellation & Refund Policy</h1>
      <p>
        BTA TECH SOLUTIONS PRIVATE LIMITED believes in helping its customers as
        far as possible, and has therefore a liberal cancellation policy. Under
        this policy:
      </p>
      <p>
        Cancellations will be considered only if the request is made immediately
        after placing the order. However, the cancellation request may not be
        entertained if the orders have been communicated to the
        vendors/merchants and they have initiated the process of shipping them.
      </p>
      <p>
        BTA TECH SOLUTIONS PRIVATE LIMITED does not accept cancellation requests
        for perishable items like flowers, eatables etc. However,
        refund/replacement can be made if the customer establishes that the
        quality of product delivered is not good.
      </p>
      <p>
        In case of receipt of damaged or defective items please report the same
        to our Customer Service team. The request will, however, be entertained
        once the merchant has checked and determined the same at his own end.
        This should be reported within 7 Days days of receipt of the products.
        In case you feel that the product received is not as shown on the site
        or as per your expectations, you must bring it to the notice of our
        customer service within 7 Days days of receiving the product. The
        Customer Service Team after looking into your complaint will take an
        appropriate decision.
      </p>
      <p>
        In case of complaints regarding products that come with a warranty from
        manufacturers, please refer the issue to them. In case of any Refunds
        approved by the BTA TECH SOLUTIONS PRIVATE LIMITED, it’ll take 9-15 Days
        days for the refund to be processed to the end customer.
      </p>
    </div>
  );
}
