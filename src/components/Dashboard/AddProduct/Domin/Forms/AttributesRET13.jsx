/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import PrCss from "../Css/Lable.module.css";
import ItCss from "../Input/Css/InputType1.module.css";
import Dropdown from "./Dropdown";
import optionsData from "../Json/optionsDataRET13.json";
import sizeData from "../Json/size.json";
import AuthContext from "../../../../../store/auth-context";
// import UrlInput from "./UrlInput"

const AttributesRET13 = ({ setData, showData }) => {
  const [attribute, setAttribute] = useState({
    gender: "",
    colour: "",
    concern: "",
    ingredient: "",
    conscious: "",
    preference: "",
    formulation: "",
    skinType: "",
    colourName: " ",
  });

  const authCtx = useContext(AuthContext);

  // const [addedFields, setAddedField] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAttribute((prevAttribute) => ({
      ...prevAttribute,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setAttribute({ ...attribute, [name]: value });
  };

  const handleSubmit = () => {
    if (
      showData.category_id &&
      optionsData &&
      optionsData.categories &&
      Array.isArray(optionsData.categories[showData.category_id]) &&
      optionsData.categories[showData.category_id][0]
    ) {
      if (!showData.isParent && showData["variants"].length > 0) {
        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Cannot add variant w/o parent",
        });
        return;
      }
      let allFieldsValid = true;

      Object.keys(optionsData.categories[showData.category_id][0]).forEach(
        (key) => {
          const fieldKey = optionsData.categories[showData.category_id][0][key];
          if (attribute[fieldKey] === "") {
            authCtx.showAlert({
              mainColor: "#FDEDED",
              secondaryColor: "#F16360",
              symbol: "error",
              title: "Error",
              text: "Add " + fieldKey,
            });
            allFieldsValid = false;
            return; // Exit the forEach loop early
          }
        }
      );

      if (allFieldsValid) {
        const filtered = Object.keys(attribute)
          .filter((key) => attribute[key] !== "")
          .reduce((obj, key) => {
            obj[key] = attribute[key];
            return obj;
          }, {});

        const updatedVariants = [...showData.variants, { ...filtered }];

        setData({
          ...showData,
          variants: updatedVariants,
        });

        authCtx.showAlert({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Confirmed",
        });
        setAttribute({
            gender: "",
            colour: "",
            concern: "",
            ingredient: "",
            conscious: "",
            preference: "",
            formulation: "",
            skinType: "",
            colourName: " ",
        });
      }
    }
  };

  return (
    <>
      {showData.category_id &&
      optionsData.categories &&
      optionsData.categories[showData.category_id] &&
      optionsData.categories[showData.category_id][0] &&
      Object.keys(optionsData.categories[showData.category_id][0]).length >
        0 ? (
        <p className={PrCss.AboutYou}>Mandatory Attributes</p>
      ) : (
        ""
      )}
      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("gender") ? (
        <Dropdown
          fieldName={"Gender"}
          name={"gender"}
          options={["men", "women", "kids", "unisex"]}
          value={attribute.gender}
          onChange={handleSelectChange}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("colour") ? (
        <>
          <div className={ItCss.inpDiv}>
            <p className={ItCss.inputLabel}>Colour</p>
            <input
              type="color"
              name="colour"
              value={attribute.colour}
              onChange={handleInputChange}
            />
            {/* <br /> */}
            <span style={{ marginTop: "0.75rem" }}>
              Selected Color :: <b>{attribute.colour}</b>
            </span>
          </div>
        </>
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("concern") ? (
        <div className={ItCss.inpDiv}>
          <p className={ItCss.inputLabel}>Concern</p>
          <input
            // type="url"
            name="concern"
            value={attribute.concern}
            placeholder={"Enter Concern"}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        ""
      )}

    {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("ingredient") ? (
        <div className={ItCss.inpDiv}>
          <p className={ItCss.inputLabel}>Ingredient</p>
          <input
            // type="url"
            name="ingredient"
            value={attribute.ingredient}
            placeholder={"Enter Ingredients"}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        ""
      )}

{showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("conscious") ? (
        <div className={ItCss.inpDiv}>
          <p className={ItCss.inputLabel}>Conscious</p>
          <input
            // type="url"
            name="conscious"
            value={attribute.conscious}
            placeholder={"Enter Conscious"}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        ""
      )}

{showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("preference") ? (
        <div className={ItCss.inpDiv}>
          <p className={ItCss.inputLabel}>Preference</p>
          <input
            // type="url"
            name="preference"
            value={attribute.preference}
            placeholder={"Enter Preference"}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        ""
      )}

{showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("formulation") ? (
        <div className={ItCss.inpDiv}>
          <p className={ItCss.inputLabel}>Formulation</p>
          <input
            // type="url"
            name="formulation"
            value={attribute.formulation}
            placeholder={"Enter Formulation"}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        ""
      )}

{showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("skinType") ? (
        <div className={ItCss.inpDiv}>
          <p className={ItCss.inputLabel}>Skin Type</p>
          <input
            // type="url"
            name="skinType"
            value={attribute.skinType}
            placeholder={"Skin Type"}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        ""
      )}


     

      {showData.category_id &&
      optionsData.categories &&
      optionsData.categories[showData.category_id] &&
      optionsData.categories[showData.category_id][0] &&
      Object.keys(optionsData.categories[showData.category_id][0]).length >
        0 ? (
        <div className={ItCss.buttonParent}>
          {showData.isParent ? (
            <div style={{ backgroundColor: "#4bb543" }} onClick={handleSubmit}>
              Add Variant
            </div>
          ) : (
            <div style={{ backgroundColor: "#4bb543" }} onClick={handleSubmit}>
              Submit
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

AttributesRET13.propTypes = {
  setData: PropTypes.func.isRequired,
  showData: PropTypes.object.isRequired,
};

export default AttributesRET13;