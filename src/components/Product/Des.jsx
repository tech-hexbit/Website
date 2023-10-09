import React, { useState } from "react";

// css
import DCss from "./Css/Des.module.css";

export default function Des() {
  const [edit, setEdit] = useState(false);

  const editDes = () => {
    console.log("first");
  };
  return (
    <>
      <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>
          Description :{" "}
          <span
            onClick={() => {
              setEdit(!edit);
            }}
          >
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
              class="lucide lucide-pencil"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </span>
        </p>
        <p className={DCss.desDPTag}>
          {edit ? (
            <>
              Midsole:- Core Instant Step In Comfort Long Lasting Reponsive
              Cushionig And Super Plush Feel. Outsole :- The Rubber Outsole With
              Perfect Grip And Durability.
            </>
          ) : (
            <>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className={DCss.textareaPro}
                placeholder="Edit the Des"
              ></textarea>

              <button onClick={editDes}>Submit</button>
            </>
          )}
        </p>
      </div>

      <div className={DCss.desDiv2}>
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
      </div>

      <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>
          Special offers & product promotions :
        </p>
        <p className={DCss.desDPTag}>
          Midsole:- Core Instant Step In Comfort Long Lasting Reponsive
          Cushionig And Super Plush Feel. Outsole :- The Rubber Outsole With
          Perfect Grip And Durability.
        </p>
      </div>

      <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>Product description :</p>
        <table>
          <tr>
            <td className={DCss.headingName}>Category :</td>
            <td className={DCss.desName}>Shoes</td>
          </tr>
          <tr>
            <td className={DCss.headingName}>Brand :</td>
            <td className={DCss.desName}>Asus</td>
          </tr>
          <tr>
            <td className={DCss.headingName}>Color :</td>
            <td className={DCss.desName}>Nave Blue</td>
          </tr>
          <tr>
            <td className={DCss.headingName}>Weight :</td>
            <td className={DCss.desName}>121</td>
          </tr>
        </table>
      </div>
    </>
  );
}
