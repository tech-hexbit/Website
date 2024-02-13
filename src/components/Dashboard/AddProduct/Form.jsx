import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
import Service from "./Service";
import FixValues from "./FixValues";
import GeneralInfo from "./GeneralInfo";
// import SubjectiveInfo from "./SubjectiveInfo";
import InfoSubjective from "./InfoSubjective";
import ProductCategory from "./ProductCategory";
import ProdParticulars from "./ProdParticulars";
import MultipleImageHandler from "./MultipleImageHandler";

// MicroInteraction
import Load from "./../../../MicroInteraction/Load";
import { Alert } from "./../../../MicroInteraction/Alert";

// axios
import axios from "axios";

// state
import AuthContext from "../../../store/auth-context";

// css
import FCss from "./Css/Form.module.css";

export default function Form({ domain }) {
  const [load, setLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState();
  const [multipleImageUpload, setMultipleImageUpload] = useState([]);
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
    symbol: "",
    images: [],
    long_desc: "",
    short_desc: "",
    veg: "",
    non_veg: "",
    Discounts: "",
    brand_name: "",
    maximumCount: 0,
    maximum_value: 0,
    manufacturer_or_packer_name: "",
    tags: [],
    category_id: "",
    additives_info: "",
    month_year_of_manufacture_packing_import: "",
    net_quantity_or_measure_of_commodity_in_pkg: "",
    ondcOrgavailable_on_cod: false,
    ondcOrgreturn_window: "",
    ondcOrgseller_pickup_return: "",
    ondcOrgtime_to_ship: "",
    ondcOrgcancellable: true,
    ondcOrgreturnable: true,
    domain: "",

    // location_id: "hexbit-store-location-id-1",
    fulfillment_id: 1,
    net_quantity: "",
    nutritional_info: "",

    // Sizes: "",
    // Colors: "",
    other_FSSAI_license_no: "",
    importer_FSSAI_license_no: "",
    brand_owner_FSSAI_license_no: "",
    manufacturer_or_packer_address: "",
    common_or_generic_name_of_commodity: "",
    ondcOrgcontact_details_consumer_care: "",
    // Status: "",
    // Visibility: "",
    // schedule_Date_and_time: "",
    StoreID: authCtx.user.Store[0].StoreID._id,
  });

  const onSubmit = async () => {
    setLoad(true);

    console.log(multipleImageUpload);

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
      name !== "" &&
      symbol !== "" &&
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
      schedule_Date_and_time !== ""
    ) {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (imageUpload) {
        formData.append("images", imageUpload);
      }

      if (multipleImageUpload) {
        for (let i = 0; i < multipleImageUpload.length; i++) {
          formData.append("images", multipleImageUpload[i]);
        }
      }

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
            StoreID: authCtx.user.Store[0].StoreID._id,
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

  const handleClick = () => {
    fileInp.current.click();
  };

  const handleImage = (e) => {
    setImageUpload(e.target.files[0]);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <ProdParticulars showData={data} setData={setData} />

      <div className={FCss.rowDIv}>
        <div className={FCss.rowDIvLeft}>
          <GeneralInfo showData={data} setData={setData} />
        </div>
        <div className={FCss.rowDIvRight}>
          <ProductCategory showData={data} setData={setData} />
          <Service showData={data} setData={setData} />
        </div>
      </div>

      <FixValues showData={data} setData={setData} />
      <InfoSubjective showData={data} setData={setData} />

      {/* Image */}
      <div className={FCss.inpDiv}>
        <p className={FCss.label}>Product image</p>

        <p className={FCss.labelDes}>Add the product thumbnail</p>
        <div className={FCss.addimgDivMain}>
          <input
            type="file"
            name="file"
            onChange={handleImage}
            style={{ display: "none" }}
            ref={fileInp}
          />

          <div className={FCss.addImgDiv} onClick={handleClick}>
            {imageUpload ? (
              <img
                src={URL.createObjectURL(imageUpload)}
                alt=""
                className={FCss.prevImg}
              />
            ) : (
              <div className={FCss.textCenter}>
                <p className={FCss["dropzone-content"]}>+</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <MultipleImageHandler
        multipleImageUpload={multipleImageUpload}
        setMultipleImageUpload={setMultipleImageUpload}
      />
      <div className={FCss.SubmitBtnDiv}>
        <p className={FCss.SubmitBtn} onClick={onSubmit}>
          {load ? <Load /> : "Submit"}
        </p>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

Form.propTypes = {
  domain: PropTypes.string.isRequired,
};
