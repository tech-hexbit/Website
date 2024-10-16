import { useState, useContext } from "react";
import PropTypes from "prop-types";
import PrCss from "../Css/Lable.module.css";
import ItCss from "../Input/Css/InputType1.module.css";
import Dropdown from "./Dropdown";
import optionsData from "../Json/optionsData.json";
import sizeData from "../Json/size.json";
import AuthContext from "../../../../../store/auth-context";
// import ntc from "ntcjs";
// import UrlInput from "./UrlInput"

const getColorName = async (hex) => {
  try {
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex.slice(1)}`);
    const data = await response.json();
    return data.name.value || "Unknown"; // Return color name from API response
  } catch (error) {
    console.error("Error fetching color name: ", error);
    return "Unknown"; // Fallback in case of an error
  }
};

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
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
  
    // If color changes, fetch the color name using The Color API
    if (name === "colour") {
      const colorName = await getColorName(value); // Fetch color name asynchronously
      setAttribute((prevAttribute) => ({
        ...prevAttribute,
        [name]: value,
        colourName: colorName, // Set the color name returned from the API
      }));
    } else {
      setAttribute((prevAttribute) => ({
        ...prevAttribute,
        [name]: value,
      }));
    }
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
  
        // Log to check the filtered attributes before updating
        console.log("Filtered Attributes: ", filtered);
  
        // Ensure the new variant is being added correctly
        const updatedVariants = [...showData.variants, { ...filtered }];
        console.log("Updated Variants: ", updatedVariants); // Log the updated variants
  
        // Update data context
        setData((prevData) => ({
          ...prevData,
          variants: updatedVariants,
        }));
  
        // Success alert
        authCtx.showAlert({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Confirmed",
        });
  
        // Reset attributes after submission
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
    <div className={ItCss.inpDiv}>
      <p className={ItCss.inputLabel}>Colour</p>
      <input
        type="color"
        name="colour"
        value={attribute.colour}
        onChange={handleInputChange}
      />
      <span style={{ marginTop: "0.75rem" }}>
        Selected Color :: <b>{attribute.colour}</b>
      </span>
      {attribute.colour && ( // Display colourName only if colour is selected
        <span style={{ marginTop: "0.75rem" }}>
          Color Name :: <b>{attribute.colourName}</b>
        </span>
      )}
    </div>
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
          {showData.variants && showData.variants.length > 0 ? (
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