import React, { useState, useContext, useEffect } from "react";

// components
import UpdateLabel from "./UpdateLabel";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import DCss from "./Css/Des.module.css";

export default function Des(props) {
  const [edit, setEdit] = useState(false);
  const [editDesState, setEditDes] = useState("");

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

      if (response.data.success) {
        props.setChange(true);

        authCtx.showAlert({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Updated",
        });
      } else {
        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Update Failed",
        });
      }
    } catch (e) {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Poduct Addition Failed",
      });

      console.log(e);
    }
  };

  useEffect(() => {
    console.log(props.res.domain);
  }, []);

  return (
    <>
      {/* <div className={DCss.mDiv}>
        <p className={DCss.subTitlePTag}>
          Description :
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
                className={DCss.submitBtn}
                onClick={() => {
                  changePost("descriptor.short_desc");
                }}
              >
                Submit
              </button>
            </>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: props.res.descriptor.short_desc,
              }}
            />
          )}
        </p>
      </div> */}

      {/* <div className={DCss.desDiv2}>
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
      </div> */}

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
            <UpdateLabel
              crrValue={props.res.category_id}
              id={props.id}
              fieldName="category_id"
              placeholder="Updated Category"
              type="text"
              setChange={props.setChange}
            />
          </tr>
          {props.res.domain === "ONDC:RET10" && (
            <tr>
              <td className={DCss.headingName}>Brand :</td>
              <UpdateLabel
                crrValue={
                  props.res["@ondc/org/statutory_reqs_packaged_commodities"][
                    "manufacturer_or_packer_name"
                  ]
                }
                id={props.id}
                fieldName="@ondc/org/statutory_reqs_packaged_commodities.manufacturer_or_packer_name"
                placeholder="Updated Name"
                type="text"
                setChange={props.setChange}
              />
            </tr>
          )}

          {props.res.domain === "ONDC:RET10" && (
            <tr>
              <td className={DCss.headingName}>Weight :</td>
              <UpdateLabel
                crrValue={
                  props.res["@ondc/org/mandatory_reqs_veggies_fruits"]
                    .net_quantity
                }
                id={props.id}
                fieldName="@ondc/org/mandatory_reqs_veggies_fruits.net_quantity"
                placeholder="Updated Quantity"
                type="text"
                setChange={props.setChange}
              />
            </tr>
          )}

          <tr>
            <td className={DCss.headingName}>Returnable :</td>
            <UpdateLabel
              crrValue={props.res["@ondc/org/returnable"]}
              id={props.id}
              fieldName="@ondc/org/returnable"
              placeholder="Select the Return Type"
              type="select"
              setChange={props.setChange}
            />
          </tr>
          <tr>
            <td className={DCss.headingName}>Cancellable :</td>
            <UpdateLabel
              crrValue={props.res["@ondc/org/cancellable"]}
              id={props.id}
              fieldName="@ondc/org/cancellable"
              placeholder="Select the Cancellable Type"
              type="select"
              setChange={props.setChange}
            />
          </tr>
          <tr>
            <td className={DCss.headingName}>Return Window :</td>
            <UpdateLabel
              crrValue={props.res["@ondc/org/return_window"]}
              id={props.id}
              fieldName="@ondc/org/return_window"
              placeholder="Updated Return Window"
              type="text"
              setChange={props.setChange}
            />
          </tr>
          <tr>
            <td className={DCss.headingName}>Seller Pickup Return :</td>
            <UpdateLabel
              crrValue={props.res["@ondc/org/seller_pickup_return"]}
              id={props.id}
              fieldName="@ondc/org/seller_pickup_return"
              placeholder="Select the PickUp Type"
              type="select"
              setChange={props.setChange}
            />
          </tr>
          <tr>
            <td className={DCss.headingName}>Time To Ship :</td>
            <UpdateLabel
              crrValue={props.res["@ondc/org/time_to_ship"]}
              id={props.id}
              fieldName="@ondc/org/time_to_ship"
              placeholder="Updated Shipping Time"
              type="text"
              setChange={props.setChange}
            />
          </tr>
          <tr>
            <td className={DCss.headingName}>Available on COD :</td>
            <UpdateLabel
              crrValue={props.res["@ondc/org/available_on_cod"]}
              id={props.id}
              fieldName="@ondc/org/available_on_cod"
              placeholder="Select the COD"
              type="select"
              setChange={props.setChange}
            />
          </tr>
        </table>
      </div>
    </>
  );
}
