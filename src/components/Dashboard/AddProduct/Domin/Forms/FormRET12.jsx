/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
import { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
// import Service from "../Service";
import FixValues from "../FixValues";
import GeneralInfo from "./RET12GeneralInfo";
import ProductCategory from "./ProductCategory";
import ProdParticulars from "../ProdParticulars";
import Attributes from "./Attributes";
import MultipleImageHandler from "../../MultipleImageHandler";
// import InfoSubjective from "../InfoSubjective";

import Dropdown from "./Dropdown";

// MicroInteraction
import Load from "../../../../../MicroInteraction/Load";
import optionsData from "../Json/optionsData.json";
import sizeData from "../Json/size.json";

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
  const [parentExists, setParentExists] = useState(false);
  const fileInp = useRef(null);
  const authCtx = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    images: [],
    long_desc: "",
    short_desc: "",
    code: "",
    variants: [],
    isParent: false,
    selectedParent: null,
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
    setLoad(true);

    console.log(multipleImageUpload);

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

    // Handle the single product case and update isParent if necessary
    if (data.variants.length === 1 && !data.isParent) {
      console.log("inside single product");
      const updatedVariant = { ...data.variants[0], isParent: true };
      const updatedData = {
        ...data,
        variants: [updatedVariant],
        isParent: true,
      };
      setData(updatedData); // Update the state with isParent as true

      // Proceed to submit with the updated data
      await submitProduct(updatedData);
    } else {
      // Directly submit if there's no need to update isParent
      console.log("direct submit");
      await submitProduct(data);
    }
  };

  const submitProduct = async (dataToSubmit) => {
    const {
      Discounts,
      StoreID,
      additives_info,
      brand_name,
      brand_owner_FSSAI_license_no,
      category_id,
      common_or_generic_name_of_commodity,
      fulfillment_id,
      images,
      importer_FSSAI_license_no,
      isParent,
      long_desc,
      manufacturer_or_packer_address,
      manufacturer_or_packer_name,
      maximumCount,
      maximum_value,
      month_year_of_manufacture_packing_import,
      name,
      net_quantity_or_measure_of_commodity_in_pkg,
      // Remove this
      nutritional_info,
      ondcOrgavailable_on_cod,
      ondcOrgcancellable,
      ondcOrgcontact_details_consumer_care,
      ondcOrgreturn_window,
      ondcOrgreturnable,
      ondcOrgseller_pickup_return,
      ondcOrgtime_to_ship,
      other_FSSAI_license_no,
      short_desc,
      tags,
      variants,
      selectedParent,
    } = dataToSubmit;

    const domain = "ONDC:RET12";

    console.log(selectedParent);
    if (selectedParent === null && variants.length > 1) {
      setLoad(false);
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Please Select one parent",
      });
      return;
    }

    if (
      name !== "" &&
      images !== "" &&
      long_desc !== "" &&
      short_desc !== "" &&
      Discounts !== "" &&
      brand_name !== "" &&
      maximumCount !== "" &&
      maximum_value !== "" &&
      manufacturer_or_packer_name !== "" &&
      tags !== "" &&
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
      variants.length > 0 &&
      isParent !== "" &&
      nutritional_info !== "" &&
      other_FSSAI_license_no !== "" &&
      importer_FSSAI_license_no !== "" &&
      brand_owner_FSSAI_license_no !== "" &&
      ondcOrgcontact_details_consumer_care !== "" &&
      common_or_generic_name_of_commodity !== "" &&
      StoreID
    ) {
      const formData = new FormData();
      const updatedData = { ...dataToSubmit, domain };
      formData.append("data", JSON.stringify(updatedData));

      if (imageUpload) {
        formData.append("images", imageUpload);
      }

      if (multipleImageUpload) {
        for (let i = 0; i < multipleImageUpload.length; i++) {
          formData.append("images", multipleImageUpload[i]);
        }
      }

      try {
        console.log("formdata", data);
        const response = await axios.post(
          "/api/common/product/AddProduct",
          formData,
          { headers: { Authorization: `${authCtx.token}` } }
        );
        console.log(response);
        if (
          response.data.message === "All Items Saved" ||
          response.data.message === "Add Product" ||
          response.data.message === "Product added successfully"
        ) {
          setLoad(false);
          authCtx.showAlert({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: "Successfully Added",
          });
          resetForm();
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

  const resetForm = () => {
    setData({
      name: "",
      images: [],
      long_desc: "",
      short_desc: "",
      code: "",
      variants: [],
      isParent: false,
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
    setData({ ...data, ["variants"]: [] });
  }, [data.category_id]);

  useEffect(() => {
    if (data.isParent === false && data.variants.length > 1) {
      const updatedVariants = data.variants[0];
      setData({ ...data, ["variants"]: [updatedVariants] });
    }
  }, [data.isParent]);

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
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Is Parent  */}
      {/* <p className={ItCss.inpCheckbox}>
        Parent Item?
        <input
          type="checkbox"
          checked={data.isParent}
          onChange={(e) => setData({ ...data, ["isParent"]: e.target.checked })}
          // onChange={handleCheckBox}
          style={{ width: "16px", height: "16px", cursor: "pointer" }}
        />
      </p> */}

      <Attributes showData={data} setData={setData} />

      {data.variants && Array.isArray(data.variants) && data.variants.length > 0
        ? data.variants.map((variant, index) => (
            <div key={index}>
              <div className="variant-header">
                {/* Variant Title */}
                <h3>
                  Variant {index + 1}
                  {/* {" "}
                  {data.selectedParent === index && "(parent)"} */}
                </h3>

                {/* Checkbox for selecting the parent */}
                {!data.isParent && (
  <>
    <input
      type="checkbox"
      checked={data.selectedParent === index}
      onChange={(e) => {
        if (e.target.checked) {
          setData((prevState) => ({
            ...prevState,
            selectedParent: index,
            variants: prevState.variants.map((variant, i) => ({
              ...variant,
              isParent: i === index,
            })),
          }));
        } else {
          setData((prevState) => ({
            ...prevState,
            selectedParent: null,
            variants: prevState.variants.map((variant) => ({
              ...variant,
              isParent: false,
            })),
          }));
        }
      }}
    />
    <label className={ItCss.parentTxt}>Mark as Parent</label>
  </>
)}

              </div>

              {data.variants[index].hasOwnProperty("gender") ? (
                <Dropdown
                  fieldName={`Gender of variant ${index + 1}`}
                  name={"gender"}
                  // isParent={variant.isParent}
                  // parentExists={parentExists}
                  options={["men", "women", "kids", "unisex"]}
                  value={data.variants[index]["gender"]}
                  variantIndex={index}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    const resetVariant = Object.entries({
                      ...newVariant[index],
                    // eslint-disable-next-line no-unused-vars
                    }).reduce((acc, [key, val]) => {
                      acc[key] = key === "gender" ? value : "";
                      return acc;
                    }, {});
                    newVariant[index] = resetVariant;
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}
              {data.variants[index].hasOwnProperty("colour") ? (
                <div className={ItCss.inpDiv}>
                  <p className={ItCss.inputLabel}>{`Colour of variant ${
                    index + 1
                  }`}</p>
                  <input
                    type="color"
                    name="colour"
                    value={data.variants[index]["colour"]}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      const newVariant = [...data.variants];
                      newVariant[index] = {
                        ...newVariant[index],
                        [name]: value,
                      };
                      setData({ ...data, variants: newVariant });
                    }}
                  />
                  <span style={{ marginTop: "0.75rem" }}>
                    Selected Color :: <b>{data.variants[index]["colour"]}</b>
                  </span>
                </div>
              ) : (
                ""
              )}
              {data.variants[index].hasOwnProperty("sizeChart") ? (
                <div className={ItCss.inpDiv}>
                  <p className={ItCss.inputLabel}>Size Chart</p>
                  <input
                    type="url"
                    name="sizeChart"
                    value={data.variants[index]["sizeChart"]}
                    placeholder={"Enter Size Chart"}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      const newVariant = [...data.variants];
                      newVariant[index] = {
                        ...newVariant[index],
                        [name]: value,
                      };
                      setData({ ...data, variants: newVariant });
                    }}
                  />
                </div>
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("fabric") ? (
                <Dropdown
                  fieldName={`Fabric of variant ${index + 1}`}
                  name="fabric"
                  options={optionsData.fabric}
                  value={data.variants[index]["fabric"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("strapMaterial") ? (
                <Dropdown
                  fieldName={`Strap Material of variant ${index + 1}`}
                  name="fabric"
                  options={optionsData.fabric}
                  value={data.variants[index]["strapMaterial"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("waterResistant") ? (
                <Dropdown
                  fieldName={`Water Resistant of variant ${index + 1}`}
                  name="waterResistant"
                  options={["y", "n"]}
                  value={data.variants[index]["waterResistant"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("display") ? (
                <Dropdown
                  fieldName={`Display of variant ${index + 1}`}
                  name="display"
                  options={optionsData.display}
                  value={data.variants[index]["display"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("glassMaterial") ? (
                <Dropdown
                  fieldName={`Glass Material of variant ${index + 1}`}
                  name="glassMaterial"
                  options={optionsData.glass_material}
                  value={data.variants[index]["glassMaterial"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("sportType") ? (
                <Dropdown
                  fieldName={`Sport Type of variant ${index + 1}`}
                  name="sportType"
                  options={optionsData.sport_type}
                  value={data.variants[index]["sportType"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("baseMetal") ? (
                <Dropdown
                  fieldName={`Base Metal of variant ${index + 1}`}
                  name="baseMetal"
                  options={optionsData.base_metal}
                  value={data.variants[index]["baseMetal"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("plating") ? (
                <Dropdown
                  fieldName={`Plating of variant ${index + 1}`}
                  name="plating"
                  options={optionsData.plating}
                  value={data.variants[index]["plating"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}

              {data.variants[index].hasOwnProperty("size") ? (
                <Dropdown
                  fieldName={`Size of variant ${index + 1}`}
                  name="size"
                  options={
                    data.variants[index].gender === ""
                      ? ["please enter gender"]
                      : sizeData?.[0]?.[data.variants[index]?.gender]?.[
                          data.category_id
                        ] ?? []
                  }
                  value={data.variants[index]["size"]}
                  onChange={(name, value) => {
                    const newVariant = [...data.variants];
                    newVariant[index] = { ...newVariant[index], [name]: value };
                    setData({ ...data, variants: newVariant });
                  }}
                />
              ) : (
                ""
              )}
              <div className={ItCss.buttonParent}>
                <div
                  style={{ backgroundColor: "#F16360" }}
                  onClick={(e) => {
                    const updatedVariant = data.variants.filter(
                      (item, idx) => idx !== index
                    );
                    setData({ ...data, ["variants"]: updatedVariant });
                  }}
                >
                  Remove Variant
                </div>
              </div>
            </div>
          ))
        : ""}

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
