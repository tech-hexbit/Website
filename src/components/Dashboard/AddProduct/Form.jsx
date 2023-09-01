import React from "react";

// img
import upload from "./../../../assets/dashboard/upload.svg";

// css
import FCss from "./Css/Form.module.css";

export default function Form() {
  return (
    <div>
      <div className={FCss.mDiv}>
        <div className={FCss.left}>
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Product title</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter product title"
              className={FCss.inp}
            />
          </div>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Product Description</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write product description here..."
              className={FCss.inpTA}
            ></textarea>
          </div>

          <p className={FCss.labelMain}>General info</p>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Manufacturer name</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Manufacturer name"
              className={FCss.inp}
            />
          </div>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Brand</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter brand name"
              className={FCss.inp}
            />
          </div>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Original price</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter price"
              className={FCss.inp}
            />
          </div>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Discounts / Offers</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter discounts/offers if any"
              className={FCss.inp}
            />
          </div>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Sizes available</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter the different sizes available"
              className={FCss.inp}
            />
          </div>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Colors</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter the different colors available"
              className={FCss.inp}
            />
          </div>
        </div>
        <div className={FCss.right}>
          <p className={FCss.labelMain}>Publish</p>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Status</p>

            <select name="" id="" className={FCss.inp}>
              <option value="Draft">Draft</option>
            </select>
          </div>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Visibility</p>

            <select name="" id="" className={FCss.inp}>
              <option value="Public">Public</option>
            </select>
          </div>

          <p className={FCss.labelMain}>Publish schedule</p>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Select date & time</p>

            <select name="" id="" className={FCss.inp}>
              <option value="Public">Enter date</option>
            </select>
          </div>

          <p className={FCss.labelMain}>Product category</p>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Select product category</p>

            <select name="" id="" className={FCss.inp}>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          <p className={FCss.labelMain}>Product Tags</p>

          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Enter tags related to your products</p>

            <div className={FCss.inpTag}>
              <div className={FCss.TagP}>
                <p>Fashion</p> <p className={FCss.CloseX}>X</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={FCss.inpDiv}>
        <p className={FCss.label}>Product image</p>

        <p className={FCss.labelDes}>Add the product main image</p>
        <div className={FCss.addimgDivMain}>
          <div className={FCss.addImgDiv}>
            <p>+</p>
          </div>
        </div>

        <p className={FCss.labelDes}>Add additional product images</p>

        <div className={FCss.addimgDivMain}>
          <div className={FCss.upAddImg}>
            <img src={upload} alt="" srcset="" />
            <p className={FCss.upAddImgDragPTag}>
              Drag and drop files here OR click to upload
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
