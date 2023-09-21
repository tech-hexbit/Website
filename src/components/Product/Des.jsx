import React from "react";

// css
import DCss from "./Css/Des.module.css";

export default function Des() {
  return (
    <>
      <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>Description :</p>
        <p className={DCss.desDPTag}>
          Midsole:- Core Instant Step In Comfort Long Lasting Reponsive
          Cushionig And Super Plush Feel. Outsole :- The Rubber Outsole With
          Perfect Grip And Durability.
        </p>
      </div>

      <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>Features :</p>
        <p className={DCss.desDPTag}>
          Midsole:- Core Instant Step In Comfort Long Lasting Reponsive
          Cushionig And Super Plush Feel. Outsole :- The Rubber Outsole With
          Perfect Grip And Durability.
        </p>
      </div>
      <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>Services :</p>
        <p className={DCss.desDPTag}>
          Midsole:- Core Instant Step In Comfort Long Lasting Reponsive
          Cushionig And Super Plush Feel. Outsole :- The Rubber Outsole With
          Perfect Grip And Durability.
        </p>
      </div>
    </>
  );
}
