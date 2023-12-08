import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// MicroInteraction
import { Alert } from "./../../MicroInteraction/Alert";

// css
import DCss from "./Css/Des.module.css";

export default function Des(props) {
  const [editDesState, setEditDes] = useState("");
  const [edit, setEdit] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const changePost = async (value) => {
    setEdit(false);

    try {
      const input = {
        fieldName: value,
        changedValue: editDesState,
        itemID: props.id,
      };

      const response = await axios.post(
        "/api/common/product/EditProduct",
        input,
        {
          headers: {
            Authorization: `${authCtx.token}`,
          },
        }
      );

      console.log(response.data);

      if (response.data.success) {
        props.setChange(true);

        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Updated",
          val: true,
        });
      } else {
        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Update Failed",
          val: true,
        });
      }
    } catch (e) {
      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Poduct Addition Failed",
        val: true,
      });

      console.log(e);
    }
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
            className={DCss.editBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                className={DCss.textareaPro}
                placeholder="Edit the Des"
                onChange={(e) => {
                  setEditDes(e.target.value);
                }}
              ></textarea>

              <button
                onClick={() => {
                  changePost("descriptor.short_desc");
                }}
              >
                Submit
              </button>
            </>
          ) : (
            <>{props.res.descriptor.short_desc}</>
          )}
        </p>
      </div>

      <div className={DCss.desDiv2}>
        {/* <div className={DCss.mDiv}>
          <p className={DCss.subTitlePTag}>Features :</p>
          <p className={DCss.desDPTag}>
            Midsole:- Core Instant Step In Comfort Long Lasting Reponsive
            Cushionig And Super Plush Feel. Outsole :- The Rubber Outsole With
            Perfect Grip And Durability.
          </p>
        </div> */}
        {/* <div className={DCss.mDiv}>
          <p className={DCss.subTitlePTag}>Services :</p>
          <p className={DCss.desDPTag}>
            Midsole:- Core Instant Step In Comfort Long Lasting Reponsive
            Cushionig And Super Plush Feel. Outsole :- The Rubber Outsole With
            Perfect Grip And Durability.
          </p>
        </div> */}
      </div>

      {/* <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>
          Special offers & product promotions :
        </p>
        <p className={DCss.desDPTag}>
          Midsole:- Core Instant Step In Comfort Long Lasting Reponsive
          Cushionig And Super Plush Feel. Outsole :- The Rubber Outsole With
          Perfect Grip And Durability.
        </p>
      </div> */}

      <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>Product description :</p>
        <table>
          <tr>
            <td className={DCss.headingName}>Category :</td>
            <td className={DCss.desName}>{props.res.category_id}</td>
          </tr>
          <tr>
            <td className={DCss.headingName}>Brand :</td>
            <td className={DCss.desName}>
              {
                props.res["@ondc/org/statutory_reqs_packaged_commodities"][
                  "manufacturer_or_packer_name"
                ]
              }
            </td>
          </tr>
          <tr>
            <td className={DCss.headingName}>Weight :</td>
            <td className={DCss.desName}>
              {
                props.res["@ondc/org/mandatory_reqs_veggies_fruits"]
                  .net_quantity
              }
            </td>
          </tr>
        </table>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
