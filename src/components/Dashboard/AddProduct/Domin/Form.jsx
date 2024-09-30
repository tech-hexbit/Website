import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// component
import Service from "./Service";
import FixValues from "./FixValues";
import GeneralInfo from "./GeneralInfo";
import InfoSubjective from "./InfoSubjective";
import ProductCategory from "./ProductCategory";
import ProdParticulars from "./ProdParticulars";
import MultipleImageHandler from "./../MultipleImageHandler";

// MicroInteraction
import Load from "./../../../../MicroInteraction/Load";

// axios
import axios from "axios";

// state
import AuthContext from "../../../../store/auth-context";

// css
import FCss from "./Css/Form.module.css";

export default function Form({ domain }) {
  const [load, setLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState();
  const [multipleImageUpload, setMultipleImageUpload] = useState([]);

  const fileInp = useRef(null);

  const authCtx = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
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
    ondcOrgavailable_on_cod: "",
    ondcOrgreturn_window: "",
    ondcOrgseller_pickup_return: "",
    ondcOrgtime_to_ship: "",
    ondcOrgcancellable: "",
    ondcOrgreturnable: "",
    domain: "",
    manufacturer_or_packer_address: "",
    fulfillment_id: 1,
    nutritional_info: "",
    other_FSSAI_license_no: "",
    importer_FSSAI_license_no: "",
    brand_owner_FSSAI_license_no: "",
    ondcOrgcontact_details_consumer_care: "",
    common_or_generic_name_of_commodity: "",
    StoreID: authCtx.user.Store[0].StoreID._id,
  });

  const onSubmit = async () => {
    setLoad(true);
  
    console.log(multipleImageUpload);
    console.log("domain - " + data.domain);
  
    if (!imageUpload) {
      setLoad(false);
  
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please select an Image",
      });
      return;
    }
  
    const {
      name,
      long_desc,
      short_desc,
      veg,
      non_veg,
      Discounts,
      brand_name,
      maximumCount,
      maximum_value,
      manufacturer_or_packer_name,
      tags,
      category_id,
      additives_info,
      month_year_of_manufacture_packing_import,
      net_quantity_or_measure_of_commodity_in_pkg,
      ondcOrgavailable_on_cod,
      ondcOrgreturn_window,
      ondcOrgseller_pickup_return,
      ondcOrgtime_to_ship,
      ondcOrgcancellable,
      ondcOrgreturnable,
      domain,
      manufacturer_or_packer_address,
      fulfillment_id,
      nutritional_info,
      other_FSSAI_license_no,
      importer_FSSAI_license_no,
      brand_owner_FSSAI_license_no,
      ondcOrgcontact_details_consumer_care,
      common_or_generic_name_of_commodity,
      StoreID,
    } = data;
  
    // Validate required fields
    if (
      name !== "" &&
      long_desc !== "" &&
      short_desc !== "" &&
      veg !== "" &&
      non_veg !== "" &&
      Discounts !== "" &&
      brand_name !== "" &&
      maximumCount !== 0 && // Changed to check against 0 for maximumCount
      maximum_value !== 0 && // Changed to check against 0 for maximum_value
      manufacturer_or_packer_name !== "" &&
      tags.length > 0 && // Changed to check for non-empty array for tags
      category_id !== "" &&
      additives_info !== "" &&
      month_year_of_manufacture_packing_import !== "" &&
      net_quantity_or_measure_of_commodity_in_pkg !== "" &&
      ondcOrgavailable_on_cod !== "" &&
      ondcOrgreturn_window !== "" &&
      ondcOrgseller_pickup_return !== "" &&
      ondcOrgtime_to_ship !== "" &&
      ondcOrgcancellable !== "" &&
      ondcOrgreturnable !== "" &&
      domain !== "" &&
      manufacturer_or_packer_address !== "" &&
      fulfillment_id !== "" &&
      nutritional_info !== "" &&
      other_FSSAI_license_no !== "" &&
      importer_FSSAI_license_no !== "" &&
      brand_owner_FSSAI_license_no !== "" &&
      ondcOrgcontact_details_consumer_care !== "" &&
      common_or_generic_name_of_commodity !== "" &&
      StoreID
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
  
      try {
        const response = await axios.post(
          "/api/common/product/AddProduct",
          formData,
          { headers: { Authorization: `${authCtx.token}` } }
        );
  
        console.log(response); 
  
        // Check if the response indicates success
        if (response.data.message === "Item Saved") {
          setLoad(false);
  
          authCtx.showAlert({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Successfully Added",
          });
  
          // Reset form data
          setData({
            name: "",
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
            domain: "",
            manufacturer_or_packer_address: "",
            fulfillment_id: 1,
            nutritional_info: "",
            common_or_generic_name_of_commodity: "",
            StoreID: authCtx.user.Store[0].StoreID._id,
          });
        } else {
          setLoad(false);
  
          authCtx.showAlert({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "Product Addition Failed",
          });
        }
      } catch (error) {
        console.log(error);
  
        setLoad(false);
  
        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Product Addition Failed",
        });
      }
    } else {
      setLoad(false);
  
      authCtx.showAlert({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
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
    console.table(data);
  }, [data]);

  useEffect(() => {
    if (domain !== "") {
      setData({
        ...data,
        domain,
      });
    }
  }, []);

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
    </>
  );
}

Form.propTypes = {
  domain: PropTypes.string.isRequired,
};
