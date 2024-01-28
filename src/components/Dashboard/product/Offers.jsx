import React from "react";

//css
import EFCss from'./Css/Offers.module.css'


export default function Offers(props) {
  return (
    <div className={EFCss.mDiv}>
         <p className={EFCss.editHead}>Edit</p>
         <p className={EFCss.subTitlePTag}>Special offers & product promotions :</p>
      <ul className={EFCss.listDiv}>
        <li className={EFCss.liBlock}>5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000.</li>
        <li className={EFCss.liBlock}>No cost EMI available on select cards. Please check 'EMI options' above for more details.</li>
        <li className={EFCss.liBlock}>Get GST invoice and save up to 28% on business purchases.</li>
      </ul>
    </div>
  );
}
