import React, { useState, useEffect } from "react";

// img
import upload from "./../../../assets/dashboard/upload.svg";

// css
import FCss from "./Css/Form.module.css";

export default function Form() {
  const [PublishOpen, setPublishOpen] = useState(true);
  const [ServiceOpen, setServiceOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    symbol: "",
    short_desc: "",
    long_desc: "",
    images: "",
    maximumCount: "",
    value: "",
    maximum_value: "",
    category_id: "",
    fulfillment_id: "",
    location_id: "",
    ondcOrgreturnable: "",
    ondcOrgcancellable: "",
    ondcOrgreturn_window: "",
    ondcOrgseller_pickup_return: "",
    ondcOrgtime_to_ship: "",
    ondcOrgavailable_on_cod: "",
    ondcOrgcontact_details_consumer_care: "",
    manufacturer_or_packer_name: "",
    brand_name: "",
    Discounts: "",
    Sizes: "",
    Colors: "",
    manufacturer_or_packer_address: "",
    common_or_generic_name_of_commodity: "",
    net_quantity_or_measure_of_commodity_in_pkg: "",
    month_year_of_manufacture_packing_import: "",
    nutritional_info: "",
    additives_info: "",
    brand_owner_FSSAI_license_no: "",
    other_FSSAI_license_no: "",
    importer_FSSAI_license_no: "",
    net_quantity: "",
    veg: false,
    non_veg: false,
    Status: "",
    Visibility: "",
    schedule_Date_and_time: "",
  });

  const openModal = (msg) => {
    if (msg === "Service") {
      setPublishOpen(!PublishOpen);
      setServiceOpen(!ServiceOpen);
    } else if (msg === "Publish") {
      setPublishOpen(!PublishOpen);
      setServiceOpen(!ServiceOpen);
    }
  };

  const updateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    value
      ? setData({ ...data, veg: true, non_veg: false })
      : setData({ ...data, veg: false, non_veg: true });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <div className={FCss.mDiv}>
        <div className={FCss.left}>
          {/* Name */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Product title</p>
            <input
              type="text"
              name="name"
              id=""
              value={data.name}
              placeholder="Enter product title"
              className={FCss.inp}
              onChange={updateData}
            />
          </div>

          {/* Short Description */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Product Short Description</p>
            <textarea
              name="short_desc"
              id=""
              cols="30"
              rows="10"
              value={data.short_desc}
              placeholder="Write product description here..."
              className={FCss.inpTA}
              onChange={updateData}
            ></textarea>
          </div>

          {/* Long Description */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Product Long Description</p>
            <textarea
              name="long_desc"
              id=""
              cols="30"
              rows="10"
              value={data.long_desc}
              placeholder="Write product description here..."
              className={FCss.inpTA}
              onChange={updateData}
            ></textarea>
          </div>

          <p className={FCss.labelMain}>General info</p>

          {/* Name */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Manufacturer name</p>
            <input
              type="text"
              name="manufacturer_or_packer_name"
              id=""
              value={data.manufacturer_or_packer_name}
              placeholder="Enter Manufacturer name"
              className={FCss.inp}
              onChange={updateData}
            />
          </div>

          {/* Brand */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Brand</p>
            <input
              type="text"
              name="brand_name"
              id=""
              value={data.brand_name}
              placeholder="Enter brand name"
              className={FCss.inp}
              onChange={updateData}
            />
          </div>

          {/* Price */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Material Requirements Planning price</p>
            <input
              type="number"
              name="maximum_value"
              id=""
              value={data.maximum_value}
              placeholder="Enter price"
              className={FCss.inp}
              onChange={updateData}
            />
          </div>

          {/* Stock */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Stocks</p>
            <input
              type="number"
              name="maximumCount"
              id=""
              value={data.maximumCount}
              onChange={updateData}
              placeholder="Total Stocks"
              className={FCss.inp}
            />
          </div>

          {/* Discounts */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Discounts / Offers (in %)</p>
            <input
              type="number"
              name="Discounts"
              id=""
              value={data.Discounts}
              placeholder="Enter discounts/offers (if any)"
              className={FCss.inp}
              onChange={updateData}
            />
          </div>

          {/* Sizes */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Sizes available</p>
            <input
              type="text"
              name="Sizes"
              id=""
              value={data.Sizes}
              placeholder="Enter the different sizes available"
              className={FCss.inp}
              onChange={updateData}
            />
          </div>

          {/* Colors */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Colors</p>
            <input
              type="text"
              name="Colors"
              id=""
              value={data.Colors}
              placeholder="Enter the different colors available"
              className={FCss.inp}
              onChange={updateData}
            />
          </div>

          {/* Veg */}
          <div className={FCss.inpDiv}>
            <p className={FCss.label}>Veg</p>

            <select
              name="veg"
              id=""
              className={FCss.inp}
              onChange={handleSelectChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </div>

        <div className={FCss.right}>
          {/* Publish */}
          <>
            <p
              className={FCss.labelMainArrowPTag}
              onClick={() => {
                openModal("Publish");
              }}
            >
              <b>Publish</b>

              {PublishOpen ? (
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
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              ) : (
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
                  class="lucide lucide-chevron-up"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              )}
            </p>

            {PublishOpen ? (
              <>
                {/* Status */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Status</p>

                  <select
                    name="Status"
                    id=""
                    className={FCss.inp}
                    onChange={updateData}
                  >
                    <option value="" hidden selected>
                      Selete the Status
                    </option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>

                {/* Visibility */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Visibility</p>

                  <select
                    name="Visibility"
                    id=""
                    className={FCss.inp}
                    onChange={updateData}
                  >
                    <option value="" selected hidden>
                      Select the Visibility
                    </option>
                    <option value="Public">Public</option>
                  </select>
                </div>

                <p className={FCss.labelMain}>Publish schedule</p>

                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Select date & time</p>

                  <select
                    name="schedule_Date_and_time"
                    id=""
                    className={FCss.inp}
                    onChange={updateData}
                  >
                    <option value="" selected hidden>
                      Select date and time
                    </option>
                    <option value="Public">Enter date</option>
                  </select>
                </div>

                <p className={FCss.labelMain}>Product category</p>

                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Select product category</p>

                  <select
                    name="category_id"
                    id=""
                    className={FCss.inp}
                    onChange={updateData}
                  >
                    <option value="" selected hidden>
                      Select the Category
                    </option>
                    <option value="Fashion">Fashion</option>
                  </select>
                </div>

                <p className={FCss.labelMain}>Product Tags</p>

                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>
                    Enter tags related to your products
                  </p>

                  <div className={FCss.inpTag}>
                    <div className={FCss.TagP}>
                      <p>Fashion</p> <p className={FCss.CloseX}>X</p>
                    </div>
                  </div>
                </div>

                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Additional text</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter additional text description of the product"
                    className={FCss.inpTA}
                    onChange={updateData}
                  ></textarea>
                </div>
              </>
            ) : (
              ""
            )}
          </>

          {/* Service */}
          <>
            <p
              className={FCss.labelMainArrowPTag}
              onClick={() => {
                openModal("Service");
              }}
            >
              <b>Service</b>

              {ServiceOpen ? (
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
                  class="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              ) : (
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
                  class="lucide lucide-chevron-up"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              )}
            </p>

            {ServiceOpen ? (
              <>
                {/* Returnable */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Returnable</p>

                  <select name="" id="" className={FCss.inp}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>

                {/* Cancellable */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Cancellable</p>

                  <select name="" id="" className={FCss.inp}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>

                {/* Return Window */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Return Window</p>

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ex: P7D"
                    className={FCss.inp}
                  />
                </div>

                {/* Pickup Return */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Pickup Return</p>

                  <select name="" id="" className={FCss.inp}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>

                {/* Time To Ship */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Time To Ship</p>

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ex: PT45M"
                    className={FCss.inp}
                  />
                </div>

                {/* COD */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>Cash On Delivery(COD)</p>

                  <select name="" id="" className={FCss.inp}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>

                {/* Time To Ship */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>
                    Net Quantity/Measure Of Commodity (in Kg)
                  </p>

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ex: 121"
                    className={FCss.inp}
                  />
                </div>

                {/* Month/Year of Manufacture Packing Import */}
                <div className={FCss.inpDiv}>
                  <p className={FCss.label}>
                    Month/Year of Manufacture Packing Import
                  </p>

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="08/2022"
                    className={FCss.inp}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </>
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

      <div className={FCss.SubmitBtnDiv}>
        <p className={FCss.SubmitBtn}>Submit</p>
      </div>
    </div>
  );
}
