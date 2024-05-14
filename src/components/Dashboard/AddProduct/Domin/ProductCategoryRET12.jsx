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
          {[
            "Anklets",
            "Backpacks",
            "Bangles & Bracelets",
            "Bath Robes",
            "Belts",
            "Blazers & Waistcoats",
            "Blouse Pieces",
            "Blouses",
            "Boots",
            "Boxers",
            "Bracelets",
            "Briefs",
            "Brooch",
            "Burqas & Hijabs",
            "Camisoles",
            "Caps & Hats",
            "Casual Shoes",
            "Category",
            "Chains",
            "Churidars",
            "Clothing Sets",
            "Contact Lens Cases",
            "Contact Lens Solutions",
            "Contact Lens Tweezers",
            "Contact Lenses",
            "Coordinates",
            "Dhotis & Dhoti Pants",
            "Dress Materials",
            "Dresses",
            "Dungarees & Jumpsuits",
            "Dupattas & Shawls",
            "Ethnic Shoes",
            "Ethnic Wear",
            "Earrings",
            "Eye Glass Frames",
            "Eye Glasses",
            "Eyeglasses Pouches & Cases",
            "Eyewear Slings",
            "Flip-Flops & Flats",
            "Formal Shoes",
            "Gloves",
            "Gold Coins",
            "Handbags",
            "Heels",
            "Innerwear & Sleepwear",
            "Jackets & Coats",
            "Jeans",
            "Jewellery Sets",
            "Joggers",
            "Jumpsuits",
            "Kurtas & Kurta Sets",
            "Kurtis, Tunics",
            "Laces",
            "Lehenga Cholis",
            "Lingerie Sets & Accessories",
            "Mangalsutra",
            "Microfiber Wipes",
            "Night Suits",
            "Nightwear & Loungewear",
            "Necklaces",
            "Nosepins & Noserings",
            "Outdoor Shoes",
            "Palazzos",
            "Pendants",
            "Playsuits",
            "Pyjamas",
            "Robes",
            "Rings",
            "Salwars",
            "Sandals & Floaters",
            "Sarees",
            "Shapewear",
            "Sherwanis",
            "Shirts",
            "Shoe Care - Accessories",
            "Shoe Racks & Organisers",
            "Shorts",
            "Skirts",
            "Sleepwear & Loungewear",
            "Soles & Charms",
            "Socks",
            "Sports Shoes",
            "Suits",
            "Sunglasses",
            "Sweaters",
            "Swim Bottoms",
            "Swimwear",
            "T Shirts",
            "Tights, Leggings & Jeggings",
            "Tops",
            "Towels",
            "Track Pants",
            "Track Shirts",
            "Track Suits",
            "Trolley, Luggage & Suitcases",
            "Trousers",
            "Tunics",
            "Turtle Neck",
            "Turtlenecks",
            "Unstitched Fabrics",
            "Vests",
            "Watches",
            "Work & Safety Shoes",
          ].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
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
