import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//component
import TxtArea from "./Input/TxtArea";

// css
import FCss from "./Css/Form.module.css";
import PrCss from "./Css/Lable.module.css";
import ItCss from "./Input/Css/InputType1.module.css";

const ProductCategory = ({ setData, showData }) => {
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState("");

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...showData, [name]: value });
  };

  const addTag = (e) => {
    if ((e.keyCode === 13 && tagValue) || (e.keyCode === 188 && tagValue)) {
      setTags([...tags, tagValue]);
      setTagValue("");
    }
  };

  const deleteTag = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  useEffect(() => {
    setData({
      ...showData,
      tags,
    });
  }, [tags]);

  return (
    <>
      <p className={PrCss.AboutYou}>Publish Info</p>

      {/* Category */}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Category</p>

        <select
          name="category_id"
          id=""
          className={ItCss.inp}
          onChange={handleSelectChange}
        >
          <option value="" selected disabled hidden>
            Select
          </option>
          <option value="Dresses">Dresses</option>
          <option value="Tops">Tops</option>
          <option value="Bottoms">Bottoms</option>
          <option value="Jackets & Coats">Jackets & Coats</option>
          <option value="Suits">Suits</option>
          <option value="Skirts">Skirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Shirts">Shirts</option>
          <option value="Shorts">Shorts</option>
          <option value="Sweaters & Cardigans">Sweaters & Cardigans</option>
          <option value="Activewear">Activewear</option>
          <option value="Sleepwear">Sleepwear</option>
          <option value="Ethnic Wear">Ethnic Wear</option>
          <option value="Western Wear">Western Wear</option>
          <option value="Formal Wear">Formal Wear</option>
          <option value="Casual Wear">Casual Wear</option>
          <option value="Party Wear">Party Wear</option>
          <option value="Streetwear">Streetwear</option>
          <option value="Workwear">Workwear</option>
          <option value="Athleisure">Athleisure</option>
          <option value="Shoes">Shoes</option>
          <option value="Sandals">Sandals</option>
          <option value="Boots">Boots</option>
          <option value="Heels">Heels</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Flats">Flats</option>
          <option value="Loafers">Loafers</option>
          <option value="Slippers">Slippers</option>
          <option value="Flip Flops">Flip Flops</option>
          <option value="Sunglasses">Sunglasses</option>
          <option value="Belts">Belts</option>
          <option value="Hats">Hats</option>
          <option value="Scarves">Scarves</option>
          <option value="Gloves">Gloves</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Bags">Bags</option>
          <option value="Wallets">Wallets</option>
        </select>
      </div>

      {/* Tags */}
      <div className={FCss.inpDiv}>
        <p className={FCss.label}>Tags</p>

        <div className={FCss.inpTag}>
          {tags.map((tag, index) => (
            <div key={index} className={FCss.TagP}>
              <p>{tag}</p>{" "}
              <p onClick={() => deleteTag(tag)} className={FCss.CloseX}>
                X
              </p>
            </div>
          ))}
          <div className={FCss.inputt}>
            <input
              value={tagValue}
              type="text"
              placeholder="Press Enter to add tag"
              onChange={(e) => setTagValue(e.target.value)}
              onKeyDown={addTag}
            />
          </div>
        </div>
      </div>

      {/* Additives Info */}
      <TxtArea
        Label="Additional Info"
        showData={showData}
        setData={setData}
        field="additives_info"
        placeholder="Material, Fit, Style, Fabric type, etc."
      />
    </>
  );
};

ProductCategory.propTypes = {
  showData: PropTypes.object.isRequired,
};

export default ProductCategory;
