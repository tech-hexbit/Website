import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
import TxtArea from "./Input/TxtArea";

// css
import FCss from "./Css/Form.module.css";
import PrCss from "./Css/Lable.module.css";
import ItCss from "./Input/Css/InputType1.module.css";

export default function ProductCategory({ setData, showData }) {
  const [tags, settags] = useState([]);
  const [tagvalue, settagvalue] = useState("");

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const addtags = (e) => {
    if ((e.keyCode === 13 && tagvalue) || (e.keyCode === 188 && tagvalue)) {
      settags([...tags, tagvalue]);
      settagvalue("");
    }
  };

  const deletetag = (val) => {
    let remaintags = tags.filter((t) => t != val);
    settags(remaintags);
  };

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
          <option value="Selected" selected disabled hidden>
            Select
          </option>
          <option value="Fruits and Vegetables">Fruits and Vegetables</option>
          <option value="Masala & Seasoning">Masala & Seasoning</option>
          <option value="Oil & Ghee">Oil & Ghee</option>
          <option value="Eggs, Meat & Fish">Eggs, Meat & Fish</option>
          <option value="Cleaning & Household">Cleaning & Household</option>
          <option value="Bakery, Cakes & Dairy">Bakery, Cakes & Dairy</option>
          <option value="Pet Care">Pet Care</option>
          <option value="Stationery">Stationery</option>
          <option value="Dairy and Cheese">Dairy and Cheese</option>
          <option value="Snacks, Dry Fruits, Nuts">
            Snacks, Dry Fruits, Nuts
          </option>
          <option value="Pasta, Soup and Noodles">
            Pasta, Soup and Noodles
          </option>
          <option value="Cereals and Breakfast">Cereals and Breakfast</option>
          <option value="Sauces, Spreads and Dips">
            Sauces, Spreads and Dips
          </option>
          <option value="Chocolates and Biscuits">
            Chocolates and Biscuits
          </option>
          <option value="Cooking and Baking Needs">
            Cooking and Baking Needs
          </option>
          <option value="Tinned and Processed Food">
            Tinned and Processed Food
          </option>
          <option value="Atta, Flours and Sooji">Atta, Flours and Sooji</option>
          <option value="Rice and Rice Products">Rice and Rice Products</option>
          <option value="Dals and Pulses">Dals and Pulses</option>
          <option value="Salt, Sugar and Jaggery">
            Salt, Sugar and Jaggery
          </option>
          <option value="Energy and Soft Drinks">Energy and Soft Drinks</option>
          <option value="Water">Water</option>
          <option value="Tea and Coffee">Tea and Coffee</option>
          <option value="Fruit Juices and Fruit Drinks">
            Fruit Juices and Fruit Drinks
          </option>
          <option value="Snacks and Namkeen">Snacks and Namkeen</option>
          <option value="Ready to Cook and Eat">Ready to Cook and Eat</option>
          <option value="Pickles and Chutney">Pickles and Chutney</option>
          <option value="Indian Sweets">Indian Sweets</option>
          <option value="Frozen Vegetables">Frozen Vegetables</option>
          <option value="Frozen Snacks">Frozen Snacks</option>
          <option value="Gift Voucher">Gift Voucher</option>
          <option value="Gourmet & World Foods">Gourmet & World Foods</option>
          <option value="Foodgrains">Foodgrains</option>
          <option value="Beverages">Beverages</option>
          <option value="Beauty & Hygiene">Beauty & Hygiene</option>
          <option value="Kitchen Accessories">Kitchen Accessories</option>
          <option value="Baby Care">Baby Care</option>
          <option value="Snacks & Branded Foods">Snacks & Branded Foods</option>
        </select>
      </div>

      {/* Tags */}
      <div className={FCss.inpDiv}>
        <p className={FCss.label}>Tags</p>

        <div className={FCss.inpTag}>
          {tags.map((tag, index) => (
            <div key={index} className={FCss.TagP}>
              <p>{tag}</p>{" "}
              <p onClick={() => deletetag(tag)} className={FCss.CloseX}>
                X
              </p>
            </div>
          ))}
          <div className={FCss.inputt}>
            <input
              value={tagvalue}
              type="text"
              placeholder="Press Enter to input"
              onChange={(e) => settagvalue(e.target.value)}
              onKeyDown={addtags}
            />
          </div>
        </div>
      </div>
    </>
  );
}

ProductCategory.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
