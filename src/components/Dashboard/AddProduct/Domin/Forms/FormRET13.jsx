/* eslint-disable no-unused-vars */
import { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
// import Service from "../Service";
import FixValues from "../FixValues";
import GeneralInfo from "./RET12GeneralInfo";
import ProductCategory from "./ProductCategory";
import ProdParticulars from "../ProdParticulars";
// import Attributes from "./Attributes";
import MultipleImageHandler from "../../MultipleImageHandler";
// import InfoSubjective from "../InfoSubjective";

// import Dropdown from "./Dropdown";

// MicroInteraction
import Load from "../../../../../MicroInteraction/Load";
import optionsData from "../Json/optionsDataRET13.json"
// import sizeData from "../Json/size.json"

// axios
import axios from "axios";

// state
import AuthContext from "../../../../../store/auth-context";

// css
import FCss from "../Css/Form.module.css";
// import PrCss from "../Css/Lable.module.css";
import ItCss from "../Input/Css/InputType1.module.css";


export default function Form() {
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
    // variants: [],
    // isParent: false,
    Discounts: "",
    brand_name: "",
    maximumCount: 0,
    maximum_value: 0,
    manufacturer_or_packer_name: "",
    tags: [],
    category_id: "",
    additives_info: "",
    month_year_of_manufacture_packing_import: "na",
    net_quantity_or_measure_of_commodity_in_pkg: "na",
    ondcOrgavailable_on_cod: "",
    ondcOrgreturn_window: "",
    ondcOrgseller_pickup_return: "",
    ondcOrgtime_to_ship: "",
    ondcOrgcancellable: "",
    ondcOrgreturnable: "",
    manufacturer_or_packer_address: "",
    fulfillment_id: 1,
    nutritional_info: "na",
    other_FSSAI_license_no: "",
    importer_FSSAI_license_no: "",
    brand_owner_FSSAI_license_no: "",
    ondcOrgcontact_details_consumer_care: "",
    common_or_generic_name_of_commodity: "",
    StoreID: authCtx.user.Store[0].StoreID._id,
  });

  const onSubmit = async () => {
    // setLoad(true);

    // console.log(multipleImageUpload);

    // // console.log("domain - " + data.domain);

    // if (!imageUpload) {
    //   setLoad(false);

    //   authCtx.showAlert({
    //     mainColor: "#FDEDED",
    //     secondaryColor: "#F16360",
    //     symbol: "error",
    //     title: "Error",
    //     text: "Please select an Image",
    //   });
    //   return;
    // }

    // const {
    //   Discounts,
    //   StoreID,
    //   additives_info,
    //   brand_name,
    //   brand_owner_FSSAI_license_no,
    //   category_id,
    //   common_or_generic_name_of_commodity,
    //   fulfillment_id,
    //   images,
    //   importer_FSSAI_license_no,
    //   isParent,
    //   long_desc,
    //   manufacturer_or_packer_address,
    //   manufacturer_or_packer_name,
    //   maximumCount,
    //   maximum_value,
    //   month_year_of_manufacture_packing_import,
    //   name,
    //   net_quantity_or_measure_of_commodity_in_pkg,
    //   // Remove this
    //   nutritional_info,
    //   ondcOrgavailable_on_cod,
    //   ondcOrgcancellable,
    //   ondcOrgcontact_details_consumer_care,
    //   ondcOrgreturn_window,
    //   ondcOrgreturnable,
    //   ondcOrgseller_pickup_return,
    //   ondcOrgtime_to_ship,
    //   other_FSSAI_license_no,
    //   short_desc,
    //   tags,
    //   variants
    // } = data;
    // const domain = "ONDC:RET12";
    // if (
    //   name !== "" &&
    //   images !== "" &&
    //   long_desc !== "" &&
    //   short_desc !== "" &&
    //   Discounts !== "" &&
    //   brand_name !== "" &&
    //   maximumCount !== "" &&
    //   maximum_value !== "" &&
    //   manufacturer_or_packer_name !== "" &&
    //   tags !== "" &&
    //   category_id !== "" &&
    //   additives_info !== "" &&
    //   month_year_of_manufacture_packing_import !== "" &&
    //   net_quantity_or_measure_of_commodity_in_pkg !== "" &&
    //   ondcOrgavailable_on_cod !== "" &&
    //   ondcOrgreturn_window !== "" &&
    //   ondcOrgseller_pickup_return !== "" &&
    //   ondcOrgtime_to_ship !== "" &&
    //   ondcOrgcancellable !== "" &&
    //   ondcOrgreturnable !== "" &&
    //   domain !== "" &&
    //   manufacturer_or_packer_address !== "" &&
    //   fulfillment_id !== "" &&
    //   variants.length > 0 &&
    //   isParent !== "" &&
    //   nutritional_info !== "" &&
    //   other_FSSAI_license_no !== "" &&
    //   importer_FSSAI_license_no !== "" &&
    //   brand_owner_FSSAI_license_no !== "" &&
    //   ondcOrgcontact_details_consumer_care !== "" &&
    //   common_or_generic_name_of_commodity !== "" &&
    //   StoreID
    // ) {
    //   const formData = new FormData();
    //   const updatedData = { ...data, domain };
    //   formData.append("data", JSON.stringify(updatedData));
    //   if (imageUpload) {
    //     formData.append("images", imageUpload);
    //   }

    //   if (multipleImageUpload) {
    //     for (let i = 0; i < multipleImageUpload.length; i++) {
    //       formData.append("images", multipleImageUpload[i]);
    //     }
    //   }

    //   for (var key of formData.entries()) {
    //     console.log(key[0] + ", " + key[1]);
    //   }

    //   try {
    //     console.log("success till here")
    //     const response = await axios.post(
    //       "/api/common/product/AddProduct",
    //       formData,
    //       { headers: { Authorization: `${authCtx.token}` } }
    //     );
    //     console.log(response);
    //     if (response.data.message === "All Items Saved" || response.data.message === "Add Product" ||  response.data.message === "Product added successfully") {
    //       setLoad(false);
    //       authCtx.showAlert({
    //         mainColor: "#EDFEEE",
    //         secondaryColor: "#5CB660",
    //         symbol: "check_circle",
    //         title: "Success",
    //         text: "Successfully Added",
    //       });
    //       setData({
    //         name: "",
    //         images: [],
    //         long_desc: "",
    //         short_desc: "",
    //         variants: [],
    //         isParent: false,
    //         Discounts: "",
    //         brand_name: "",
    //         maximumCount: 0,
    //         maximum_value: 0,
    //         manufacturer_or_packer_name: "",
    //         tags: [],
    //         category_id: "",
    //         additives_info: "",
    //         month_year_of_manufacture_packing_import: "na",
    //         net_quantity_or_measure_of_commodity_in_pkg: "na",
    //         ondcOrgavailable_on_cod: "",
    //         ondcOrgreturn_window: "",
    //         ondcOrgseller_pickup_return: "",
    //         ondcOrgtime_to_ship: "",
    //         ondcOrgcancellable: "",
    //         ondcOrgreturnable: "",
    //         manufacturer_or_packer_address: "",
    //         fulfillment_id: 1,
    //         nutritional_info: "na",
    //         other_FSSAI_license_no: "",
    //         importer_FSSAI_license_no: "",
    //         brand_owner_FSSAI_license_no: "",
    //         ondcOrgcontact_details_consumer_care: "",
    //         common_or_generic_name_of_commodity: "",
    //         StoreID: authCtx.user.Store[0].StoreID._id
    //       });
    //     } else {
    //       setLoad(false);
    //       authCtx.showAlert({
    //         mainColor: "#FDEDED",
    //         secondaryColor: "#F16360",
    //         symbol: "error",
    //         title: "Error",
    //         text: "Poduct Addition Failed",
    //       });
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     setLoad(false);
    //     authCtx.showAlert({
    //       mainColor: "#FDEDED",
    //       secondaryColor: "#F16360",
    //       symbol: "error",
    //       title: "Error",
    //       text: "Poduct Addition Failed",
    //     });
    //   }
    // } else {
    //   setLoad(false);
    //   console.log(data)

    //   authCtx.showAlert({
    //     mainColor: "#FFC0CB",
    //     secondaryColor: "#FF69B4",
    //     symbol: "pets",
    //     title: "Check it out",
    //     text: "Please Fill All The Details",
    //   });
    // }
  };

  const handleClick = () => {
    fileInp.current.click();
  };

  const handleImage = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // useEffect(() => {
  //   setData({ ...data, ["variants"]: [] });
  // }, [data.category_id])

  // useEffect(() => {
  //   if (data.isParent === false && data.variants.length > 1) {
  //     const updatedVariants = data.variants[0];
  //     setData({ ...data, ["variants"]: [updatedVariants] });
  //   }
  // }, [data.isParent])

  return (
    <>
      <ProdParticulars showData={data} setData={setData} />

      {/* Category */}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Category</p>
        <select
          name="category_id"
          id=""
          className={ItCss.inp}
          onChange={handleSelectChange}
        >
          <option value="Selected" selected disabled hidden>
            Select
          </option>
          {Object.keys(optionsData.categories).map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className={FCss.rowDIv}>
        <div className={FCss.rowDIvLeft}>
          <GeneralInfo showData={data} setData={setData} />
        </div>
        <div className={FCss.rowDIvRight}>
          <FixValues showData={data} setData={setData} />
        </div>
      </div>
      <ProductCategory showData={data} setData={setData} />

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
  // domain: PropTypes.string.isRequired,
};
