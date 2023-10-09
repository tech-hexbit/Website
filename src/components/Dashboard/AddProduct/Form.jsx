import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "../../../store/auth-context";

// img
import upload from "./../../../assets/dashboard/upload.svg";

// css
import FCss from "./Css/Form.module.css";

export default function Form() {
  const [PublishOpen, setPublishOpen] = useState(true);
  const [ServiceOpen, setServiceOpen] = useState(false);
  const [image, setImage] = useState();
  const [data, setData] = useState({
    name: "",
    symbol:
      "https://beebom.com/wp-content/uploads/2021/07/rog-phone-5-review-2.jpg?quality=75&strip=all",
    short_desc: "",
    long_desc: "",
    images: [],
    maximumCount: 0,
    value: 0,
    maximum_value: 0,
    category_id: "",
    fulfillment_id: 1,
    location_id: "asus-store-location-id-1",
    ondcOrgreturnable: true,
    ondcOrgcancellable: true,
    ondcOrgreturn_window: "P7D",
    ondcOrgseller_pickup_return: false,
    ondcOrgtime_to_ship: "PT45M",
    ondcOrgavailable_on_cod: false,
    ondcOrgcontact_details_consumer_care:
      "Ramesh1, Koramangala, Bengaluru, ramesh@abc.com, 9876543210",
    manufacturer_or_packer_name: "",
    brand_name: "",
    Discounts: "",
    Sizes: "",
    Colors: "",
    manufacturer_or_packer_address: "123, xyz street, Bengaluru",
    common_or_generic_name_of_commodity: "asus shoe 1",
    net_quantity_or_measure_of_commodity_in_pkg: 121,
    month_year_of_manufacture_packing_import: "08/2022",
    nutritional_info:
      "Energy(KCal)-(per 100kg) 420, (per serving 50g)250; Protein(g)-(per 100kg) 12, (per serving 50g) 6",
    additives_info: "",
    brand_owner_FSSAI_license_no: "1234567890",
    other_FSSAI_license_no: "1234567890",
    importer_FSSAI_license_no: "1234567890",
    net_quantity: "120g",
    veg: false,
    non_veg: false,
    Status: "",
    Visibility: "",
    schedule_Date_and_time: "",
  });

  const authCtx = useContext(AuthContext);

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
  console.log(data);

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    value
      ? setData({ ...data, veg: true, non_veg: false })
      : setData({ ...data, veg: false, non_veg: true });
  };

  const onSubmit = async () => {
    data.StoreID = authCtx.user.StoreID;
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("images", image);
    // console.log(formData);
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    try {
      const response = await axios.post(
        "/api/common/product/AddProduct",
        formData,
        {
          headers: {
            // "Content-Type": "multipart/form-data",
            Authorization: `${authCtx.token}`,
          },
        }
      );

      if (response.data.success) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
    console.log(image);
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

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
                    name="additives_info"
                    id=""
                    cols="30"
                    rows="10"
                    value={data.additives_info}
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

                  <select name="ondcOrgreturnable" id="" className={FCss.inp}>
                    <option value="" hidden selected>
                      Select the item Returnable
                    </option>
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
          {/* <div className={FCss.addImgDiv}> */}
          <div>
            <input type="file" name="images" onChange={handleImage} />
            {/* <p>+</p> */}
          </div>
        </div>
      </div>

      <div className={FCss.SubmitBtnDiv}>
        <p className={FCss.SubmitBtn} onClick={onSubmit}>
          Submit
        </p>
      </div>
    </div>
  );
}
