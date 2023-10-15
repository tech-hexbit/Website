import React, { useState, useEffect, useContext, useRef } from "react";

// components
import { Alert } from "./../../../MicroInteraction/Alert";
import Load from "./../../../MicroInteraction/Load";

// axios
import axios from "axios";

// state
import AuthContext from "../../../store/auth-context";

// css
import FCss from "./Css/Form.module.css";

export default function Form() {
  const [tags, settags] = useState([]);
  const [load, setLoad] = useState(false);
  const [tagvalue, settagvalue] = useState("");
  const [imageUpload, setImageUpload] = useState();
  const [PublishOpen, setPublishOpen] = useState(true);
  const [ServiceOpen, setServiceOpen] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const fileInp = useRef(null);

  const authCtx = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    symbol:
      "https://beebom.com/wp-content/uploads/2021/07/rog-phone-5-review-2.jpg?quality=75&strip=all",
    short_desc: "",
    long_desc: "",
    images:
      "https://beebom.com/wp-content/uploads/2021/07/rog-phone-5-review-2.jpg?quality=75&strip=all",
    maximumCount: 0,
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
    schedule_Date_and_time: "10/10/2023",
    StoreID: authCtx.user.StoreID,
  });

  const handleClick = () => {
    fileInp.current.click();
  };

  const handleImage = (e) => {
    setImageUpload(e.target.files[0]);
  };

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

  const addtags = (e) => {
    if ((e.keyCode === 13 && tagvalue) || (e.keyCode === 188 && tagvalue)) {
      settags([...tags, tagvalue]);
      settagvalue("");
    }
  };

  const deletetag = (val) => {
    let remaintags = tags.filter((t) => t != val);
    settags(remaintags);
  };

  const onSubmit = async () => {
    setLoad(true);

    if (!imageUpload) {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please select an Image",
        val: true,
      });
      return;
    }

    const {
      name,
      symbol,
      short_desc,
      long_desc,
      images,
      maximumCount,
      maximum_value,
      category_id,
      fulfillment_id,
      location_id,
      ondcOrgreturnable,
      ondcOrgcancellable,
      ondcOrgreturn_window,
      ondcOrgseller_pickup_return,
      ondcOrgtime_to_ship,
      ondcOrgavailable_on_cod,
      ondcOrgcontact_details_consumer_care,
      manufacturer_or_packer_name,
      brand_name,
      Discounts,
      Sizes,
      Colors,
      manufacturer_or_packer_address,
      common_or_generic_name_of_commodity,
      net_quantity_or_measure_of_commodity_in_pkg,
      month_year_of_manufacture_packing_import,
      nutritional_info,
      additives_info,
      brand_owner_FSSAI_license_no,
      other_FSSAI_license_no,
      importer_FSSAI_license_no,
      net_quantity,
      veg,
      non_veg,
      Status,
      Visibility,
      schedule_Date_and_time,
    } = data;

    if (
      (name !== "",
      symbol !== "",
      short_desc !== "" &&
        long_desc !== "" &&
        images !== "" &&
        maximumCount !== "" &&
        maximum_value !== 0 &&
        category_id !== "" &&
        fulfillment_id !== 0 &&
        location_id !== "" &&
        ondcOrgreturnable !== "" &&
        ondcOrgcancellable !== "" &&
        ondcOrgreturn_window !== "" &&
        ondcOrgseller_pickup_return !== "" &&
        ondcOrgtime_to_ship !== "" &&
        ondcOrgavailable_on_cod !== "" &&
        ondcOrgcontact_details_consumer_care !== "" &&
        manufacturer_or_packer_name !== "" &&
        brand_name !== "" &&
        Discounts !== "" &&
        Sizes !== "" &&
        Colors !== "" &&
        manufacturer_or_packer_address !== "" &&
        common_or_generic_name_of_commodity !== "" &&
        net_quantity_or_measure_of_commodity_in_pkg !== "" &&
        month_year_of_manufacture_packing_import !== "" &&
        nutritional_info !== "" &&
        additives_info !== "" &&
        brand_owner_FSSAI_license_no !== "" &&
        other_FSSAI_license_no !== "" &&
        importer_FSSAI_license_no !== "" &&
        net_quantity !== "" &&
        veg !== "" &&
        non_veg !== "" &&
        Status !== "" &&
        Visibility !== "" &&
        schedule_Date_and_time !== "")
    ) {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("images", imageUpload);

      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }

      try {
        const response = await axios.post(
          "/api/common/product/AddProduct",
          formData,
          { headers: { Authorization: `${authCtx.token}` } }
        );

        if (response.data.success) {
          setLoad(false);

          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Successfully Added",
            val: true,
          });

          setData({
            name: "",
            symbol:
              "https://beebom.com/wp-content/uploads/2021/07/rog-phone-5-review-2.jpg?quality=75&strip=all",
            short_desc: "",
            long_desc: "",
            images:
              "https://beebom.com/wp-content/uploads/2021/07/rog-phone-5-review-2.jpg?quality=75&strip=all",
            maximumCount: 0,
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
            schedule_Date_and_time: "10/10/2023",
            StoreID: authCtx.user.StoreID,
          });
        } else {
          setLoad(false);

          setError({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "Poduct Addition Failed",
            val: true,
          });
        }
      } catch (error) {
        console.log(error);

        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Poduct Addition Failed",
          val: true,
        });
      }
    } else {
      setLoad(false);

      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    }
  };

  return (
    <>
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
              <p className={FCss.label}>Maximum Retail Price</p>
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
                    class={FCss["lucide lucide-chevron-down"]}
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
                    class={FCss["lucide lucide-chevron-up"]}
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
                      <option value="Publish">Publish</option>
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
                      <option value="Private">Private</option>
                    </select>
                  </div>

                  <p className={FCss.labelMain}>Publish schedule</p>

                  <div className={FCss.inpDiv}>
                    <p className={FCss.label}>Select date & time</p>

                    <input
                      type="date"
                      name="schedule_Date_and_time"
                      id=""
                      className={FCss.inp}
                      onChange={updateData}
                    />
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
                      <option value="RET-12-14">RET-12-14</option>
                    </select>
                  </div>

                  <p className={FCss.labelMain}>Product Tags</p>

                  <div className={FCss.inpDiv}>
                    <p className={FCss.label}>
                      Enter tags related to your products
                    </p>

                    <div className={FCss.inpTag}>
                      {tags.map((tag, index) => (
                        <div key={index} className={FCss.TagP}>
                          <p>{tag}</p>{" "}
                          <p
                            onClick={() => deletetag(tag)}
                            className={FCss.CloseX}
                          >
                            X
                          </p>
                        </div>
                      ))}
                      <div className={FCss.inputt}>
                        <input
                          value={tagvalue}
                          type="text"
                          placeholder="Press Enter to input"
                          onChange={(e) => settagvalue(e.target.value)}
                          onKeyDown={addtags}
                        />
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
                    class={FCss["lucide lucide-chevron-down"]}
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
                    class={FCss["lucide lucide-chevron-up"]}
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
                      <option value="Select" hidden selected>
                        Select the Cancellable Method
                      </option>
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
                      <option value="Select" selected hidden>
                        Select the Pickup Return Method
                      </option>
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
                      <option value="Select" selected hidden>
                        Select the COD method
                      </option>
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
            <input
              type="file"
              name="file"
              onChange={handleImage}
              style={{ display: "none" }}
              ref={fileInp}
            />

            {imageUpload ? (
              <img
                src={URL.createObjectURL(imageUpload)}
                alt=""
                className={FCss.prevImg}
              />
            ) : (
              ""
            )}

            <div className={FCss.addImgDiv} onClick={handleClick}>
              <div className={FCss["text-center"]}>
                <p className={FCss["dropzone-content"]}>+</p>
              </div>
            </div>
          </div>
        </div>

        <div className={FCss.SubmitBtnDiv}>
          <p className={FCss.SubmitBtn} onClick={onSubmit}>
            {load ? <Load /> : "Submit"}
          </p>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
