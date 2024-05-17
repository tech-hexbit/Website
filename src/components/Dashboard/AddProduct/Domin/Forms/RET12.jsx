import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes, { bool } from "prop-types";

//component
import Service from "../Service";
import FixValues from "../FIxValuesRET12";
import GeneralInfo from "../GeneralInfoRET12";
import ProductCategory from "../ProductCategoryRET12";
import ProdParticulars from "../ProdParticularsRET12";
import MultipleImageHandler from "../../MultipleImageHandler";

// data
// import inpData from "./../Json/Ret12.json";

// MicroInteraction
import Load from "./../../../../../MicroInteraction/Load";

// axios
import axios from "axios";

// state
import AuthContext from "../../../../../store/auth-context";

// css
import FCss from "./../Css/Form.module.css";

export default function RET12({ domain }) {
  const [load, setLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState();  
  const [multipleImageUpload, setMultipleImageUpload] = useState([]);

  const fileInp = useRef(null);

  const authCtx = useContext(AuthContext);
  const [checked, setChecked] = useState(false);
  const [variants, setVariants] = useState([]);
  const [prevVariants, setPrevVariants] = useState([]);

  const [data, setData] = useState({
    isParent: checked,
    variants:[],
    parent_item_id: 0,
    name: "",
    images: [],
    long_desc: "",
    short_desc: "",
    // size: "",
    // colour: "",
    fabric: "",
    gender: "",
    size_chart: "",
    brand_name: "",
    Discounts: "",
    measureUnit: "",
    measureValue: "",
    maximum_value: 0,
    manufacturer_or_packer_name: "",
    tags: [],
    category_id: "",
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
      isParent,
      variants,
      parent_item_id,
      name,
      images,
      long_desc,
      short_desc,
      // size,
      // colour,
      fabric,
      gender,
      size_chart,
      brand_name,
      Discounts,
      measureUnit,
      measureValue,
      maximumCount,
      maximum_value,
      manufacturer_or_packer_name,
      tags,
      category_id,
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
      ondcOrgcontact_details_consumer_care,
      common_or_generic_name_of_commodity,
      StoreID,
    } = data;

    if (
      isParent == true || isParent == false &&
      variants.length > 0 &&
      parent_item_id !== "" &&
      name !== "" &&
      images !== "" &&
      long_desc !== "" &&
      short_desc !== "" &&
      // size !== "" &&
      // colour !== "" &&
      fabric !== "" &&
      gender !== "" &&
      size_chart !== "" &&
      brand_name !== "" &&
      Discounts !== "" &&
      maximumCount !== "" &&
      measureUnit !== "" &&
      measureValue !== "" &&
      maximum_value !== "" &&
      manufacturer_or_packer_name !== "" &&
      tags !== "" &&
      category_id !== "" &&
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
        const response = await axios.post(
          "/api/common/product/AddProductRET12",
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

          setData({
            isParent: false,
            variants: [],
            parent_item_id: "",
            name: "",
            images: [],
            long_desc: "",
            short_desc: "",
            // size: "",
            // colour: "",
            fabric: "",
            gender: "",
            size_chart: "",
            brand_name: "",
            Discounts: "",
            maximumCount: 0,
            measureUnit : "",
            measureValue : "",
            maximum_value: 0,
            manufacturer_or_packer_name: "",
            tags: [],
            category_id: "",
            month_year_of_manufacture_packing_import: "",
            net_quantity_or_measure_of_commodity_in_pkg: "",
            domain: "",
            manufacturer_or_packer_address: "",
            fulfillment_id: 1,
            common_or_generic_name_of_commodity: "",
            StoreID: authCtx.user.Store[0].StoreID._id,
          });

            setImageUpload(null);
            setMultipleImageUpload([]);
            setVariants([...variants, { size: '', colour: '' }]);
            setChecked(false);
            window.scrollTo(0, 0);
            
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

      console.log(data);
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

  const handleCheckChange = (isChecked) => {

    setChecked(isChecked);  
    if (!isChecked) {

      setPrevVariants(variants);
      setVariants([]);
      setData((prevData) => ({
        ...prevData,
        variants: [],
      }));
    } else {

      setVariants(prevVariants);
      setData((prevData) => ({
        ...prevData,
        variants: prevVariants,
      }));
    }

    setData((prevData) => ({
      ...prevData,
      isParent: isChecked,
    }));
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
      <GeneralInfo showData={data} setData={setData} isChecked={checked} onCheckChange={handleCheckChange}/>

      <div className={FCss.rowDIv}>
        <div className={FCss.rowDIvLeft}>
          <ProductCategory showData={data} setData={setData} />
        </div>
        <div className={FCss.rowDIvRight}>
          <Service showData={data} setData={setData} />
        </div>
      </div>

      <FixValues showData={data} setData={setData} />

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

RET12.propTypes = {
  domain: PropTypes.string.isRequired,
};
