import { useState, useContext } from "react";
import PropTypes from "prop-types";

// components
import Dropdown from "./Dropdown";

// data
import sizeData from "../Json/size.json";
import optionsData from "../Json/optionsData.json";

// state
import AuthContext from "../../../../../store/auth-context";

// css
import PrCss from "../Css/Lable.module.css";
import ItCss from "../Input/Css/InputType1.module.css";

const Attributes = ({ setData, showData }) => {
  const [attribute, setAttribute] = useState({
    gender: "",
    colour: "",
    size: "",
    size_Chart: "",
    fabric: "",
    strapMaterial: "",
    waterResistant: "",
    display: "",
    glassMaterial: "",
    colourName: "",
    sportType: "",
    baseMetal: "",
    plating: "",
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
          size: "",
          sizeChart: "",
          fabric: "",
          strapMaterial: "",
          waterResistant: "",
          display: "",
          glassMaterial: "",
          colourName: "",
          sportType: "",
          baseMetal: "",
          plating: "",
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
      optionsData.categories[showData.category_id][0].includes("sizeChart") ? (
        <div className={ItCss.inpDiv}>
          <p className={ItCss.inputLabel}>Size Chart</p>
          <input
            type="url"
            name="sizeChart"
            value={attribute.sizeChart}
            placeholder={"Enter Size Chart"}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData &&
      optionsData.categories[showData.category_id][0].includes("fabric") ? (
        <Dropdown
          fieldName="Fabric"
          name="fabric"
          onChange={handleSelectChange}
          options={optionsData.fabric}
          value={attribute.fabric}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes(
        "strapMaterial"
      ) ? (
        <Dropdown
          fieldName="Strap Material"
          name="strapMaterial"
          onChange={handleSelectChange}
          options={optionsData.strap_material}
          value={attribute.strapMaterial}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes(
        "waterResistant"
      ) ? (
        <Dropdown
          fieldName="Water Resistant"
          name="waterResistant"
          onChange={handleSelectChange}
          options={["y", "n"]}
          value={attribute.waterResistant}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("display") ? (
        <Dropdown
          fieldName="Display"
          name="display"
          onChange={handleSelectChange}
          options={optionsData.display}
          value={attribute.display}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes(
        "glassMaterial"
      ) ? (
        <Dropdown
          fieldName="Glass Material"
          name="glassMaterial"
          onChange={handleSelectChange}
          options={optionsData.glass_material}
          value={attribute.glassMaterial}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("sportType") ? (
        <Dropdown
          fieldName="Sport Type"
          name="sportType"
          onChange={handleSelectChange}
          options={optionsData.sport_type}
          value={attribute.sportType}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("baseMetal") ? (
        <Dropdown
          fieldName="Base Metal"
          name="baseMetal"
          onChange={handleSelectChange}
          options={optionsData.base_metal}
          value={attribute.baseMetal}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("plating") ? (
        <Dropdown
          fieldName="Plating"
          name="plating"
          onChange={handleSelectChange}
          options={optionsData.plating}
          value={attribute.plating}
        />
      ) : (
        ""
      )}

      {showData.category_id &&
      optionsData.categories[showData.category_id][0].includes("size") ? (
        <Dropdown
          fieldName="Size"
          name="size"
          onChange={handleSelectChange}
          options={
            attribute.gender == ""
              ? ["please enter gender"]
              : sizeData?.[0]?.[attribute?.gender]?.[showData.category_id] ?? []
          }
          value={attribute.size}
        />
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

Attributes.propTypes = {
  setData: PropTypes.func.isRequired,
  showData: PropTypes.object.isRequired,
};

export default Attributes;
