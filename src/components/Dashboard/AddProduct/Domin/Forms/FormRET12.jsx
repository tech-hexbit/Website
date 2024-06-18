import { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
import Service from "../Service";
import FixValues from "../FixValues";
import GeneralInfo from "./RET12GeneralInfo";
import ProductCategory from "./ProductCategory";
import ProdParticulars from "../ProdParticulars";
import Attributes from "./Attributes";
import MultipleImageHandler from "../../MultipleImageHandler";
import InfoSubjective from "../InfoSubjective";

// MicroInteraction
import Load from "../../../../../MicroInteraction/Load";
import optionsData from "../Json/optionsData.json"

// axios
import axios from "axios";

// state
import AuthContext from "../../../../../store/auth-context";

// css
import FCss from "../Css/Form.module.css";
import PrCss from "../Css/Lable.module.css";
import ItCss from "../Input/Css/InputType1.module.css";


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
    // veg: "",
    // non_veg: "",
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
      images,
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
      manufacturer_or_packer_address,
      fulfillment_id,
      nutritional_info,
      other_FSSAI_license_no,
      importer_FSSAI_license_no,
      brand_owner_FSSAI_license_no,
      ondcOrgcontact_details_consumer_care,
      common_or_generic_name_of_commodity,
      variants,
      StoreID,
    } = data;
    const gender = variants?.gender ?? '';
    const colour = variants?.colour ?? '';
    const size = variants?.size ?? '';
    if (
      gender !== "" &&
      colour !== "" &&
      size !== "" &&
      name !== "" &&
      images !== "" &&
      long_desc !== "" &&
      short_desc !== "" &&

      // hata do
      // veg !== "" &&
      // non_veg !== "" &&
      //

      Discounts !== "" &&
      brand_name !== "" &&
      maximumCount !== "" &&
      maximum_value !== "" &&
      manufacturer_or_packer_name !== "" &&
      tags !== "" &&
      category_id !== "" &&
      additives_info !== "" &&

      // Hata do
      // month_year_of_manufacture_packing_import !== "" &&
      // net_quantity_or_measure_of_commodity_in_pkg !== "" &&
      // 
      ondcOrgavailable_on_cod !== "" &&
      ondcOrgreturn_window !== "" &&
      ondcOrgseller_pickup_return !== "" &&
      ondcOrgtime_to_ship !== "" &&
      ondcOrgcancellable !== "" &&
      ondcOrgreturnable !== "" &&
      domain !== "" &&
      manufacturer_or_packer_address !== "" &&
      fulfillment_id !== "" &&

      // Hata do
      // nutritional_info !== "" &&
      //

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

      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }

      try {
        console.log("success till here")
        const response = await axios.post(
          "/api/common/product/AddProduct",
          formData,
          { headers: { Authorization: `${authCtx.token}` } }
        );

        if (response.data.success) {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Successfully Added",
          });

          // setData({
          //   gender: "",
          //   colour: "",
          //   size: "",
          //   name: "",
          //   images: [],
          //   long_desc: "",
          //   short_desc: "",
          //   veg: "",
          //   non_veg: "",
          //   Discounts: "",
          //   brand_name: "",
          //   maximumCount: 0,
          //   maximum_value: 0,
          //   manufacturer_or_packer_name: "",
          //   tags: [],
          //   category_id: "",
          //   additives_info: "",
          //   month_year_of_manufacture_packing_import: "",
          //   net_quantity_or_measure_of_commodity_in_pkg: "",
          //   domain: "",
          //   manufacturer_or_packer_address: "",
          //   fulfillment_id: 1,
          //   nutritional_info: "",
          //   common_or_generic_name_of_commodity: "",
          //   StoreID: authCtx.user.Store[0].StoreID._id,
          // });
        } else {
          setLoad(false);

          authCtx.showAlert({
            mainColor: "#FDEDED",
            secondaryColor: "#F16360",
            symbol: "error",
            title: "Error",
            text: "Poduct Addition Failed",
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
          text: "Poduct Addition Failed",
        });
      }
    } else {
      setLoad(false);
      console.log(data)

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

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    console.log(data);
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


          {/* <Service showData={data} setData={setData} /> */}
          {/* <InfoSubjective showData={data} setData={setData} /> */}
        </div>
      </div>
      <ProductCategory showData={data} setData={setData} />
      <Attributes showData={data} setData={setData} />

      {/* {data.category_id? console.log(categories[data.category_id][0]): null} */}

      {/* <div className={FCss.rowDIv}>
        <div className={FCss.rowDIvLeft}>
        </div>
        <div className={FCss.rowDIvRight}>
        </div>
      </div> */}

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
